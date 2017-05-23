const spawn = require('cross-spawn');
const path = require('path');

const s = `\\${path.sep}`;
const pattern = process.argv[2] === 'e2e'
  ? `test${s}e2e${s}.+\\.spec\\.js`
  : `test${s}(?!e2e${s})[^${s}]+${s}.+\\.spec\\.js$`;

const argv = process.argv
  .slice(2)
  .filter(arg => arg !== 'e2e')
  .concat(pattern);

spawn.sync(path.normalize('./node_modules/.bin/jest'), argv, { stdio: 'inherit' });
