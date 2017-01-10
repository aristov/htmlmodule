# htmlmodule

[![NPM Version](https://img.shields.io/npm/v/htmlmodule.svg?maxAge=2592000)](https://www.npmjs.com/package/htmlmodule)
[![Build Status](https://travis-ci.org/aristov/htmlmodule.svg?branch=master)](https://travis-ci.org/aristov/htmlmodule)
[![Coverage Status](https://coveralls.io/repos/github/aristov/htmlmodule/badge.svg?branch=master)](https://coveralls.io/github/aristov/htmlmodule?branch=master)
[![dependencies Status](https://david-dm.org/aristov/htmlmodule/status.svg)](https://david-dm.org/aristov/htmlmodule)
[![devDependencies Status](https://david-dm.org/aristov/htmlmodule/dev-status.svg)](https://david-dm.org/aristov/htmlmodule?type=dev)
[![Document Coverage](https://aristov.github.io/htmlmodule/dist/api/badge.svg)](https://aristov.github.io/htmlmodule/dist/api/)

_work in progress_

The htmlmodule provides a web application semantics and functionality of a native browser DOM API.

```js
const node = a({ 
    href : 'https://html.spec.whatwg.org', 
    children : 'HTML standard' 
})
```

The code above uses htmlmodule to create a hyperlink with a reference to the living standard.
A browser creates the same link, when it processes the following markup:

```html
<a href=https://html.spec.whatwg.org>HTML standard</a>
```

The htmlmodule does not generate a markup. It assembles the `HTMLAnchorElement` instance from scratch.

## Try now

— <a href="https://aristov.github.io/htmlmodule" title="read-eval-print-loop">REPL machine!</a>

## Usage

Use [a module bundler](http://webpack.github.io/) and [a transpiler](http://babeljs.io) to transform and pack modules for in-browser usage.

### Installation

```
npm install htmlmodule
```

### Create application

```js
// import element assemblers
import { form, label, input, button } from 'htmlmodule'

// create application
const websearch = 
   form({
        action : '//www.google.ru/search',
        target : '_blank',
        children : [
            label([
                'Search ',
                input({ type : 'search', name : 'q' })
            ]),
            button('Find')
        ]
    })
    
// insert to document
document.body.append(websearch)
```

Just created `websearch` variable is a DOM structure with the respective HTML markup:

```html
<form action=//www.google.ru/search target=_blank>
    <label>
        Search 
        <input type=search name=q>
    </label>
    <button>Find</button>
</form>
```

[Open in REPL](//aristov.github.io/htmlmodule#websearch)

## Global script distribution

Get the module by appending the distribution script to a page body:

```html
<script src=https://rawgit.com/aristov/htmlmodule/gh-pages/dist/dist.window.htmlmodule.min.js></script>
<script>
{ body, header, main, footer, article, p, a, button, input, img, video, canvas, ... } = htmlmodule 
// make magic...
</script> 
```

This is the simpliest way to start use the htmlmodule in your project.

## Accessibility

Applications, assembled by htmlmodule are accessible by design.
This depends generally on a proper and accurate usage of the markup language semantics.
Read [the spec](https://html.spec.whatwg.org),
[the API reference](https://aristov.github.io/htmlmodule/docs/api/identifiers.html)
and look the examples, provided on
[the module homepage](https://aristov.github.io/htmlmodule).

## Compatibility

- The htmlmodule core doesn't require anything except DOM.
- You can use the module in combination with any other framework, library and build system.

### Browser support

Module works fine without any shims, but some new HTML5 elements and features are implemented in modern browsers only.
The built-in [shim bundle](/shim/index.js) partially fixes browser compatibility. It includes:

- [Babel polyfill](http://babeljs.io/docs/usage/polyfill)
- [dom4 polyfill](https://www.npmjs.com/package/dom4)
- [whatwg-fetch polyfill](https://www.npmjs.com/package/whatwg-fetch)
- [author DOM shims](/shim)

The shim bundle is used in [the unit-testing environments](#testing).

### Shim bundle setup

For a wide browser support you must import the shim bundle first.
There are some ways to do this.

#### Shim distribution script (recommended)

```html
<!-- minified shim bundle -->
<script src=https://rawgit.com/aristov/htmlmodule/gh-pages/dist/dist.shim.min.js></script>

<!-- project code including htmlmodule imports -->
<script src=build/build.project.js></script>
```

#### Single bundle for all

Install the third-party polyfill libraries first:

```
npm install babel-polyfill --save
npm install dom4 --save
npm install whatwg-fetch --save
```

Import the shim bundle into your project:

```js
import 'htmlmodule/shim'

// the rest of your code including htmlmodule imports
```

#### Custom way

- You may add your own and any other shims or build your custom bundle if needed.
- You may decline to use the shim bundle at all, if there's no need to support an old browser versions.

## Documentation

The project documentation contains:

- [Home page](https://aristov.github.io/htmlmodule)
- [API documentation](https://aristov.github.io/htmlmodule/dist/api)
- [Spec suite](https://aristov.github.io/htmlmodule/dist/docs/spec.html)
- [Coverage report](https://aristov.github.io/htmlmodule/dist/coverage/chrome/lcov-report/)

[The API reference](https://aristov.github.io/htmlmodule/dist/api/identifiers.html) contains short extractions and relevant quotations from the following resources:

- [HTML](https://html.spec.whatwg.org) and [DOM](https://dom.spec.whatwg.org) living standards
- W3C [HTML](https://www.w3.org/TR/html) and [DOM](https://www.w3.org/TR/dom) specifications
- MDN [API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model#HTML_element_interfaces) and [element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) references
- MSDN [API](https://msdn.microsoft.com/en-us/library/hh869680.aspx) and [element](https://msdn.microsoft.com/en-us/library/hh772721.aspx) references

The module API includes almost all actual elements from the HTML living standard.
Be watchful when use a modern HTML5 features, due to it's partial browser support.
For convenience, these features are marked as `@version HTML5` in JSDoc.

## Development

### Environment

- Browser
- [Node.js](https://nodejs.org)

### Installation

```
git clone git@github.com:aristov/htmlmodule.git
cd htmlmodule
npm install
```

### Build

Lint, build and test the whole project:

```
npm test
```

This command runs project tests on the [Sauce Labs](https://saucelabs.com/).

[![Build Status](https://saucelabs.com/browser-matrix/aristov7.svg)](https://saucelabs.com/beta/builds/039fae1f5652404ab2afb069cf148492)

#### Local testing

```
npm run test-local
```

Local testing requires [the local browser set](https://github.com/aristov/htmlmodule/blob/master/karma.conf.js#L8) to be installed on your system.

### Dev tools

Run dev-server: 

```
npm start
```

Run static HTTP-server:

```
npm run static
```

Point your browser to [localhost:8080](http://localhost:8080).

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/htmlmodule/master/LICENSE)
