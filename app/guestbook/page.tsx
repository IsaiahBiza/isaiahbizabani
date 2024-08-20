"use client"; // Ensure client-side rendering

import { useState } from 'react';

export default function GuestbookPage() {
  const [entries, setEntries] = useState<string[]>([]);
  const [newEntry, setNewEntry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEntries([...entries, newEntry]);
    setNewEntry('');
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Guestbook</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            rows={4}
            placeholder="Leave a message..."
            required
          />
          <button type="submit" className="w-full bg-warm-gold text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition ease-in-out duration-300">
            Sign Guestbook
          </button>
        </form>
        <div className="max-w-lg mx-auto">
          {entries.length > 0 ? (
            <ul className="list-disc list-inside">
              {entries.map((entry, index) => (
                <li key={index} className="mb-2">{entry}</li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No entries yet. Be the first to sign the guestbook!</p>
          )}
        </div>
      </section>
    </div>
  );
}
