import { siteheading } from './siteheading';
import { sourcedetails, sourcefetch } from './sourcedetails';
import { indexapi } from './apinav';
import { sitenav } from './sitenav';

import './index.css';

document.body.append(
    siteheading(),
    indexapi(),
    sourcefetch(sourcedetails()),
    sitenav());
