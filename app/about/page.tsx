import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{ backgroundImage: 'url(/images/about-hero.jpg)' }}>
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white">About Isaiah Bizabani</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">My Journey</h2>
        <p className="text-lg text-gray-700 mb-6">
        Isaiah Munyaradzi Bizabani is a technology expert with a specialization in Generative AI, DevOps, and Cloud Computing. Over the years, he has transformed his passion for technology into a driving force for innovation and development, not only in the UK but also in his native Zimbabwe. As the visionary behind the Chisuma Technology Centre, Isaiah is dedicated to bridging the digital divide in Zimbabwe, ensuring that the benefits of cutting-edge technology are accessible to all.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
        Isaiah's entrepreneurial spirit led him to found Netonline Media Limited, a company that has grown to become a significant player in the digital and tech industry. Under his leadership, the company has expanded its reach with the establishment of Netonline Limited Zimbabwe and Netonline Global Limited, reflecting his commitment to creating opportunities and driving technological advancement across borders.
        </p>
        <p className="text-lg text-gray-700 mb-6">
        Throughout his career, Isaiah has had the privilege of working with some of the most respected brands across various sectors. His collaborations with Asra Paragon Housing Association, Wandle Housing Association, Access Forex, Access Finance, Kumba Group, Atoz Procurement Services, and Atlantic Solicitors have allowed him to apply his expertise in developing solutions that meet complex business needs while driving growth and innovation.
        </p>
        <p className="text-lg text-gray-700 mb-6">
        What sets Isaiah apart is his unwavering commitment to the principles of Ubuntu—a philosophy that emphasizes interconnectedness and shared humanity. This commitment is evident in his work, where he strives to create technological solutions that are not only innovative but also ethical and inclusive. Isaiah's journey is a testament to the power of technology to transform lives and build stronger communities, both in Zimbabwe and beyond.
        </p>
        <p className="text-lg text-gray-700 mb-6">
        As Isaiah continues to lead in the field of technology, he remains focused on his mission to contribute to the development of Zimbabwe and to inspire others to use technology as a tool for positive change. His journey is far from over, and with each new project and collaboration, Isaiah moves closer to realizing his vision of a more connected, equitable, and technologically advanced world.
        </p>
      </section>
    </div>
  );
}
