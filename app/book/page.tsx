import Link from "next/link";

export default function BookPage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/images/book-hero.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white">From Generative AI to Ubuntu: A Vision for Zimbabwe’s Technological Renaissance</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">About the Book</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            "From Generative AI to Ubuntu: A Vision for Zimbabwe’s Technological Renaissance" explores the intersection of advanced technology and cultural wisdom. This book dives deep into how the principles of Ubuntu can guide the integration of Generative AI in ways that are sustainable, ethical, and rooted in African values.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Join Isaiah Bizabani on this journey of innovation and cultural revival, and discover how the future of AI and Ubuntu can create a better world for all.
          </p>
          <Link href="/contact" className="mt-8 bg-warm-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300">
            Contact Me for More Information
          </Link>
        </div>
      </section>
    </div>
  );
}

