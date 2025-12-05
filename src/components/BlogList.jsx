import { useEffect, useState } from 'react';
import logger from '../logger';

/**
 * Renders a list of blog posts with optional tag filtering.
 *
 * @component
 * @param {Object} props
 * @param {string} props.selectedTag - The currently selected tag used for filtering.
 */

function BlogList({ selectedTag }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    logger.info('BlogList mounted — starting blog fetch');

    fetch('/src/data/blogs.json')
      .then((res) => {
        logger.debug('Fetch response received', res);

        if (!res.ok) {
          logger.warn(`Fetch returned non-OK status: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        logger.info(`Loaded ${data.length} blogs`);
        setBlogs(data);
      })
      .catch((err) => {
        logger.error('Failed to fetch blogs', err);
      })
      .finally(() => {
        setLoading(false);
        logger.debug('Blog fetch effect completed');
      });
  }, []);

  if (loading) {
    logger.debug('BlogList rendering in loading state');
    return <p>Loading blogs...</p>;
  }

  const filteredBlogs =
    selectedTag === 'All' ? blogs : blogs.filter((blog) => blog.tag === selectedTag);

  logger.info(`Rendering BlogList with tag "${selectedTag}" — ${filteredBlogs.length} items`);
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10 px-10">
      {filteredBlogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-xl shadow-md p-4 ring-1 ring-gray-300 hover:shadow-xl hover:ring-gray-500 hover:scale-[1.02] transition-all"
        >
          <img src={blog.image} className="rounded-md h-40 w-full object-cover" />

          <h2 className="text-xl font-semibold mt-3">{blog.title}</h2>
          <p className="text-gray-600 text-sm mt-1">{blog.excerpt}</p>

          <button className="mt-3 text-white underline">Read more</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
