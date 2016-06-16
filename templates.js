import DOMTransform from './tools/DOMTransform';

import link from './templates/link';
import button from './templates/button';
import checkbox from './templates/checkbox';
import radiogroup from './templates/radiogroup';
import listbox from './templates/listbox';
import textbox from './templates/textbox';
import datebox from './templates/datebox';
import timebox from './templates/timebox';
import select from './templates/select';
import menu from './templates/menu';
import menubutton from './templates/menubutton';
import group from './templates/group';
import dialog from './templates/dialog';
import dialogbutton from './templates/dialogbutton';
import tablist from './templates/tablist';
import spin from './templates/spin';
import tree from './templates/tree';
import grid from './templates/grid';

let domTransform = new DOMTransform();

link(domTransform);
button(domTransform);
checkbox(domTransform);
radiogroup(domTransform);
listbox(domTransform);
textbox(domTransform);
datebox(domTransform);
timebox(domTransform);
select(domTransform);
menu(domTransform);
menubutton(domTransform);
group(domTransform);
dialog(domTransform);
dialogbutton(domTransform);
tablist(domTransform);
spin(domTransform);
tree(domTransform);
grid(domTransform);

export default domTransform;
