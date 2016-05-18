function ListBox(element) {
    element.instance = this;
    this.element = element;

    this.input = element.querySelector('input') || document.createElement('input');

    this.on('keydown', this.onKeyDown);
    this.on('keyup', this.onKeyUp);
}

Object.defineProperty(ListBox.prototype, 'options', {
    enumerable : true,
    get : function() {
        return Array.prototype.map.call(
            this.element.querySelectorAll('[role=option]'),
            function(element) {
                return Option.getInstance(element);
            });
    }
});

Object.defineProperty(ListBox.prototype, 'hidden', {
    enumerable : true,
    get : function() {
        return String(this.element.hidden);
    },
    set : function(value) {
        this.element.hidden = String(value) === 'true';
    }
});

Object.defineProperty(ListBox.prototype, 'selectedOptions', {
    enumerable : true,
    get : function() {
        return this.options.filter(function(option) {
            return option.selected === 'true';
        });
    }
});

Object.defineProperty(ListBox.prototype, 'checkedOptions', {
    enumerable : true,
    get : function() {
        return this.options.filter(function(option) {
            return option.checked === 'true';
        });
    },
    set : function(options) {
        var value = this.value;
        this.uncheck();
        options.forEach(function(option) {
            option.checked = 'true';
        });
        this.value === value || this.element.dispatchEvent(new Event('change'));
    }
});

Object.defineProperty(ListBox.prototype, 'value', {
    enumerable : true,
    get : function() {
        return this.input.value;
    },
    set : function(value) {
        this.input.value = value;
    }
});

Object.defineProperty(ListBox.prototype, 'disabled', {
    enumerable : true,
    get : function() {
        return this.element.getAttribute('aria-disabled') || '';
    },
    set : function(value) {
        var element = this.element;

        if(String(value) === 'true') {
            element.setAttribute('aria-disabled', 'true');
            element.removeAttribute('tabindex');
            this.input.disabled = true;
        } else {
            element.removeAttribute('aria-disabled');
            element.setAttribute('tabindex', '0');
            this.input.disabled = false;
        }
    }
});

ListBox.prototype.unselect = function() {
    this.selectedOptions.forEach(function(option) {
        option.selected = 'false';
    });
}

ListBox.prototype.uncheck = function() {
    this.checkedOptions.forEach(function(option) {
        option.checked = 'false';
    });
}

ListBox.prototype.onKeyDown = function(event) {
    var keyCode = event.keyCode;

    if(keyCode >= 37 && keyCode <= 40) {
        event.preventDefault(); // prevent page scrolling
        this.onArrowKeyDown(event);
    }

    if(keyCode === 32) {
        event.preventDefault(); // prevent page scrolling
        this.onSpaceKeyDown(event);
    }
}

ListBox.prototype.onArrowKeyDown = function(event) {
    var direction = event.keyCode < 39? -1 : 1,
        options = this.options,
        selectedOptions = this.selectedOptions[0],
        next = options.indexOf(selectedOptions) + direction;

    if(next === options.length) next = 0;
    if(next < 0) next = options.length - 1;

    this.unselect();
    options[next].selected = true;
}

ListBox.prototype.onSpaceKeyDown = function(event) {
    if(!event.repeat) {
        this.selectedOptions.forEach(function(option) {
            option.element.classList.add('active');
        });
    }
}

ListBox.prototype.onKeyUp = function(event) {
    if(event.keyCode === 32) this.onSpaceKeyUp(event);
}

ListBox.prototype.onSpaceKeyUp = function(event) {
    this.checkedOptions = this.selectedOptions;
    this.selectedOptions.forEach(function(option) {
        option.element.classList.remove('active');
    });
}

ListBox.prototype.onFocus = function(event) {
    if(!this.selectedOptions.length) this.options[0].selected = 'true';
}

ListBox.prototype.on = function(type, listener, context) {
    this.element.addEventListener(type, listener.bind(context || this));
}

ListBox.getInstance = function(element) {
    return typeof element.getAttribute === 'function' &&
        element.getAttribute('role') === 'listbox'?
            element.instance || new this(element) :
            null;
}

ListBox.attachToDocument = function() {
    document.addEventListener('focus', function(event) {
        var listBox = this.getInstance(event.target);
        if(listBox) listBox.onFocus(event);
    }.bind(this), true);

    Option.attachToDocument();
}
