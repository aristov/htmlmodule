import DOMTransform from 'DOMTransform';
import fromXML from 'DON/lib/fromXML';

import documentskip from '../utils/templates/documentskip';
import whitespacefilter from '../utils/templates/whitespacefilter';
import commentfilter from '../utils/templates/commentfilter';

import { components, templates } from '../bundles/all';

import xml from './showcase.xml';

templates.push(documentskip, whitespacefilter, commentfilter);

export default element => {
    components.forEach(Component => Component.attachTo(element));
    const showcase = DOMTransform.transform(fromXML(xml), templates);
    element.append(showcase);
}
