import Button from './components/Button';
import CheckBox from './components/CheckBox';
import MenuButton from './components/MenuButton';
import Menu from './components/Menu';
import RadioGroup from './components/RadioGroup';
import ListBox from './components/ListBox';
import Select from './components/Select';
import TextBox from './components/TextBox';
import TimeBox from './components/TimeBox';
import DialogButton from './components/DialogButton';
import DateBox from './components/DateBox';
import TabList from './components/TabList';
import Tree from './components/Tree';
import Grid from './components/Grid';

import DON from './tools/DON';
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

const components = [
    Button,
    CheckBox,
    Menu,
    MenuButton,
    RadioGroup,
    ListBox,
    Select,
    TextBox,
    TimeBox,
    DialogButton,
    DateBox,
    TabList,
    Tree,
    Grid
];
const domTransform = new DOMTransform();
const templates = [
    link,
    button,
    checkbox,
    radiogroup,
    listbox,
    textbox,
    datebox,
    timebox,
    select,
    menu,
    menubutton,
    group,
    dialog,
    dialogbutton,
    tablist,
    spin,
    tree,
    grid
];

components.forEach(Component => Component.attachTo(document.body));
templates.forEach(template => template(domTransform));

fetch('index.xml')
    .then(response => response.text())
    .then(xml => {
        let parser = new DOMParser,
            element = parser.parseFromString(xml, 'text/xml').documentElement,
            don = domTransform.apply(DON.fromDOM(element));
        document.body.appendChild(DON.toDOM(don));
    });
