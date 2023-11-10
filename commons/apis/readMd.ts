import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter'

export async function readMd(filePath: string) {
  const fullPath = path.join(filePath) + ".md";
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const content = processedContent.toString();

  return {
    content,
    ...matterResult.data,
  };
}