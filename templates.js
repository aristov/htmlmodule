import DOMTransform from './tools/DOMTransform';

import link from './templates/link';
import button from './templates/button';
import checkbox from './templates/checkbox';
import radiogroup from './templates/radiogroup';
import listbox from './templates/listbox';
import textbox from './templates/textbox';
import menu from './templates/menu';
import group from './templates/group';

let domTransform = new DOMTransform();

link(domTransform);
button(domTransform);
checkbox(domTransform);
radiogroup(domTransform);
listbox(domTransform);
textbox(domTransform);
menu(domTransform);
group(domTransform);

export default domTransform;
