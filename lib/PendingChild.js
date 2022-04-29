import { HtmlDiv } from './HtmlDiv'

export class PendingChild extends HtmlDiv
{
  /**
   * @param {{}} init
   * @param {Promise} [init.promise]
   * @returns {string}
   */
  init(init) {
    super.init(init)
    this.promise = init.promise || Promise.resolve()
    this.error = null
    if(init.promise) {
      this.classList.add('pending')
      init.promise
      .then(res => this.onResolve(res))
      .catch(err => this.onReject(err))
    }
  }

  /**
   * @param {*} res
   */
  onResolve(res) {
    if(!this.node) {
      return
    }
    this.classList.remove('pending')
    this.emit('load')
    this.replaceWith(res)
    this.destroy()
  }

  /**
   * @param {Error|string|*} err
   */
  onReject(err) {
    console.error(this.error = typeof err === 'string'? Error(err) : err)
    if(!this.node) {
      return
    }
    this.classList.replace('pending', 'error')
    this.emit('error')
    this.children = err
  }

  /**
   * @param {boolean} [keepNode = false]
   */
  destroy(keepNode = false) {
    this.onResolve = this.onReject = () => {
    }
    super.destroy(keepNode)
  }
}
