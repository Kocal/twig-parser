# Twig Parser

[![npm (scoped)](https://img.shields.io/npm/v/@kocal/twig-parser.svg)](https://www.npmjs.com/package/@kocal/twig-parser)
[![Build Status](https://travis-ci.com/Kocal/twig-parser.svg?branch=master)](https://travis-ci.com/Kocal/twig-parser)
[![Build status](https://ci.appveyor.com/api/projects/status/shao5hhh8oqyorbn/branch/master?svg=true)](https://ci.appveyor.com/project/Kocal/twig-parser/branch/master)

> A parser for Twig files, in JavaScript.

## WORK IN PROGRESS

This project is still in early development. 

Installation and usage steps may not work for the moment. 

Be patient or contribute! :)

## Goals

This package was initially created to be used by the [Prettier plugin for Twig files](https://github.com/Kocal/prettier-plugin-twig). The plugin used the [Twing engine](https://github.com/ericmorand/twing) at early state, but it quickly showed some issues with the final AST (see [this](https://github.com/Kocal/prettier-plugin-twig/issues/15) and [this](https://github.com/Kocal/prettier-plugin-twig/issues/4)).

**This parser will:**
  - Simple parse your code into tokens and an AST
  - Keep traces of whitespace control modifier
  
**This parser will not:**
  - Alter text nodes values ([ref](https://github.com/ericmorand/twing/issues/321#issuecomment-476987422))
  - Render something, it's not an engine. If you need to render Twig files, use [Twing](https://github.com/ericmorand/twing) instead
  
## Installation

With yarn:

```bash
$ yarn add -D @kocal/twig-parser
```

With npm:

```bash
$ npm install --save-dev @kocal/twig-parser
```

## Usage

### With Node.js

```js
const { tokenize, parse } = require('@kocal/twig-parser');

const code = '{{ "Put your Twig code here "}}';
const tokens = tokenize(code);
const ast = parse(tokens);

console.log(ast);
```

### In the Browser

```html
<script src="https://unpkg.com/@kocal/twig-parser/dist/browser.min.js"></script>
<script>
const code = '{{ "Put your Twig code here "}}';
const tokens = TwigParser.tokenize(code);
const ast = TwigParser.parse(tokens);
  
console.log(ast);
</script>
```

## Contribution

- Fork the project
- Create a new branch
- Try to write tests before adding a feature or fixing a bug
- Open a pull request :tada:


## License

MIT.
