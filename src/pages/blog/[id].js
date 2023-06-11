import React from 'react';
import blogPosts from '../../data/blogPosts';

const BlogPost = ({ post }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((post) => post.id.toString() === params.id);

  return { props: { post } };
}

export default BlogPost;