// import components
import Instance from '../components/Instance';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import CheckBox from '../components/CheckBox';
import Dialog from '../components/Dialog';

// import template engine
import DOMTransform from '../tools/DOMTransform';
import DON from '../tools/DON';

// import templates
import button from '../templates/button.js';
import textbox from '../templates/textbox.js';
import checkbox from '../templates/checkbox.js';
import dialog from '../templates/dialog.js';

// create application components
class TodoApp extends Instance {
    constructor(element) {
        super(element);

        this.list = element.querySelector('ul');
        element.appendChild(DON.toDOM(domTransform.apply({ element : 'todoapp' })));
        element.querySelector('form').addEventListener('submit', this.onSubmit.bind(this));

        this.attach(Button, TextBox, CheckBox, TodoItem);
    }
    attach(...components) {
        components.forEach(Component => Component.attachTo(this.element));
    }
    onSubmit(event) {
        const textbox = this.find(TextBox);
        const text = textbox.value.trim();
        if(text) {
            this.list.appendChild(DON.toDOM(domTransform.apply({ element : 'todoitem', text })));
            textbox.value = '';
        } else textbox.element.focus();
        event.preventDefault();
    }
}
class TodoItem extends Instance {
    constructor(element) {
        super(element);
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
    onDialogSubmit(event) {
        this.expanded = 'false';
        this.remove();
        event.preventDefault();
    }
    onButtonClick() {
        if(this.find(CheckBox).checked === 'true') this.remove();
        else {
            this.dialog.trigger = this;
            this.expanded = 'true';
        }
    }
    remove() {
        this.element.closest('ul').removeChild(this.element);
    }
    focus() {
        this.find(Button).focus();
    }
    static attachTo(node) {
        node.addEventListener('click', event => {
            const target = event.target;
            const button = Button.getInstance(target);
            if(button && button.type === 'remove') {
                const item = this.getInstance(target.closest('[data-instance=TodoItem'));
                if(item) item.onButtonClick(event);
            }
        });
    }
}

// create template engine instance
const domTransform = new DOMTransform;

// connect lib templates
button(domTransform);
textbox(domTransform);
checkbox(domTransform);
dialog(domTransform);

// write application templates
domTransform.element('todoapp', function() {
    return this.apply({
        element : 'main',
        content : [
            { element : 'h2', content : 'TODO list' },
            { element : 'ul' },
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
            {
                element : 'confirmdialog',
                attributes : {
                    text : 'Item is not marked as "done". Are you sure?',
                    id : 'removeitemconfirm',
                    submitLabel : 'Remove item'
                }
            }
        ]
    });
});
domTransform.element('confirmdialog', function({ attributes, content }) {
    return this.apply({
        element : 'dialog',
        attributes : { modal : 'true', id : attributes.id },
        content : content || {
            element : 'form',
            content : [
                { element : 'p', content : attributes.text },
                {
                    element : 'button',
                    attributes : { type: 'submit', mix : 'accent' },
                    content : attributes.submitLabel || 'Ok'
                },
                {
                    element : 'button',
                    attributes : { type: 'close' },
                    content : attributes.dismissLabel || 'Cancel'
                }
            ]
        }
    });
});
domTransform.element('todoitem', function({ text }) {
    return this.apply({
        element : 'li',
        attributes : { 'data-instance' : 'TodoItem', 'aria-haspopup' : 'true' },
        content : [
            {
                element : 'checkbox',
                attributes : { title : 'Mark as "done"' }
            },
            {
                element : 'span',
                attributes : { 'class' : 'text' },
                content : text
            },
            {
                element : 'button',
                attributes : { view : 'removebutton', type : 'remove', title : 'Remove' },
                content : '×'
            }
        ]
    });
});

// init app
new TodoApp(document.body);
