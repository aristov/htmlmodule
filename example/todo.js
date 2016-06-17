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

// create core application component
class TodoApp extends Instance {
    constructor(element) {
        super(element);
        this.build();

        this.list = element.querySelector('ul');
        this.form = element.querySelector('form');
        this.dialog = Dialog.getInstance(this.element.querySelector('[data-instance=Dialog]'));

        this.list.addEventListener('click', this.onListClick.bind(this));
        this.form.addEventListener('submit', this.onSubmit.bind(this));
        this.dialog.on('submit', this.onDialogSubmit, this);

        this.currentItem = null;
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
        if(dataset.instance === 'Button' && dataset.type === 'remove') {
            this.onItemRemove(target.closest('li'));
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
            this.dialog.trigger = Button.getInstance(item.querySelector('[data-instance=Button]'));
            this.dialog.hidden = 'false';

            /*ConfirmDialog
                .show({ text : 'A u sure?' })
                .then(() => this.list.removeChild(item));*/
        }
    }
}

/*class ConfirmDialog extends Dialog {
    get hidden() {
        return super.hidden;
    }
    set hidden(hidden) {
        super.hidden = hidden;
        this.promise = new Promise((resolve, reject) => {

        });
    }
    onClick(event) {
        super.onClick(event);
        let dataset = event.target.dataset;
        if(dataset.instance === 'Button' && dataset.type === 'cancel') {
            this.promise
        }
    }
    static show({ text }) {
        let element = DON.toDOM(domTransform.apply({ element : 'confirmdialog', text })),
            dialog = this.getInstance(element);
        dialog.on('click', event => event.target.dataset.type === 'cancel' && )
    }
}

class TodoItem extends Instance {
    constructor(element) {
        super(element);
    }
    static init() {
        document.addEventListener('click');
    }
}*/

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
        attributes : { modal : 'true' },
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
                    attributes : { type: 'close' },
                    content : cancel || 'Cancel'
                }
            ]
        }
    });
});
domTransform.element('todoitem', function({ text }) {
    return this.apply({
        element : 'li',
        //attributes : { 'data-instance' : 'TodoItem' },
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

// init components
Button.init();
TextBox.attachToDocument();
CheckBox.attachToDocument();

// init app
new TodoApp(document.body);
