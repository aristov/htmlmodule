import '../../shim';
import '../../lib/index.spec';
import './siteheading';
import { sitenav } from './sitenav';

try {
    const node = document.getElementById('sitenav');
    if(node) node.replaceWith(sitenav());
} catch(e) {}
