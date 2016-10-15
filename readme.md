# htmlmodule

[![Build Status](https://travis-ci.org/aristov/htmlmodule.svg?branch=master)](https://travis-ci.org/aristov/htmlmodule)

<em>work in progress</em>

The htmlmodule provides web application semantics and functionality of native browser DOM API:

```js
const htmlspec = a({ 
    href : 'https://html.spec.whatwg.org', 
    children : 'HTML specification' 
});
```

The code above uses htmlmodule to create a hyperlink with a reference to specification.
A browser creates the same link, when it processes the following markup:

```js
<a href="https://html.spec.whatwg.org">HTML specification</a>
```

The htmlmodule does not generate a markup. It assembles the `HTMLAnchorElement` instance from scratch.

## Try now

 — <a href="//aristov.github.io/htmlmodule/repl.html" title="read-eval-print-loop">REPL machine!</a>

## Usage

Use a [module bundler](http://webpack.github.io/) and a [transpiler](http://babeljs.io) to transform and pack modules for in-browser usage.

### Install

```
npm install htmlmodule
```

### Create application

```js
// import element assemblers
import { form, label, input, button } from 'htmlmodule';

// create application
const websearch = 
    form({
        action : '//yandex.com/search',
        target : '_blank',
        children : [
            label([
                'Search ',
                input({ type : 'search', name : 'text' })
            ]),
            button('Find')
        ]
    });
    
// insert to document
document.body.append(websearch);
```

The `websearch` variable is a DOM structure with the respective HTML markup:

```html
<form action=//yandex.com/search target=_blank>
    <label>
        Search 
        <input type=search name=text>
    </label>
    <button>Find</button>
</form>
```

<h2 id="globalscript">Global script distribution</h2>

Get the module by appending the script source to page body:

```html
<script src=https://rawgit.com/aristov/htmlmodule/master/dist/dist.window.htmlmodule.min.js></script>
<script>
const { a, span, div, article, input, fieldset } = window.htmlmodule;
// make magic...
</script> 
```

The script exposes the `htmlmodule` global variable to the `window` object.

## Compatibility

The built-in [shim bundle](/shim/index.js) fixes browser compatibility. It includes:

- [Babel polyfill](http://babeljs.io/docs/usage/polyfill/)
- [dom4 polyfill](https://www.npmjs.com/package/dom4)
- [some author DOM shims](/shim)

The shim bundle is used in [unit-testing](#user-content-testing) environments.

### Shim bundle setup

For a wide browser support you must import the shim bundle first.
There are some ways to do this.

#### Use the shim bundle distribution script

```html
<!-- minified shim bundle -->
<script src=https://rawgit.com/aristov/htmlmodule/master/dist/dist.shim.min.js></script>

<!-- project code with htmlmodule imports -->
<script src=./project.build.js></script>
```

#### Include the shim bundle to a project bundle

```js
import 'htmlmodule/shim';

// rest of your code including `htmlmodule` imports
```

#### Use a shim-charged distribution 

[The "global script" distribution](#user-content-globalscript) includes the shim bundle out of the box.

## [API documentation](//aristov.github.io/htmlmodule/api)

## Development

### Environment

- browser
- node + webpack

### Install

```
git clone git@github.com:aristov/htmlmodule.git
cd htmlmodule
npm install
```

### Build

To run commands locally, use `./node_modules/.bin/` in your `PATH`:

```
export PATH=./node_modules/.bin:$PATH
```

Build distribution assets:

```
webpack
```

Build minified distribution assets:

```
MIN=true webpack
```

Build docs, specs, tests and repl-machine:

```
DOCS=true webpack
```

Disable babel transpiling:

```
ES6=true webpack
```

Use watch mode:

```
WATCH=true webpack
```

Run dev server (`DOCS + ES6 + WATCH`):

```
npm start
```

Run static server:

```
static
```

Open in browser [localhost:8080/docs](http://localhost:8080/docs)

<h3 id="testing">Testing</h3>

#### Test using node

```
npm test
```

#### Test in browser

Run dev/static server and open [localhost:8080/docs/spec.html](http://localhost:8080/docs/spec.html) in browser.

#### Online test suite

Check test suite in your browser:

- [spec suite](//aristov.github.io/htmlmodule/spec.html)
- [test case](//aristov.github.io/htmlmodule/test.html)

## [MIT license](https://raw.githubusercontent.com/aristov/htmlmodule/master/LICENSE)
