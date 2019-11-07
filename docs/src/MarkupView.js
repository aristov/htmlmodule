import { Details, Summary } from './htmlmodule'
import { MarkupBox } from './MarkupBox'

export class MarkupToggle extends Summary {}

export class MarkupView extends Details {
    create(init) {
        super.create(init)
        this.children = [
            new MarkupToggle({
                id : 'markuptoggle',
                children : 'markup'
            }),
            this._markupBox = new MarkupBox
        ]
    }

    init(init) {
        super.init(init)
        this.open = localStorage.getItem('makrupview.open') === 'true' || localStorage.getItem('markupview.open')
        this.on('toggle', event => localStorage.setItem('makrupview.open', this.open))
    }

    refresh() {
        this._markupBox.refresh()
    }

    get height() {
        return this._markupBox.height
    }

    set value(value) {
        this._markupBox.value = value
    }

    get value() {
        return this._markupBox.value
    }
}
