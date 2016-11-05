const md5File = require('md5-file')
const replace = require('replace-in-file');
const fs = require('fs');

const bundlePath = './assets/bundle.js';
const templatePath = './views/index.html';
const hash = md5File.sync(bundlePath);
fs.renameSync(bundlePath, bundlePath.replace('.js', `.${hash}.js`));

replace.sync({
  files: templatePath, 
  replace: /\"\/bundle\..*\.js\"/,
  with: `"/bundle.${hash}.js"`,
  allowEmptyPaths: false
});