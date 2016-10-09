# DOM module

[dom](http://dom.spec.whatwg.org)
&&
[html](http://html.spec.whatwg.org)
module

<em>work in propgress</em>

## Usage

install
```
npm install dommodule
```

import elements
```js
import { form, label, input, button } from 'dommodule/html'
```

create application
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

now `websearch` DOM structure is respective to this markup
```html
<form action=//yandex.com/search target=_blank>
    <label>
        Search 
        <input type=search name=text>
    </label>
    <button>Find</button>
</form>
```

append to document body
```js
const body = document.body
body.innerHTML === '' // true

body.append(websearch)
body.innerHTML === websearch.outerHTML // true
```

## Development

### environment

 - browser
 - node + webpack

### install

```
git clone git://github.com:aristov/dommodule.git
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
