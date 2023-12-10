import React from 'react';

const ContactForm = () => {
  return (
    <form className="max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
