import React from 'react';
import blogPosts from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-500 mb-2">{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;