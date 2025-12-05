import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../Search';

describe('Search Component', () => {
  test('calls onTagChange when a tag is clicked', () => {
    const mockFn = vi.fn();

    render(<Search onTagChange={mockFn} />);

    const metalcoreTag = screen.getByText('Metalcore');

    fireEvent.click(metalcoreTag);

    expect(mockFn).toHaveBeenCalledWith('Metalcore');
  });
});
