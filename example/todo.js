import DOMTransform from '../tools/DOMTransform';
import DON from '../tools/DON';

import button from '../templates/button.js';
import textbox from '../templates/textbox.js';
import checkbox from '../templates/checkbox.js';

import Instance from '../components/Instance';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import CheckBox from '../components/CheckBox';

const domTransform = new DOMTransform;

button(domTransform);
textbox(domTransform);
checkbox(domTransform);

domTransform.element('todoapp', function() {
    return this.apply({
        element : 'main',
        content : [
            { element : 'h2', content : 'TODO' },
            { element : 'ul' },
            {
                element : 'form',
                content : [
                    {
                        element : 'textbox',
                        attributes : { placeholder : 'Type text here...' }
                    },
                    ' ',
                    {
                        element : 'button',
                        attributes : { action : 'submit' },
                        content : 'Submit'
                    }
                ]
            }
        ]
    });
});
domTransform.element('todoitem', function({ content }) {
    return this.apply({
        element : 'li',
        content : [
            { element : 'checkbox' },
            {
                element : 'span',
                attributes : { 'class' : 'text' },
                content : content
            },
            {
                element : 'button',
                attributes : { view : 'removebutton', action : 'remove' },
                content : '×'
            }
        ]
    });
});

class TodoApp extends Instance {
    constructor(element) {
        super(element);
        this.build();
        this.textBox = TextBox.getInstance(element.querySelector('[data-instance=TextBox]'));
        this.list = element.querySelector('ul');
        this.form = element.querySelector('form');
        this.form.addEventListener('submit', this.onSubmit.bind(this));
        this.on('click', this.onClick);
    }
    build() {
        this.element.appendChild(DON.toDOM(domTransform.apply({ element : 'todoapp' })));
    }
    onSubmit(event) {
        event.preventDefault();
        let value = this.textBox.value.trim();
        if(value) {
            let item = { element : 'todoitem', content : value };
            this.list.appendChild(DON.toDOM(domTransform.apply(item)));
            this.textBox.value = '';
        }
    }
    onClick({ target }) {
        let dataset = target.dataset;
        if(dataset.instance === 'Button') {
            switch(dataset.action) {
                case 'submit':
                    this.form.dispatchEvent(new Event('submit', { cancelable : true }));
                    break;
                case 'remove':
                    this.removeItem(target.closest('li'));
                    break;
            }
        }
    }
    removeItem(item) {
        let checkBox = CheckBox.getInstance(item.querySelector('[data-instance=CheckBox]'));
        if(checkBox.checked === 'true' || window.confirm('Item is not marked as "done". Are you sure?')) {
            this.list.removeChild(item);
        }
    }
}

Button.attachToDocument();
TextBox.attachToDocument();
CheckBox.attachToDocument();

new TodoApp(document.body);
