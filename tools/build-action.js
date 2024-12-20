const fs = require('node:fs');
const path = require('node:path');
const glob = require('glob').sync;
const nnc = require('@vercel/ncc');

const x = glob('.github/actions/**/src/{main,post,pre}.js');
const workingDir = process.cwd();

x.forEach((src) => {
  const match = /(.*)\/src\/([^/]*\.js)$/.exec(src);

  if (match) {
    const [, dirName, fileName] = match;
    nnc(path.join(workingDir, src)).then(({code}) => {
      const outputDir = path.join(dirName, 'dist');
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(path.join(outputDir, fileName), code, { encoding: 'utf-8' });
    })
  }
})