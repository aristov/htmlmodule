import { HTMLElementAssembler } from './element'

export class HTMLHyperlinkAssembler extends HTMLElementAssembler {
    /**
     * @param {String} href
     */
    set href(href) {
        this.node.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.node.href
    }

    /**
     * @returns {String}
     */
    get origin() {
        return this.node.origin
    }

    /**
     * @param {String} protocol
     */
    set protocol(protocol) {
        this.node.protocol = protocol
    }

    /**
     * @returns {String}
     */
    get protocol() {
        return this.node.protocol
    }

    /**
     * @param {String} username
     */
    set username(username) {
        this.node.username = username
    }

    /**
     * @returns {String} 
     */
    get username() {
        return this.node.username
    }

    /**
     * @param {String} password
     */
    set password(password) {
        this.node.password = password
    }

    /**
     * @returns {String}
     */
    get password() {
        return this.node.password
    }

    /**
     * @param {String} host
     */
    set host(host) {
        this.node.host = host
    }

    /**
     * @returns {String} 
     */
    get host() {
        return this.node.host
    }

    /**
     * @param {String} hostname
     */
    set hostname(hostname) {
        this.node.hostname = hostname
    }

    /**
     * @returns {String}
     */
    get hostname() {
        return this.node.hostname
    }

    /**
     * @param {String} port
     */
    set port(port) {
        this.node.port = port
    }

    /**
     * @returns {String}
     */
    get port() {
        return this.node.port
    }

    /**
     * @param {String} pathname
     */
    set pathname(pathname) {
        this.node.pathname = pathname
    }

    /**
     * @returns {String}
     */
    get pathname() {
        return this.node.pathname
    }

    /**
     * @param {String} search
     */
    set search(search) {
        this.node.search = search
    }

    /**
     * @returns {String}
     */
    get search() {
        return this.node.search
    }

    /**
     * @param {String} hash
     */
    set hash(hash) {
        this.node.hash = hash
    }

    /**
     * @returns {String}
     */
    get hash() {
        return this.node.hash
    }

    /**
     * @returns {Function} HTMLHyperlinkAssembler
     */
    static get superAssembler() {
        return HTMLHyperlinkAssembler
    }
}
