/** imports **/

import { REPLMachine } from './REPLMachine';

import { siteheading } from './siteheading';
import { specwin } from './specwin';
import { sourcedetails, sourcefetch } from './sourcedetails';
import { apinav } from './apinav';
import { sitenav } from './sitenav';

import './index.css';

/** variables **/

const replmachine = new REPLMachine;

/** variables **/

document.body.append(
    siteheading(),
    // specwin(),
    // apinav(),
    // sourcefetch(sourcedetails()),
    replmachine.input,
    replmachine.output,
    sitenav());
