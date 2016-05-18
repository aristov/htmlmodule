function Option(element) {
    element.instance = this;
    this.element = element;

    this.listBox = ListBox.getInstance(element.closest('[role=listbox]'));

    this.on('click', this.onClick);
}

Object.defineProperty(Option.prototype, 'selected', {
    enumerable : true,
    get : function() {
        return this.element.getAttribute('aria-selected') || '';
    },
    set : function(value) {
        value = String(value);
        this.element.setAttribute('aria-selected', value);
    }
});

Object.defineProperty(Option.prototype, 'checked', {
    enumerable : true,
    get : function() {
        return this.element.getAttribute('aria-checked') || '';
    },
    set : function(value) {
        value = String(value);
        this.element.setAttribute('aria-checked', value);
        this.listBox.value = this.value;
    }
});

Object.defineProperty(Option.prototype, 'disabled', {
    enumerable : true,
    get : function() {
        return this.listBox.disabled || this.element.getAttribute('aria-disabled') || '';
    },
    set : function(value) {
        value = String(value);
        this.element.setAttribute('aria-disabled', value);
    }
});

Object.defineProperty(Option.prototype, 'value', {
    enumerable : true,
    get : function() {
        return this.element.dataset.value;
    }
});

Object.defineProperty(Option.prototype, 'text', {
    enumerable : true,
    get : function() {
        return this.element.textContent;
    }
});

Option.prototype.onClick = function(event) {
    if(this.disabled === 'true') event.stopImmediatePropagation();
    else this.listBox.checkedOptions = [this];
}

Option.prototype.onMouseEnter = function(event) {
    if(this.disabled !== 'true') {
        this.listBox.unselect();
        this.selected = 'true';
    }
}

Option.prototype.on = function(type, listener, context) {
    this.element.addEventListener(type, listener.bind(context || this));
}

Option.getInstance = function(element) {
    return typeof element.getAttribute === 'function' &&
        element.getAttribute('role') === 'option'?
            element.instance || new this(element) :
            null;
}

Option.attachToDocument = function() {
    document.addEventListener('mouseenter', function(event) {
        var option = this.getInstance(event.target);
        if(option) option.onMouseEnter(event);
    }.bind(this), true);
}
