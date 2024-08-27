import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import { usePathname } from "next/navigation";
import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="bg-gray-100 text-gray-900">
        <Header />
        {children}
        <footer className="bg-slate-blue text-white p-4 text-center">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <Link href="/about" className="text-gray-400 hover:text-white">
                My Story
              </Link>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <Link
                href="/book"
                className="text-gray-400 hover:text-white block mb-2"
              >
                Books
              </Link>
              <Link
                href="/articles"
                className="text-gray-400 hover:text-white block mb-2"
              >
                Articles
              </Link>
              <Link
                href="/snippets"
                className="text-gray-400 hover:text-white block mb-2"
              >
                Snippets
              </Link>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white block mb-2"
              >
                Contact Me
              </Link>
              <Link
                href="/guestbook"
                className="text-gray-400 hover:text-white block mb-2"
              >
                Guest Book
              </Link>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <Link
                href="https://www.linkedin.com/in/isaiahbizabani/"
                className="text-gray-400 hover:text-white block mb-2"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.facebook.com/isaiah.bizabani"
                className="text-gray-400 hover:text-white block mb-2"
              >
                Facebook
              </Link>
              <Link
                href="https://x.com/IsaiahBizabani"
                className="text-gray-400 hover:text-white block"
              >
                Twitter
              </Link>
            </div>
          </div>
          <div className="text-center text-white mt-8">
            © 2024 Isaiah Bizabani. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
