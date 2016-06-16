// import components
import Instance from '../components/Instance';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import CheckBox from '../components/CheckBox';
import Dialog from '../components/Dialog';

// import template engine tools
import DOMTransform from '../tools/DOMTransform';
import DON from '../tools/DON';

// import templates
import button from '../templates/button.js';
import textbox from '../templates/textbox.js';
import checkbox from '../templates/checkbox.js';
import dialog from '../templates/dialog.js';

// create core application component
class TodoApp extends Instance {
    constructor(element) {
        super(element);
        this.build();

        this.list = element.querySelector('ul');
        this.form = element.querySelector('form');

        this.list.addEventListener('click', this.onListClick.bind(this));
        this.form.addEventListener('submit', this.onSubmit.bind(this));

        this.dialog.on('click', this.onDialogClick, this);
        this.dialog.on('submit', this.onDialogSubmit, this);

        this.currentItem = null;
    }
    get dialog() {
        return this._dialog || (this._dialog =
            Dialog.getInstance(this.element.querySelector('[data-instance=Dialog]')));
    }
    get textbox() {
        return this._textbox || (this._textbox =
            TextBox.getInstance(this.element.querySelector('[data-instance=TextBox]')));
    }
    build() {
        this.element.appendChild(DON.toDOM(domTransform.apply({ element : 'todoapp' })));
    }
    onSubmit(event) {
        event.preventDefault();
        let text = this.textbox.value.trim();
        if(text) {
            let item = { element : 'todoitem', text };
            this.list.appendChild(DON.toDOM(domTransform.apply(item)));
            this.textbox.value = '';
        } else this.textbox.element.focus();
    }
    onListClick({ target }) {
        let dataset = target.dataset;
        if(dataset.instance === 'Button' && dataset.type === 'remove') this.onItemRemove(target.closest('li'));
    }
    onDialogClick({ target }) {
        let dataset = target.dataset;
        if(dataset.instance === 'Button' && dataset.type === 'cancel') {
            this.dialog.hidden = 'true';
            if(this.currentItem) this.currentItem.querySelector('[data-instance=Button]').focus();
        }
    }
    onDialogSubmit(event) {
        event.preventDefault();
        if(this.currentItem) {
            this.list.removeChild(this.currentItem);
            this.currentItem = null;
        }
        this.dialog.hidden = 'true';
    }
    onItemRemove(item) {
        let checkBox = CheckBox.getInstance(item.querySelector('[data-instance=CheckBox]'));
        if(checkBox.checked === 'true') {
            this.list.removeChild(item);
        } else {
            this.currentItem = item;
            this.dialog.hidden = 'false';
        }
    }
}

class TodoItem extends Instance {
    constructor(element) {
        super(element);
    }
    static init() {
        document.addEventListener('click');
    }
}

// create template engine instance
const domTransform = new DOMTransform;

// connect instance.js templates
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
                        attributes : { placeholder : 'Type text here...' }
                    },
                    {
                        element : 'button',
                        attributes : { type : 'submit' },
                        content : 'Submit'
                    }
                ]
            },
            {
                instance : 'ConfirmDialog',
                element : 'confirmdialog',
                text : 'Item is not marked as "done". Are you sure?',
                submit : 'Remove item'
            }
        ]
    });
});
domTransform.element('confirmdialog', function({ text, submit, cancel }) {
    return this.apply({
        element : 'dialog',
        attributes : {
            modal : 'true',
            assertive : 'true'
        },
        content : {
            element : 'form',
            content : [
                { element : 'p', content : text },
                {
                    element : 'button',
                    attributes : { type: 'submit', mix : 'accent' },
                    content : submit || 'Ok'
                },
                {
                    element : 'button',
                    attributes : { type: 'cancel' },
                    content : cancel || 'Cancel'
                }
            ]
        }
    });
});
domTransform.element('todoitem', function({ text }) {
    return this.apply({
        element : 'li',
        attributes : { 'data-instance' : 'TodoItem' },
        content : [
            { element : 'checkbox' },
            {
                element : 'span',
                attributes : { 'class' : 'text' },
                content : text
            },
            {
                element : 'button',
                attributes : { view : 'removebutton', type : 'remove' },
                content : '×'
            }
        ]
    });
});

// init components
Button.init();
TextBox.attachToDocument();
CheckBox.attachToDocument();

// init app
new TodoApp(document.body);
