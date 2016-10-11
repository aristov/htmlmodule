# DOM module

<!--
todo links: dist, dist global, spec, repl, test, documentation, browser support (shim)
-->

<em>work in progress</em>

[DOM](//dom.spec.whatwg.org)
&&
[HTML](//html.spec.whatwg.org)
module provides HTML DOM semantics functionality

## Links

 - [repl](//aristov.github.io/dommodule/repl/repl.html)
 - [test case](//aristov.github.io/dommodule/test/test.html)
 - [spec suite](//aristov.github.io/dommodule/spec/spec.html)
 - [API documentation](//aristov.github.io/dommodule/documentation)

## Usage

### environment

 - browser
 - node + webpack <sup>optional</sup>

### install

```
npm install dommodule
```

### create application

#### import elements

```js
import { form, label, input, button } from 'dommodule/html'
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
<!--now `websearch` DOM structure is respective to this markup-->
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

## Development

### environment

 - browser
 - node + webpack

### install

```
git clone git@github.com:aristov/dommodule.git
cd dommodule
npm i
```

to run commands locally, use `./node_modules/.bin/` in your PATH

```
export PATH=./node_modules/.bin:$PATH
```

### build

```
webpack
```

dev mode

```
DEV_MODE=true webpack
```

run dev server

```
static
```

open in browser [localhost:8080](//localhost:8080/)

### testing

mocha + chai + sinon + karma + sauce
```
npm test
```

## MIT License
