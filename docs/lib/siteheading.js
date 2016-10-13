import { h1, style } from '../../lib';

export const siteheading = children => h1({ id : 'siteheading', children });

const styleNode = style('#siteheading { font-family: monospace }');
document.head.append(styleNode);
