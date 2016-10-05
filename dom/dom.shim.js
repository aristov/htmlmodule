const { Element, HTMLElement } = window;
const { defineProperty, getOwnPropertyDescriptor } = Object;

if(!('id' in Element.prototype)) {
    const descriptor = getOwnPropertyDescriptor(HTMLElement, 'id');
    defineProperty(Element, 'id', descriptor);
    console.log('id defined on Element');
}

if(!('className' in Element.prototype)) {
    const descriptor = getOwnPropertyDescriptor(HTMLElement, 'className');
    defineProperty(Element, 'className', descriptor);
    console.log('className defined on Element');
}
