# htmlmodule

[![Build Status](https://travis-ci.org/aristov/htmlmodule.svg?branch=master)](https://travis-ci.org/aristov/htmlmodule)

<em>work in progress</em>

HTML module provides web application semantics and functionality of native HTML DOM API:

```js
const htmlspec = a({ 
    href : 'https://html.spec.whatwg.org', 
    children : 'HTML specification' 
});
```

Code above uses htmlmodule to create DOM hyperlink element with reference to specification.
Browser creates the same link, when it processes the following markup:

```js
<a href="https://html.spec.whatwg.org">HTML specification</a>
```

HTML module does not generate markup. It assembles `HTMLAnchorElement` instance from scratch.

## Try now

 — <a href="//aristov.github.io/htmlmodule/repl" title="read-eval-print-loop">REPL machine!</a>

## Usage

Use module bundler to transpile and pack modules for in-browser usage.

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

`websearch` is DOM structure with respective HTML markup:

```html
<form action=//yandex.com/search target=_blank>
    <label>
        Search 
        <input type=search name=text>
    </label>
    <button>Find</button>
</form>
```

<h2 id="globalscript">Global script</h2>

Get module by appending script source to page body:

<!--fixme: use cdn-->
```html
<script src=https://aristov.github.io/htmlmodule/dist/dist.window.htmlmodule.min.js></script>
<script>
const { a, span, div, article, input, fieldset } = window.htmlmodule;
// make magic...
</script> 
```

Script exposes `htmlmodule` global variable to the `window` object.

## [API documentation](//aristov.github.io/htmlmodule/api)

## Compatibility

Built-in [shim bundle](/shim) fixes browser compatibility.
For a wide browser support you must import the shim bundle first:

```js
import 'htmlmodule/shim';

// rest of your code including `htmlmodule` imports
```

- shim bundle is used in [unit-testing](#user-content-testing) environments
- ["global script" distribution](#user-content-globalscript) includes shim bundle out of the box

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

Open in browser [localhost:8080/docs](//localhost:8080/docs)

<h3 id="testing">Testing</h3>

#### Test using node

```
npm test
```

#### Test in browser

0. build sources 
0. run dev server
0. open [localhost:8080/docs/spec](//localhost:8080/docs/spec.html) in browser


#### Online test suite

Check test suite in your browser:

- [spec suite](//aristov.github.io/htmlmodule/spec.html)
- [test case](//aristov.github.io/htmlmodule/test.html)

## [MIT license](LICENSE)
