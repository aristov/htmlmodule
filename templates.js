import DOMTransform from './tools/DOMTransform';

import link from './templates/link';
import button from './templates/button';
import radiogroup from './templates/radiogroup';
import textbox from './templates/textbox';
import menu from './templates/menu';

let domTransform = new DOMTransform();

link(domTransform);
button(domTransform);
radiogroup(domTransform);
textbox(domTransform);
menu(domTransform);

export default domTransform;
