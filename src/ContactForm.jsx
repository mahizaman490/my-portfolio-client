import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_omat84u', // replace with your EmailJS service ID
        'template_xwo11jj', // replace with your EmailJS template ID
        templateParams,
        '2HX9rTjy9KcpJux4Q' // replace with your actual public key
      );

      Swal.fire('Message sent successfully!', '', 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      Swal.fire('Error sending message. Please try again later!', '', 'error');
    }
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 p-6 border "
      onSubmit={sendEmail}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-slate-300 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 "
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-slate-300 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-slate-300 text-sm font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
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
