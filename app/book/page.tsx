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
        <h2 className="text-3xl font-bold text-center mb-6">Exploring the Intersection of AI and African Values for Sustainable Growth</h2>
        <div className="max-w-3xl mx-auto text-justified">
          <p className="text-lg text-gray-700 mb-6">
          In <strong>From Generative AI to Ubuntu: A Vision for Zimbabwe’s Technological Renaissance</strong>, Isaiah Munyaradzi Bizabani explores the transformative potential of merging cutting-edge technology with the deeply rooted African philosophy of Ubuntu. This groundbreaking work delves into how Generative AI can be harmonized with the principles of interconnectedness, community, and shared humanity to drive innovation, economic growth, and sustainable development across Africa.
          </p>
          <p className="text-lg text-gray-700 mb-6">
          Through a series of thought-provoking chapters, the book provides insights into how these emerging technologies can be tailored to address the unique challenges faced by African societies. It also highlights real-world applications of Generative AI in sectors such as healthcare, education, and agriculture, showcasing how they can be leveraged to create solutions that are not only innovative but also equitable and culturally relevant.
          </p>
          <p className="text-lg text-gray-700 mb-6">
          From Generative AI to Ubuntu is not just a book; it's a manifesto for a new technological era in Africa—one that is driven by the collective strength of its people and guided by the wisdom of its ancestral philosophies. Whether you are a technology enthusiast, a scholar, or someone interested in the future of Africa, this book will inspire you to think differently about the role of technology in society and the power of community in shaping the future.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Join Isaiah Bizabani on this journey of innovation and cultural revival, and discover how the future of AI and Ubuntu can create a better world for all.
          </p>
          <Link href="/contact" className="mt-8 bg-warm-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300">
          Reach Out and Connect
          </Link>
        </div>
      </section>
    </div>
  );
}

