import { button, iframe } from './htmlmodule';
import { siteheading } from './siteheading';
import { specwin } from './specwin';
import { sourcedetails, sourcefetch } from './sourcedetails';
import { apinav } from './apinav';
// import { repl } from './repl';
import { codebox, markupbox } from './codemirror';
import { sitenav } from './sitenav';

import './index.css';

const input = codebox({ value : codebox.toString() });
const output = markupbox({ value : document.body.outerHTML });

document.body.append(
    siteheading(),
    // specwin(),
    // apinav(),
    // sourcefetch(sourcedetails()),
    // repl(),
    // input.element,
    // hr(),
    // output.element,
    sitenav());

input.mirror.refresh();
output.mirror.refresh();
