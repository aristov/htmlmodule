import DOMTransform from 'DOMTransform';
import fromXML from 'DON/lib/fromXML';

import documentskip from '../tools/templates/documentskip';
import whitespacefilter from '../tools/templates/whitespacefilter';

import { components, templates } from '../bundles/all';

components.forEach(Component => Component.attachTo(document.body));

templates.push(documentskip);
templates.push(whitespacefilter);

fetch('showcase.xml')
    .then(response => response.text())
    .then(xml => {
        const result = DOMTransform.transform(fromXML(xml), templates);
        document.body.appendChild(result);
    });
