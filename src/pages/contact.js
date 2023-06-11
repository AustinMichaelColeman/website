import React from 'react';

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <form className="space-y-4">
        <label>
          Name:
          <input type="text" name="name" className="block w-full p-2 border border-gray-300 rounded" />
        </label>
        <label>
          Email:
          <input type="text" name="email" className="block w-full p-2 border border-gray-300 rounded" />
        </label>
        <label>
          Message:
          <textarea name="message" className="block w-full p-2 border border-gray-300 rounded" />
        </label>
        <input type="submit" value="Submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" />
      </form>
    </div>
  );
};

export default Contact;