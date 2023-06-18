# htmlmodule

[![NPM Version](https://img.shields.io/npm/v/htmlmodule.svg)](https://www.npmjs.com/package/htmlmodule)
[![Node.js CI](https://github.com/aristov/htmlmodule/actions/workflows/node.js.yml/badge.svg)](https://github.com/aristov/htmlmodule/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/aristov/htmlmodule/badge.svg?branch=master)](https://coveralls.io/github/aristov/htmlmodule?branch=master)
[![NPM](https://img.shields.io/npm/l/htmlmodule)](https://raw.githubusercontent.com/aristov/htmlmodule/master/LICENSE)

HtmlModule is a library for creating user interfaces.
It implements the "virtual DOM" approach and provides a convenient object-oriented API with a JavaScript-compatible syntax.

Unlike modern React, which has switched to a functional programming style and hooks,
HtmlModule relies on the power of object-oriented programming and uses its advantages.

The library provides a set of components, each of which represents one of the HTML elements.
These components can be extended by the developer to implement the necessary functionality.

One of the key features is the syntax for describing the component tree.
It uses the "new" operator with the name of the component class.
It looks natural and more convenient than JSX.
No code transpiling is required.

In addition to presenting HTML elements, the library provides a set of components representing
WAI-ARIA roles and attributes that help the developer create an accessible user interface.

## Main Features

- The power of OOP
- Fast and effective DOM patching algorithm
- No JSX, but convenient JS-compatible syntax
- API to build your own high-level components
- WAI-ARIA role-based components to improve accessibility
- Automatic generation of the className based on inheritance
- Small footprint, 17KB after gzip

## Documentation

- [Getting started](https://github.com/aristov/htmlmodule/wiki/Getting-started)

## Examples

Example of a simple authorization form:

```js
import { HtmlForm, HtmlInput, HtmlButton } from 'htmlmodule'

class LoginForm extends HtmlForm
{
  static class = 'LoginForm'

  static defaultProps = { method : 'post' }

  state = {
    login : '',
    password : '',
  }

  render() {
    return [
      new HtmlInput({
        name : 'login',
        placeholder : 'Login',
        value : this.state.login,
        oninput : e => this.setState({ login : e.target.value }),
      }),
      new HtmlInput({
        type : 'password',
        name : 'password',
        placeholder : 'Password',
        value : this.state.password,
        oninput : e => this.setState({ password : e.target.value }),
      }),
      new HtmlButton('Login'),
    ]
  }
}

LoginForm.render({ action : '/login' }, document.body)
```

This code creates and processes a form with the appropriate DOM structure:

```html
<form class="LoginForm" method="post" action="/login">
  <input name="login" placeholder="Login">
  <input type="password" name="password" placeholder="Password">
  <button>Login</button>
</form>
```

More complex examples:

- [TodoMVC application](https://aristov.github.io/htmlmodule-todomvc) ([source](https://github.com/aristov/htmlmodule-todomvc))
- [Tic-Tac-Toe game](https://aristov.github.io/htmlmodule-tictactoe) ([source](https://github.com/aristov/htmlmodule-tictactoe))

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/htmlmodule/master/LICENSE)
