"use client"; // Ensure client-side rendering

import Link from 'next/link';

export default function HeroSection() {
  return (
<section className="relative h-screen overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/videos/hero-video.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-4 text-center">
    <h1 className="text-white text-5xl font-bold mb-4">Welcome to Isaiah Bizabani’s World</h1>
    <p className="text-white text-xl mb-8">Where Generative AI meets Ubuntu Philosophy</p>
    <Link href="/about" className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700">
      Learn More
    </Link>
  </div>
</section>

  );
}
