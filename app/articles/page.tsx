import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

const ArticlesPage = () => {
  const articlesDir = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(articlesDir);

  const articles = filenames.map((filename) => {
    const filePath = path.join(articlesDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      intro: data.intro,
    };
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      {articles.map(({ slug, title, intro }) => (
        <article key={slug} className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href={`/articles/${slug}`} className="text-dark-gold hover:underline">{title}</Link>
          </h2>
          <p className="text-lg mb-4">{intro}</p>
          <Link href={`/articles/${slug}`} className="text-darker-gold hover:underline">Read More</Link>
          <hr className="my-8 border-gray-300" />
        </article>
      ))}
    </div>
  );
};

export default ArticlesPage;
