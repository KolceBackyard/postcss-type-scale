const test = require("tape");
const postcss = require('postcss');
const fs = require('fs');

const actual = (file) => {
  const css = fs.readFileSync(`test/fixtures/${file}.css`, 'utf8');

  return postcss([
    require('../dist/index')
  ]).process(css).css.replace(/\s+/g, '');
};

const expected = (file) => {
  return fs.readFileSync(`test/fixtures/${file}.expected.css`, 'utf8').replace(/\s+/g, '');
};

test('scale', (t) => {
  t.equal(
    actual('styles'),
    expected('styles'),
    'should be transformed to rems');

  t.end();
});
