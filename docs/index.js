import { REPLSite } from './lib/replsite';
import { data } from './data';
import './index.css';

const replsite = new REPLSite(data);

document.body.append(replsite.node);
