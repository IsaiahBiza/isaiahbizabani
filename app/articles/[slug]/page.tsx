import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Params {
  params: {
    slug: string;
  };
}

const ArticlePage = async ({ params }: Params) => {
  const { slug } = params;
  const contentDirectory = path.join(process.cwd(), 'content');
  const articlePath = path.join(contentDirectory, `${slug}.md`);

  // Check if the file exists
  if (!fs.existsSync(articlePath)) {
    notFound();
    return;
  }

  const fileContents = fs.readFileSync(articlePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process markdown content into HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Get all articles to generate related links
  const files = fs.readdirSync(contentDirectory);
  const otherArticles = files
    .filter(file => file !== `${slug}.md`)
    .map(file => {
      const articleFilePath = path.join(contentDirectory, file);
      const articleContent = fs.readFileSync(articleFilePath, 'utf8');
      const { data } = matter(articleContent);
      return {
        title: data.title,
        slug: file.replace('.md', ''),
      };
    });

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-12">
      <article className="prose prose-lg lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>

      {/* Related Articles Section */}
      {otherArticles.length > 0 && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Other Articles You May Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map(article => (
              <div key={article.slug} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/articles/${article.slug}`} className="text-warm-gold hover:text-yellow-700">
                    {article.title}
                  </Link>
                </h3>
                <Link href={`/articles/${article.slug}`} className="text-warm-gold hover:text-yellow-700">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;

