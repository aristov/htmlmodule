import DON from '../tools/DON';
import DOMTransform from '../tools/DOMTransform';

import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import MenuButton from '../components/MenuButton';
import Menu from '../components/Menu';
import RadioGroup from '../components/RadioGroup';
import ListBox from '../components/ListBox';
import Select from '../components/Select';
import TextBox from '../components/TextBox';
import PasswordBox from '../components/PasswordBox';
import NumberBox from '../components/NumberBox';
import SearchBox from '../components/SearchBox';
import TimeBox from '../components/TimeBox';
import DialogButton from '../components/DialogButton';
import DateBox from '../components/DateBox';
import DatePicker from '../components/DatePicker';
import TabList from '../components/TabList';
import Tree from '../components/Tree';
import Grid from '../components/Grid';

import link from '../templates/link';
import button from '../templates/button';
import checkbox from '../templates/checkbox';
import radiogroup from '../templates/radiogroup';
import listbox from '../templates/listbox';
import textbox from '../templates/textbox';
import textarea from '../templates/textarea';
import passwordbox from '../templates/passwordbox';
import numberbox from '../templates/numberbox';
import searchbox from '../templates/searchbox';
import searchgroup from '../templates/searchgroup';
import datepicker from '../templates/datepicker';
import datebox from '../templates/datebox';
import timebox from '../templates/timebox';
import select from '../templates/select';
import menu from '../templates/menu';
import menubutton from '../templates/menubutton';
import group from '../templates/group';
import dialog from '../templates/dialog';
import dialogbutton from '../templates/dialogbutton';
import tablist from '../templates/tablist';
import spin from '../templates/spin';
import tree from '../templates/tree';
import grid from '../templates/grid';

import header from './layout/header';

const components = [
    Button,
    CheckBox,
    Menu,
    MenuButton,
    RadioGroup,
    ListBox,
    Select,
    TextBox,
    PasswordBox,
    NumberBox,
    SearchBox,
    TimeBox,
    DialogButton,
    DatePicker,
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
    textarea,
    passwordbox,
    numberbox,
    searchbox,
    searchgroup,
    datepicker,
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
    grid,

    header
];

components.forEach(Component => Component.attachTo(document));
templates.forEach(template => template(domTransform));

fetch('sprav.xml')
    .then(response => response.text())
    .then(xml => {
        const parser = new DOMParser;
        const element = parser.parseFromString(xml, 'text/xml').documentElement;
        const don = domTransform.apply(DON.fromDOM(element));
        document.documentElement.replaceChild(DON.toDOM(don), document.body);
    });
