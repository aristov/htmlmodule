function ComboBox(element) {
    element.instance = this;
    this.element = element;

    this.listBox = ListBox.getInstance(element.querySelector('[role=listbox]'));
    this.input = element.querySelector('input');

    this.on('click', this.onClick);
    this.on('keydown', this.onKeyDown);
    this.on('keyup', this.onKeyUp);

    this.listBox.on('change', this.onListBoxChange, this);

    document.addEventListener('click', this.onDocumentClick.bind(this));
    document.addEventListener('focus', this.onDocumentFocus.bind(this), true);
}

Object.defineProperty(ComboBox.prototype, 'expanded', {
    enumerable : true,
    get : function() {
        return this.element.getAttribute('aria-expanded') || 'false';
    },
    set : function(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
        if(expanded === 'true') {
            var listBox = this.listBox,
                selectedOption = listBox.selectedOptions[0];
            if(!selectedOption) listBox.options[0].selected = 'true';
        }
    }
});

Object.defineProperty(ComboBox.prototype, 'value', {
    enumerable : true,
    get : function() {
        return this.input.value;
    },
    set : function(value) {
        this.input.value = value;
    }
});

ComboBox.prototype.onDocumentFocus = function(event) {
    if(this.expanded === 'true' && event.target !== this.element) {
        this.expanded = 'false';
    }
}

ComboBox.prototype.onDocumentClick = function(event) {
    if(this.expanded === 'true' && !this.element.contains(event.target)) {
        this.expanded = 'false';
    }
}

ComboBox.prototype.onKeyDown = function(event) {
    var keyCode = event.keyCode;

    if(keyCode === 32 && !event.repeat) {
        event.preventDefault();
        this.onSpaceKeyDown(event);
    }

    if(keyCode >= 37 && keyCode <= 40) {
        event.preventDefault();
        if(this.expanded === 'false') this.expanded = 'true';
        else this.listBox.onArrowKeyDown(event);
    }

    if(keyCode === 27) {
        this.expanded = 'false';
    }
}

ComboBox.prototype.onSpaceKeyDown = function(event) {
    if(this.expanded === 'true') {
        this.listBox.onSpaceKeyDown(event);
    } else {
        this.element.classList.add('active');
    }
}

ComboBox.prototype.onKeyUp = function(event) {
    if(event.keyCode === 32) {
        var element = this.element;

        if(this.expanded === 'true') {
            this.listBox.onSpaceKeyUp(event);
            this.expanded = 'false';
        } else {
            element.classList.remove('active');
            element.dispatchEvent(new Event('click'));
        }
    }
}

ComboBox.prototype.onListBoxChange = function(event) {
    var listBox = this.listBox;
    this.input.value = listBox.checkedOptions[0].text;
    this.value = listBox.value;
}

ComboBox.prototype.onClick = function(event) {
    this.expanded = String(this.expanded === 'false');
    this.element.focus();
}

ComboBox.prototype.on = function(type, listener, context) {
    this.element.addEventListener(type, listener.bind(context || this));
}

ComboBox.getInstance = function(element) {
    return typeof element.getAttribute === 'function' &&
        element.getAttribute('role') === 'combobox'?
            element.instance || new this(element) :
            null;
}

ComboBox.attachToDocument = function() {
    document.addEventListener('focus', function(event) {
        this.getInstance(event.target);
    }.bind(this), true);
}
