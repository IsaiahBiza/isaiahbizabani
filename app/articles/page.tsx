import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useState } from 'react';

export default function ArticlesPage() {
  const articlesDirectory = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      intro: data.intro,
    };
  });

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.slug} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
            <p className="text-gray-700 mb-4">{article.intro}</p>
            <Link href={`/articles/${article.slug}`} className="text-warm-gold hover:text-yellow-700">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
