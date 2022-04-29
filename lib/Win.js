import window from 'window'
import { DomTarget } from './DomTarget'
import { DomDoc } from './DomDoc'

const JSON_MIME_TYPE = 'application/json'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-window-object
 */
export class Win extends DomTarget
{
  /**
   * @param {{}} init
   * @param {Window} [init.node]
   */
  create(init) {
    if(!init.node) {
      init.node = window
    }
    super.create(init)
  }

  /**
   * @param {boolean} [keepDom=false]
   */
  destroy(keepDom = false) {
    this.doc.destroy(keepDom)
    super.destroy()
  }

  /**
   * @returns {DomDoc}
   */
  get doc() {
    return this.constructor.DomDoc.get(this.node.document)
  }

  /**
   * @param {string} url
   * @param {RequestInit} init
   * @returns {Promise<any>}
   */
  static async fetchJson(url, init) {
    const res = await window.fetch(url, init)
    if(!res.ok) {
      throw Error(res.statusText)
    }
    return res.json()
  }

  /**
   * @param {string} url
   * @returns {Promise<any>}
   */
  static async getJson(url) {
    return this.fetchJson(url, {
      headers : { 'Accept' : JSON_MIME_TYPE },
    })
  }

  /**
   * @param {string} url
   * @param {any} data
   * @returns {Promise<any>}
   */
  static async postJson(url, data) {
    const init = {
      method : 'POST',
      headers : {
        'Accept' : JSON_MIME_TYPE,
        'Content-Type' : JSON_MIME_TYPE,
      },
    }
    if(typeof data !== 'undefined') {
      init.body = JSON.stringify(data)
    }
    return this.fetchJson(url, init)
  }
}

Win.prototype.fetchJson = Win.fetchJson
Win.prototype.getJson = Win.getJson
Win.prototype.postJson = Win.postJson

DomTarget.Win = Win
