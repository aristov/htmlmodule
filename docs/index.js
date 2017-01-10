import { REPLApp } from './lib/replapp'
import './index.css'

const replapp = new REPLApp()

document.body.append(replapp.node)
