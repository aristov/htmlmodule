# DOM module

<!--
todo links: dist, dist global, spec, repl, test, documentation
-->

[dom](http://dom.spec.whatwg.org)
&&
[html](http://html.spec.whatwg.org)
module

<em>work in progress</em>

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
                input({ type : 'search', name : 'text', })
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

### build

```
webpack
```

### dev mode

```
DEV_MODE=true webpack
```

### testing

mocha + chai + sinon + karma + sauce

```
npm test
```

## MIT License
