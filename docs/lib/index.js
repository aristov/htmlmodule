import { siteheading } from './siteheading';
import { specwin } from './specwin';
import { sourcedetails, sourcefetch } from './sourcedetails';
import { apinav } from './apinav';
import { repl, replstart } from './repl';
import { sitenav } from './sitenav';

import './index.css';

document.body.append(
    // siteheading(),
    // specwin(),
    // apinav(),
    // sourcefetch(sourcedetails()),
    repl(),
    // input.element,
    // hr(),
    // output.element,
    // sitenav()
);

replstart();
