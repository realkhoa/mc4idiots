import fs from 'fs';
import path from 'path';

export function getFileList(dir: string) {
  const fileNames = fs.readdirSync(dir);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
        path: path.join(dir, fileName)
      },
    };
  });
}