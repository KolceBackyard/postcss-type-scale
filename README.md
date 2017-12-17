[![npm version](https://badge.fury.io/js/postcss-type-scale.svg)](https://badge.fury.io/js/postcss-type-scale)

PostCSS plugin that makes available a typographic scale in font-size declarations.

Built for [Concise CSS](http://concisecss.com).

**Write this:**

```css
:root { --type-ratio: 2; }

h6, small { font-size: 1; }
h5 { font-size: 2; }
h4 { font-size: 3; }
h3 { font-size: 4; }
h2 { font-size: 5; }
h1 { font-size: 6; }
.ultraBig { font-size: 20; }
```

**And get this:**

```css
:root { --type-ratio: 2; }

h6, small { font-size: 0.5rem; }
h5 { font-size: 1rem; }
h4 { font-size: 2rem; }
h3 { font-size: 4rem; }
h2 { font-size: 8rem; }
h1 { font-size: 16rem; }
.ultraBig { font-size: 262144rem; }
```

## Installation

`$ npm install postcss-type-scale`

## Usage

```JS
postcss([ require('postcss-type-scale') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

## Options

### `rootSelector`

- Type: `string`
- Default: `:root`

The selector where the type scale is defined. You can use `html` or `body`. It will use `:root` by default.

### `typeRatio`

- Type: `number`
- Default: `1.2`

The default ratio to be used. Used **only** when a ratio definition in the root element is not found.

### `ratioProperty`

- Type: `string`
- Default: `--type-ratio`

Name of the custom property that contains the ratio.

## License

MIT - James Kolce
