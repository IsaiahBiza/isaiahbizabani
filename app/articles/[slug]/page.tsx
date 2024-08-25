import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import { GetServerSideProps } from 'next';

interface Params {
  params: {
    slug: string;
  };
}

// Make the component function async
const ArticlePage = async ({ params }: Params) => {
  const { slug } = params;
  const articlePath = path.join(process.cwd(), 'content', `${slug}.md`);

  // Check for the file's existence
  if (!fs.existsSync(articlePath)) {
    notFound(); // Redirect to 404 page if the file doesn't exist
    return;
  }

  const fileContents = fs.readFileSync(articlePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process markdown content into HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="prose prose-lg mx-auto p-6">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default ArticlePage;
