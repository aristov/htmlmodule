import { IFrame } from './htmlmodule'

const srcdoc = '<!DOCTYPE html><html><head><script src="../dist/dist.shim.js"></script><script src="../dist/window.htmlmodule.js"></script></head><body></body></html>'

export class OutputWin extends IFrame {
    init(init) {
        super.init(init)
        this.srcdoc = srcdoc
    }
}
