import { REPLApp } from './lib/replapp';
import { data } from './data';
import './index.css';

// use module C without knowledge about async nature of A and B
const replapp = new REPLApp(data);

document.body.append(replapp.node);
