import DON from './tools/DON';
import templates from './templates';

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

//import * as design from './design';
//[...design].forEach(Instance => Instance.attachToDocument());

Button.attachToDocument();
CheckBox.attachToDocument();
Menu.attachToDocument();
MenuButton.attachToDocument();
RadioGroup.attachToDocument();
ListBox.attachToDocument();
Select.attachToDocument();
TextBox.attachToDocument();
TimeBox.attachToDocument();
DialogButton.attachToDocument();
DateBox.attachToDocument();
TabList.attachToDocument();

fetch('showcase.xml')
    .then(response => response.text())
    .then(xml => {
        let ts = Date.now(),
            parser = new DOMParser,
            element = parser.parseFromString(xml, 'text/xml').documentElement,
            don = templates.apply(DON.fromDOM(element));
        console.log(Date.now() - ts);
        console.dir(don);
        document.body.appendChild(DON.toDOM(don));
    });
