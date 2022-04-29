import window from 'window'
import { Assembler } from './Assembler'

const create = Assembler.prototype.create

Assembler.prototype.create = function(init) {
  create.call(this, init)
  Object.defineProperty(this.node, '__instance', {
    configurable : true,
    value : this,
  })
}

Assembler.__storage = new Map

window.Assembler = Assembler
