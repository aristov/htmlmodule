import { script } from './lib/htmlmodule';
import { REPLSite } from './lib/replsite';
import { data } from './data';
import './index.css';

const replsite = new REPLSite(data);

const src = 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js';
const config = { presets: ['es2015'] };
const descriptor = Object.getOwnPropertyDescriptor(REPLSite.prototype, 'value');

const onload = () => {
    const Babel = window.Babel;
    const babel = input => {
        const res = Babel.transform(input, config);
        return res.code.replace(/^'use\sstrict';\n\n/, '');
    }
    Object.defineProperty(replsite, 'value', {
        set(value) {
            descriptor.set.call(replsite, value);
        },
        get() {
            return babel(descriptor.get.call(replsite));
        }
    });
    replsite.start();
}

replsite.onready = () => {
    try {
        new Function('({test}) => test');
        replsite.start();
    }
    catch(error) {
        document.body.append(script({ onload, src }));
    }
}

document.body.append(replsite.node);
