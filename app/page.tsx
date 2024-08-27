"use client"; // Ensure client-side rendering
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faHandsHelping,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import NewsletterForm from "@/components/NewsletterForm";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  // State for form handling
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center">
          <h1 className="text-white text-5xl font-bold mb-4">
            Welcome to Isaiah Bizabani's World of Innovation
          </h1>
          <p className="text-white text-lg mb-8">
            Where Generative AI meets Ubuntu Philosophy.
          </p>
          <Link
            href="/about"
            className="bg-warm-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto py-12 p-6">
        <div className="max-w-3xl mx-auto text-justify">
          <p className="text-lg text-gray-700 mb-6">
            Hello, I’m Isaiah Munyaradzi Bizabani, a technology expert
            specializing in Generative AI, DevOps, and Cloud Computing. Over the
            years, I’ve worked with various global brands and founded several
            successful ventures, including Netonline Media Limited, Netonline
            Limited Zimbabwe, and Netonline Global Limited. My passion lies in
            harnessing cutting-edge technology to solve real-world problems and
            contribute to the advancement of my native Zimbabwe.
          </p>
          <h2 className="text-3xl font-bold text-center mb-6">
            About the Book
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            <strong>
              From Generative AI to Ubuntu: A Vision for Zimbabwe’s
              Technological Renaissance
            </strong>{" "}
            is my latest book, which delves into the intersection of advanced
            technology and cultural wisdom. In this book, I explore how the
            principles of Ubuntu can guide the integration of Generative AI in
            ways that are sustainable, ethical, and rooted in African values.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Through in-depth research and case studies, I offer a unique
            perspective on how Africa, particularly Zimbabwe, can lead in the
            global technological landscape by blending innovation with
            tradition. This book is not just for tech enthusiasts, but also for
            those interested in cultural studies, sustainable development, and
            the future of Africa.
          </p>
          <h2 className="text-3xl font-bold text-center mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            I’m excited to share this journey with you. Whether you’re here to
            learn more about my book, explore the latest insights on technology
            and Ubuntu, or simply connect, I invite you to stay updated by
            subscribing to my newsletter.
          </p>
          <div className="flex justify-center items-center h-full">
            <Link
              href="/book"
              className="mt-8 bg-warm-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300"
            >
              About The Book
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore My Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <Image
              src="/images/generative-ai.jpg"
              alt="Generative AI"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Generative AI</h3>
            <p className="text-gray-700 mb-4">
              Discover the latest advancements in Generative AI and how they can
              be applied to real-world challenges.
            </p>
            <Link
              href="/articles/generative-ai-impact"
              className="text-warm-gold hover:text-yellow-700"
            >
              Read More
            </Link>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <Image
              src="/images/ubuntu-philosophy.jpg"
              alt="Ubuntu Philosophy"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Ubuntu Philosophy</h3>
            <p className="text-gray-700 mb-4">
              Explore the principles of Ubuntu and how they intersect with
              modern technology to create sustainable solutions.
            </p>
            <Link
              href="/articles/ubuntu-philosophy"
              className="text-warm-gold hover:text-yellow-700"
            >
              Read More
            </Link>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <Image
              src="/images/sustainable-technology.jpg"
              alt="Sustainable Technology"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">
              Sustainable Technology
            </h3>
            <p className="text-gray-700 mb-4">
              Learn about sustainable technology initiatives that are making a
              global impact.
            </p>
            <Link
              href="/articles/sustainable-technology"
              className="text-warm-gold hover:text-yellow-700"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-soft-ivory py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What My Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                "Isaiah's insights into Generative AI and Ubuntu are truly
                transformative!"
              </p>
              <p className="text-yellow-600 font-bold">Thandie Ndlovu</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                "A must-read for anyone interested in the future of technology."
              </p>
              <p className="text-yellow-600 font-bold">David Thompson</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                "Combining AI with Ubuntu is a visionary approach to sustainable
                tech."
              </p>
              <p className="text-yellow-600 font-bold">Kemi Richardson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section with Opt-in Form */}
      <section className="bg-yellow-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">
            Join our newsletter to stay informed about the latest insights and
            developments.
          </p>
          {submitted ? (
            <p className="text-green-500 text-center">
              Thank you for subscribing! You'll hear from us soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
    </div>
  );
}
