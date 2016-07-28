import DOMTransform from 'DOMTransform';
import fromXML from 'DON/lib/fromXML';

import documentskip from '../utils/templates/documentskip';
import whitespacefilter from '../utils/templates/whitespacefilter';

import { components, templates } from '../bundles/all';

const scope = document.body;

components.forEach(Component => Component.attachTo(scope));

templates.push(documentskip, whitespacefilter);

const xml = require('./showcase.xml');
const showcase = DOMTransform.transform(fromXML(xml), templates);

scope.append(showcase);
