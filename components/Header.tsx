"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Icons for mobile menu

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/book" className="hover:underline">Book</Link>
          <Link href="/snippets" className="hover:underline">Snippets</Link>
          <Link href="/articles" className="hover:underline">Articles</Link>
          <Link href="/guestbook" className="hover:underline">Guestbook</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-2 mt-4 px-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/articles" className="hover:underline">Articles</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      )}
    </header>
  );
}
