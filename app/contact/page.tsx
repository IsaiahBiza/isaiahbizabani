"use client"; // Ensure client-side rendering
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendContactEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setError(null);
      } else {
        const { message } = await response.json();
        setError(message || 'Something went wrong');
      }
    } catch (err) {
      setError('Something went wrong');
      console.error('Error:', err);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
        {submitted ? (
          <p className="text-green-500 text-center">Thank you for your message! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-warm-gold text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition ease-in-out duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
