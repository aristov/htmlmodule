import { NodeAssembler } from 'dommodule/lib/NodeAssembler'

Object.defineProperty(EventTarget.prototype, '__instance__', {
    get() {
        return NodeAssembler.getAssemblerOf(this).getInstanceOf(this)
    }
})
