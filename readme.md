# DOM module

<em>work in propgress</em>

[html](http://html.spec.whatwg.org)
[dom](http://dom.spec.whatwg.org)
module

## Usage

```
npm install dommodule
```

```js
import { a } from 'dommodule/html';

document.body.append(
    a({ href : 'ya.ru', children : 'yaru' })
)
```

result is DOM equiv of

```html
<a href="ya.ru">yaru</a>
```

## Development

### build

```
webpack
```

### dev mode

```
DEV_MODE=true webpack
```

 - Node.js
 - NPM
 - Browser
 - Modern HTML DOM implementations

### testing

```
npm test
```

## MIT License
