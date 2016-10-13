# htmlmodule

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

## Try now — <a href="//aristov.github.io/htmlmodule/repl" title="read-eval-print-loop">REPL machine</a>

## Usage

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

## API — [documentation](//aristov.github.io/htmlmodule/documentation)

## Compatibility

Built-in [shim bundle](/shim/shim.js) fixes browser compatibility.
For full browser support you must import shim bundle first:

```js
import 'htmlmodule/shim';

// rest of your code including `htmlmodule` imports
```

- shim bundle is used in [unit-testing](#user-content-testing) environments
- ["global script" distribution](#user-content-globalscript) includes shim bundle

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

Build dist assets:

```
webpack
```

Build minified dist assets:

```
MIN=true webpack
```

Build docs, specs, tests and replmachine:

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

Use dev mode (`DEV = DOCS + ES6 + WATCH`):

```
DEV=true webpack
```

Run dev server:

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
0. open [localhost:8080/docs/spec](//localhost:8080/docs/spec) in browser

#### Online test suite

Check test suite in your browser:

- [spec suite](//aristov.github.io/htmlmodule/spec)
- [test case](//aristov.github.io/htmlmodule/test)

## License

<details>
<summary><strong>The MIT License (MIT)</strong></summary>

Copyright (c) 2016 Vyacheslav Aristov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</details>
