import { Details, Summary } from './htmlmodule'
import { MarkupBox } from './markupbox'

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
        this.on('toggle', event => localStorage.setItem('makrupview.open', this.open))
        this.open = localStorage.getItem('makrupview.open') === 'true' || localStorage.getItem('markupview.open')
        super.init(init)
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
