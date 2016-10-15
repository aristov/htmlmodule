import { siteheading } from './siteheading';
import { sourcedetails, sourcefetch } from './sourcedetails';
import { indexapi } from './indexapi';
import { sitenav } from './sitenav';

import './index.css';

document.body.append(
    siteheading(),
    sourcefetch(sourcedetails()),
    indexapi(),
    sitenav());
