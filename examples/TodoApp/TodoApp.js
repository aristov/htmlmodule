// import components
import Instance from '../../components/Instance';
import Button from '../../components/Button';
import TextBox from '../../components/TextBox';
import CheckBox from '../../components/CheckBox';
import Dialog from '../../components/Dialog';

// import template engine
import DOMTransform from '../../tools/DOMTransform';
import { toDOM } from '../../tools/DON';

// import templates
import button from '../../templates/button.js';
import textbox from '../../templates/textbox.js';
import checkbox from '../../templates/checkbox.js';
import dialog from '../../templates/dialog.js';

import { ENTER, ESCAPE, SPACE } from '../../tools/keyCodes';

// import styles
require('./index.css');

// create application components
class TodoApp extends Instance {
    constructor(element) {
        super(element);
        element.dataset.instance = this.constructor.name;
        element.appendChild(toDOM(domTransform.apply(this.load())));
        element.querySelector('form').addEventListener('submit', this.onSubmit.bind(this));
        this.list = element.querySelector('ul');
        this.attach(Button, TextBox, CheckBox, EditBox);
        this.findAll(TodoItem);
    }
    attach(...components) {
        components.forEach(Component => Component.attachTo(this.element));
    }
    onSubmit(event) {
        const textbox = this.find(TextBox);
        const text = textbox.value.trim();
        if(text) {
            const element = toDOM(domTransform.apply({ element : 'todoitem', text }));
            TodoItem.getInstance(this.list.appendChild(element));
            textbox.value = '';
            this.save();
        } else textbox.focus();
        event.preventDefault();
    }
    save() {
        localStorage.setItem('TodoApp', JSON.stringify({
            element : 'todoapp',
            items : this.findAll(TodoItem).map(({ text, done }) => ({ element : 'todoitem', text, done }))
        }));
    }
    load() {
        const storage = localStorage.getItem('TodoApp');
        return storage? JSON.parse(storage) : { element : 'todoapp', items : [] };
    }
}

class TodoItem extends Instance {
    constructor(element) {
        super(element);
        this.app = this.closest(TodoApp);
        this.checkbox = this.find(CheckBox).on('change', () => this.app.save());
        this.find(EditBox).on('change', () => this.app.save());
        this.find(Button).on('click', this.onButtonClick, this);
        this.dialog = Dialog.getInstance(document.getElementById('removeitemconfirm'));
        this.onDialogSubmit = this.onDialogSubmit.bind(this);
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || 'false';
    }
    set expanded(expanded) {
        if(expanded !== this.expanded) {
            this.element.setAttribute('aria-expanded', expanded);
            if(expanded === 'true') {
                this.dialog.element.addEventListener('submit', this.onDialogSubmit);
                this.dialog.hidden = 'false';
            } else {
                this.dialog.element.removeEventListener('submit', this.onDialogSubmit);
                this.dialog.hidden = 'true';
            }
        }
    }
    get text() {
        return this.element.querySelector('.editbox').textContent;
    }
    get done() {
        return this.checkbox.checked;
    }
    onDialogSubmit(event) {
        this.expanded = 'false';
        this.remove();
        event.preventDefault();
    }
    onButtonClick() {
        if(this.done === 'true') this.remove();
        else {
            this.dialog.trigger = this;
            this.expanded = 'true';
        }
    }
    remove() {
        this.element.remove();
        this.app.save();
    }
    focus() {
        this.checkbox.focus();
    }
}

class EditBox extends Instance {
    constructor(element) {
        super(element);
        const input = this.input = document.createElement('input');
        input.value = element.textContent;
        input.addEventListener('blur', () => this.editmode = 'false');
        this.on('keydown', this.onKeyDown);
        this.on('click', () => this.editmode = 'true');
    }
    get editmode() {
        return this.element.dataset.editmode || 'false';
    }
    set editmode(editmode) {
        if(editmode !== this.editmode) {
            const element = this.element;
            const input = this.input;
            element.dataset.editmode = editmode;
            if(editmode === 'true') {
                const textNode = element.firstChild;
                textNode?
                    element.replaceChild(input, textNode) :
                    element.appendChild(input);
                input.focus();
            } else {
                element.textContent = input.value;
                element.focus();
                this.emit('change');
            }
        }
    }
    onKeyDown({ keyCode }) {
        if(keyCode === ENTER) this.editmode = String(this.editmode === 'false');
        if(keyCode === ESCAPE) this.editmode = 'false';
        if(keyCode === SPACE) this.editmode = 'true';
    }
    static attachTo(node) {
        node.addEventListener('focus', ({ target }) => this.getInstance(target), true);
    }
}

// create template engine instance
const domTransform = new DOMTransform;

// connect lib templates
[button, textbox, checkbox, dialog].forEach(template => template(domTransform));

// layout
domTransform.element('todoapp', function({ items }) {
    return this.apply({
        element : 'main',
        content : [
            { element : 'h2', content : 'TODO list' },
            {
                element : 'form',
                content : [
                    {
                        element : 'textbox',
                        attributes : { placeholder : 'What are you going to do?' }
                    },
                    {
                        element : 'button',
                        attributes : { type : 'submit' },
                        content : 'Remember'
                    }
                ]
            },
            { element : 'ul', content : items },
            {
                element : 'confirmdialog',
                attributes : {
                    text : 'Item is not marked as "done". Are you sure?',
                    id : 'removeitemconfirm',
                    submitlabel : 'Remove item'
                }
            }
        ]
    });
});

domTransform.element('confirmdialog', function({ attributes : a, content }) {
    return this.apply({
        element : 'dialog',
        attributes : { modal : 'true', id : a.id },
        content : content || {
            element : 'form',
            content : [
                { element : 'p', content : a.text },
                {
                    element : 'button',
                    attributes : { type: 'submit', mix : 'accent' },
                    content : a.submitlabel || 'Ok'
                },
                {
                    element : 'button',
                    attributes : { type: 'close' },
                    content : a.dismisslabel || 'Cancel'
                }
            ]
        }
    });
});

domTransform.element('todoitem', function({ text, done }) {
    return {
        element : 'li',
        attributes : { 'data-instance' : 'TodoItem', 'aria-haspopup' : 'true', draggable : 'true' },
        content : this.apply([
            {
                element : 'checkbox',
                attributes : { checked : done, title : 'Mark as "done"' }
            },
            {
                element : 'editbox',
                attributes : { value : text }
            },
            {
                element : 'button',
                attributes : { view : 'removebutton', type : 'remove', title : 'Remove' },
                content : '×'
            }
        ])
    };
});

domTransform.element('editbox', function({ attributes : a }) {
    return {
        element : 'span',
        attributes : {
            'data-instance' : 'EditBox',
            'class' : 'editbox',
            tabindex : '0',
            title : a.title || 'Click to edit'
        },
        content : a.value
    };
});

// init app
new TodoApp(document.body);
