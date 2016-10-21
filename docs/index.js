import { REPLSite } from './lib/replsite';
import './index.css';

const replsite = new REPLSite;

document.body.append(replsite.node);

replsite.start();
