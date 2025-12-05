import { render, screen, waitFor } from '@testing-library/react';
import BlogList from '../BlogList';

vi.mock('../../logger', () => ({
  default: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
  },
}));

const mockBlogs = [
  { id: 1, title: 'A', tag: 'Metalcore', excerpt: 'x', image: '' },
  { id: 2, title: 'B', tag: 'Rock/Heavy Rock', excerpt: 'y', image: '' },
];

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockBlogs),
  })
);

describe('BlogList Component', () => {
  test('filters blogs by selectedTag', async () => {
    render(<BlogList selectedTag="Metalcore" />);

    await waitFor(() => expect(screen.getByText('A')).toBeInTheDocument());

    expect(screen.queryByText('B')).not.toBeInTheDocument();
  });
});
