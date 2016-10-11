# htmlmodule

<!--
todo 
    dist + dist global 
    browser support (shim)
-->

<em>work in progress</em>

[HTML](//html.spec.whatwg.org)
module provides web application semantics and functionality by simple JavaScript API

## Try now

<a href="//aristov.github.io/htmlmodule/repl" title="read-eval-print-loop">
    REPL
    application
</a>

## Usage

### Environment

 - browser
 - node + webpack <sup>optional</sup>

### Install

```
npm install htmlmodule
```

### Create application

#### import elements

```js
import { form, label, input, button } from 'htmlmodule'
```

#### build DOM tree

```js
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
    })
```

<details>
<summary>respective html markup</summary>
```html
<form action=//yandex.com/search target=_blank>
    <label>
        Search 
        <input type=search name=text>
    </label>
    <button>Find</button>
</form>
```
</details>

#### append to document body

```js
document.body.append(websearch)
```

now it works

<details>
<summary>full module src</summary>

```js
import { form, label, input, button } from 'htmlmodule'

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
    })
    
document.body.append(websearch)
```
</details>

### API

[documentation](//aristov.github.io/htmlmodule/documentation)

## Development

### Environment

 - browser
 - node + webpack

### Install

```
git clone git@github.com:aristov/htmlmodule.git
cd htmlmodule
npm i
```

to run commands locally, use `./node_modules/.bin/` in your PATH

```
export PATH=./node_modules/.bin:$PATH
```

### Build

```
webpack
```

watch mode

```
WATCH=true webpack
```

dev server

```
static
```

open in browser [localhost:8080](//localhost:8080/)

### Testing

#### karma

mocha + chai + sinon + karma + sauce

```
npm test
```

#### browser

[localhost:8080/spec](//localhost:8080/spec)

#### links

check test suites in your browser

- [spec suite](//aristov.github.io/htmlmodule/spec)
- [test case](//aristov.github.io/htmlmodule/test)
- [dist test](//aristov.github.io/htmlmodule/dist)

## License

<details>
<summary><strong>The MIT License (MIT)</strong></summary>
Copyright (c) 2016 Viacheslav Aristov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</details>
