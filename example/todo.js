import DOMTransform from '../tools/DOMTransform';
import DON from '../tools/DON';

import button from '../templates/button.js';
import textbox from '../templates/textbox.js';
import checkbox from '../templates/checkbox.js';
import dialog from '../templates/dialog.js';

import Instance from '../components/Instance';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import CheckBox from '../components/CheckBox';
import Dialog from '../components/Dialog';

const domTransform = new DOMTransform;

button(domTransform);
textbox(domTransform);
checkbox(domTransform);
dialog(domTransform);

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
            },
            { element : 'confirmdialog' }
        ]
    });
});
domTransform.element('confirmdialog', function() {
    return this.apply({
        element : 'dialog',
        attributes : {
            modal : 'true',
            assertive : 'true'
        },
        content : [
            { element : 'p', content : 'Item is not marked as "done". Are you sure?' },
            {
                element : 'button',
                attributes : { action: 'confirm', mix : 'accent' },
                content : 'Remove'
            },
            ' ',
            {
                element : 'button',
                attributes : { action: 'cancel' },
                content : 'Cancel'
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

        this.list = element.querySelector('ul');
        this.form = element.querySelector('form');

        this.textBox = TextBox.getInstance(element.querySelector('[data-instance=TextBox]'));
        this.dialog = Dialog.getInstance(element.querySelector('[data-instance=Dialog]'));

        this.form.addEventListener('submit', this.onSubmit.bind(this));
        this.on('click', this.onClick);

        this.currentItem = null;
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
                case 'cancel':
                    this.dialog.hidden = 'true';
                    if(this.currentItem) this.currentItem.querySelector('[data-instance=Button]').focus();
                    break;
                case 'confirm':
                    if(this.currentItem) {
                        this.list.removeChild(this.currentItem);
                        this.currentItem = null;
                    }
                    this.dialog.hidden = 'true';
                    break;
            }
        }
    }
    removeItem(item) {
        let checkBox = CheckBox.getInstance(item.querySelector('[data-instance=CheckBox]'));
        if(checkBox.checked === 'true') {
            this.list.removeChild(item);
        } else {
            this.currentItem = item;
            this.dialog.hidden = 'false';
        }
    }
}

Button.attachToDocument();
TextBox.attachToDocument();
CheckBox.attachToDocument();

new TodoApp(document.body);
