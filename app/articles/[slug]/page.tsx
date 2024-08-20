import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the type for the props
interface ArticleProps {
  params: {
    slug: string;
  };
}

interface ArticleData {
  title: string;
  intro: string;
  authorBio: string;
}

export default async function ArticlePage({ params }: ArticleProps) {
  const slug = params.slug;
  const articlePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContents = fs.readFileSync(articlePath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{(data as ArticleData).title}</h1>
      <p className="text-lg mb-6">{(data as ArticleData).intro}</p>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      <div className="mt-12 pt-6 border-t border-gray-300">
        <h3 className="text-2xl font-semibold mb-4">About the Author</h3>
        <p className="text-lg">{(data as ArticleData).authorBio}</p>
      </div>
    </div>
  );
}

// Function to generate static paths
export async function generateStaticParams() {
  const articlesDirectory = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(articlesDirectory);

  const paths = filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));

  return paths;
}
