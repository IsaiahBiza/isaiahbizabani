// components/NewsletterForm.tsx

"use client"; // Ensures the component is rendered on the client-side

import React, { useState } from 'react';

export default function NewsletterForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '' });
      } else {
        setError('Failed to send email. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section className="bg-yellow-600 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-8">
          Join our newsletter to stay informed about the latest insights and developments.
        </p>
        {submitted ? (
          <p className="text-green-200 text-center">
            Thank you for subscribing! You'll hear from us soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {error && (
              <p className="text-red-400 text-center mb-4">{error}</p>
            )}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 text-gray-900 rounded-md mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 text-gray-900 rounded-md mb-4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white text-yellow-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300"
            >
              Subscribe Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
