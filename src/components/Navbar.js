import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="text-blue-500 hover:text-blue-800">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="text-blue-500 hover:text-blue-800">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;