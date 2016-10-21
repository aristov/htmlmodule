import { REPL } from './lib/repl';
import './index.css';

const repl = new REPL;

document.body.append(repl.node);

repl.start();
