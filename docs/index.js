import { REPLApp } from './lib/replapp';
import { data } from './data';
import './index.css';

const replapp = new REPLApp(data);

document.body.append(replapp.node);
