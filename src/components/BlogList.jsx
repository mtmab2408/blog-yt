import { useEffect, useState } from 'react';

function BlogList({ selectedTag }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/src/data/blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // Apply filtering
  const filteredBlogs =
    selectedTag === 'All' ? blogs : blogs.filter((blog) => blog.tag === selectedTag);

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
