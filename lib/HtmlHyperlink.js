import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#htmlhyperlinkelementutils
 * @abstract
 */
export class HtmlHyperlink extends HtmlElem
{
  /**
   * @param {string} href
   */
  set href(href) {
    this.node.href = href
  }

  /**
   * @returns {string}
   */
  get href() {
    return this.node.href
  }

  /**
   * @returns {string}
   */
  get origin() {
    return this.node.origin
  }

  /**
   * @param {string} protocol
   */
  set protocol(protocol) {
    this.node.protocol = protocol
  }

  /**
   * @returns {string}
   */
  get protocol() {
    return this.node.protocol
  }

  /**
   * @param {string} username
   */
  set username(username) {
    this.node.username = username
  }

  /**
   * @returns {string}
   */
  get username() {
    return this.node.username
  }

  /**
   * @param {string} password
   */
  set password(password) {
    this.node.password = password
  }

  /**
   * @returns {string}
   */
  get password() {
    return this.node.password
  }

  /**
   * @param {string} host
   */
  set host(host) {
    this.node.host = host
  }

  /**
   * @returns {string}
   */
  get host() {
    return this.node.host
  }

  /**
   * @param {string} hostname
   */
  set hostname(hostname) {
    this.node.hostname = hostname
  }

  /**
   * @returns {string}
   */
  get hostname() {
    return this.node.hostname
  }

  /**
   * @param {string} port
   */
  set port(port) {
    this.node.port = port
  }

  /**
   * @returns {string}
   */
  get port() {
    return this.node.port
  }

  /**
   * @param {string} pathname
   */
  set pathname(pathname) {
    this.node.pathname = pathname
  }

  /**
   * @returns {string}
   */
  get pathname() {
    return this.node.pathname
  }

  /**
   * @param {string} search
   */
  set search(search) {
    this.node.search = search
  }

  /**
   * @returns {string}
   */
  get search() {
    return this.node.search
  }

  /**
   * @param {string} hash
   */
  set hash(hash) {
    this.node.hash = hash
  }

  /**
   * @returns {string}
   */
  get hash() {
    return this.node.hash
  }

  /**
   * @returns {constructor} HtmlHyperlink
   */
  static get superAssembler() {
    return HtmlHyperlink
  }
}
