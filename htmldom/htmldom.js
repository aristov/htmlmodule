import { HTMLAssembler } from './../html/html.js';

const assembler = new HTMLAssembler;

/**
 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
 *  - If the `a` element has an `href` attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
 *  - If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.
 *
 * @param {String} init.href — Address of the hyperlink
 * @param {String} init.target — Browsing context for hyperlink navigation
 * @param {String} init.download — Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} init.ping — URLs to ping
 * @param {String} init.rel — Relationship between the location in the document containing the hyperlink and the destination resource
 * @param {String} init.hreflang — Language of the linked resource
 * @param {String} init.type — Hint for the type of the referenced resource
 * @param {String} init.referrerpolicy — Determines the referrer policy for fetches initiated by the element
 * @param init.global{} — global `NodeInit` attributes
 * @param {NodeInit} init `NodeInit` dictionary object
 * @interface HTMLAnchorElement
 */
export const a = init => assembler.createElement('a', init);

/**
 * [The `abbr` element](https://html.spec.whatwg.org/#the-abbr-element)
 * represents an abbreviation or acronym, optionally with its expansion.
 * The `title` attribute may be used to provide an expansion of the abbreviation.
 * The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
 *
 * @param {String} init.title — special semantics: full term or expansion of abbreviation
 * @param init.global{} — global `NodeInit` attributes
 * @param {NodeInit} init `NodeInit` dictionary object
 * @interface HTMLElement abbr
 */
export const abbr = init => assembler.createElement('abbr', init);

/**
 * [The `address` element](https://html.spec.whatwg.org/#the-address-element)
 * represents the contact information for its nearest `article` or `body` element ancestor.
 * If that is the `body` element, then the contact information applies to the document as a whole.
 *
 * @param init.global{} — global `NodeInit` attributes
 * @param {NodeInit} init `NodeInit` dictionary object
 * @interface HTMLElement address
 */
export const address = init => assembler.createElement('address', init);

/**
 * [The `area` element](https://html.spec.whatwg.org/#the-area-element)
 * represents either a hyperlink with some text and a corresponding area on an image map,
 * or a dead area on an image map.
 *
 * @param {String} init.alt — Replacement text for use when images are not available
 * @param {String} init.coords — Coordinates for the shape to be created in an image map
 * @param {String} init.shape — The kind of shape to be created in an image map
 * @param {String} init.href — Address of the hyperlink
 * @param {String} init.target — Browsing context for hyperlink navigation
 * @param {String} init.download — Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} init.ping — URLs to ping
 * @param {String} init.rel — Relationship between the location in the document containing the hyperlink and the destination resource
 * @param init.global{} — global `NodeInit` attributes
 * @param {NodeInit} init `NodeInit` dictionary object
 * @interface HTMLAreaElement
 */
export const area = init => assembler.createElement('area', init);

/**
 * [The `article` element](https://html.spec.whatwg.org/#the-article-element)
 * represents a complete, or self-contained, composition in a document, page, application,
 * or site and that is, in principle, independently distributable or reusable, e.g. in syndication.
 * This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment,
 * an interactive widget or gadget, or any other independent item of content.
 *
 * @param init.global{} — global `NodeInit` attributes
 * @param {NodeInit} init `NodeInit` dictionary object
 * @interface HTMLElement article
 */
export const article = init => assembler.createElement('article', init);

/**
 * [The `aside` element](https://html.spec.whatwg.org/#the-aside-element)
 * represents a section of a page that consists of content that is tangentially related to the content around the aside element,
 * and which could be considered separate from that content.
 * Such sections are often represented as sidebars in printed typography.
 *
 * @param init.global{} — global `NodeInit` attributes
 * @param {NodeInit} init `NodeInit` dictionary object
 * @interface HTMLElement aside
 */
export const aside = init => assembler.createElement('aside', init);

/**
 * [The `audio` element](https://html.spec.whatwg.org/#the-audio-element)
 * represents a sound or audio stream.
 * Content may be provided inside the `audio` element.
 * User agents should not show this content to the user;
 * it is intended for older Web browsers which do not support audio, so that legacy audio plugins can be tried,
 * or to show text to the users of these older browsers informing them of how to access the audio contents.
 *
 * @param {String} init.src — Address of the resource
 * @param {String} init.crossorigin — How the element handles crossorigin requests
 * @param {String} init.preload — Hints how much buffering the media resource will likely need
 * @param {Boolean} init.autoplay — Hint that the media resource can be started automatically when the page is loaded
 * @param {Boolean} init.loop — Whether to loop the media resource
 * @param {Boolean} init.muted — Whether to mute the media resource by default
 * @param {Boolean} init.controls — Show user agent controls
 * @param init.global{} — global `NodeInit` attributes
 * @param {NodeInit} init `NodeInit` dictionary object
 * @interface HTMLAudioElement
 */
export const audio = init => assembler.createElement('audio', init);

export const b = init => assembler.createElement('b', init);

export const base = init => assembler.createElement('base', init);

export const bdi = init => assembler.createElement('bdi', init);

export const bdo = init => assembler.createElement('bdo', init);

export const blockquote = init => assembler.createElement('blockquote', init);

export const body = init => assembler.createElement('body', init);

export const br = init => assembler.createElement('br', init);

export const button = init => assembler.createElement('button', init);

export const canvas = init => assembler.createElement('canvas', init);

export const caption = init => assembler.createElement('caption', init);

export const cite = init => assembler.createElement('cite', init);

export const code = init => assembler.createElement('code', init);

export const col = init => assembler.createElement('col', init);

export const colgroup = init => assembler.createElement('colgroup', init);

export const data = init => assembler.createElement('data', init);

export const datalist = init => assembler.createElement('datalist', init);

export const dd = init => assembler.createElement('dd', init);

export const del = init => assembler.createElement('del', init);

export const details = init => assembler.createElement('details', init);

export const dfn = init => assembler.createElement('dfn', init);

export const dialog = init => assembler.createElement('dialog', init);

export const div = init => assembler.createElement('div', init);

export const dl = init => assembler.createElement('dl', init);

export const dt = init => assembler.createElement('dt', init);

export const em = init => assembler.createElement('em', init);

export const embed = init => assembler.createElement('embed', init);

export const fieldset = init => assembler.createElement('fieldset', init);

export const figcaption = init => assembler.createElement('figcaption', init);

export const figure = init => assembler.createElement('figure', init);

export const footer = init => assembler.createElement('footer', init);

export const form = init => assembler.createElement('form', init);

export const h1 = init => assembler.createElement('h1', init);

export const h2 = init => assembler.createElement('h2', init);

export const h3 = init => assembler.createElement('h3', init);

export const h4 = init => assembler.createElement('h4', init);

export const h5 = init => assembler.createElement('h5', init);

export const h6 = init => assembler.createElement('h6', init);

export const head = init => assembler.createElement('head', init);

export const header = init => assembler.createElement('header', init);

export const hgroup = init => assembler.createElement('hgroup', init);

export const hr = init => assembler.createElement('hr', init);

export const html = init => assembler.createElement('html', init);

export const i = init => assembler.createElement('i', init);

export const iframe = init => assembler.createElement('iframe', init);

export const img = init => assembler.createElement('img', init);

export const input = init => assembler.createElement('input', init);

export const ins = init => assembler.createElement('ins', init);

export const kbd = init => assembler.createElement('kbd', init);

export const keygen = init => assembler.createElement('keygen', init);

export const label = init => assembler.createElement('label', init);

export const legend = init => assembler.createElement('legend', init);

export const li = init => assembler.createElement('li', init);

export const link = init => assembler.createElement('link', init);

export const main = init => assembler.createElement('main', init);

export const map = init => assembler.createElement('map', init);

export const mark = init => assembler.createElement('mark', init);

// todo MathAssembler
// export const math = init => instance.createElement('math', init);

export const menu = init => assembler.createElement('menu', init);

export const menuitem = init => assembler.createElement('menuitem', init);

export const meta = init => assembler.createElement('meta', init);

export const meter = init => assembler.createElement('meter', init);

export const nav = init => assembler.createElement('nav', init);

export const noscript = init => assembler.createElement('noscript', init);

export const object = init => assembler.createElement('object', init);

export const ol = init => assembler.createElement('ol', init);

export const optgroup = init => assembler.createElement('optgroup', init);

export const option = init => assembler.createElement('option', init);

export const output = init => assembler.createElement('output', init);

export const p = init => assembler.createElement('p', init);

export const param = init => assembler.createElement('param', init);

export const picture = init => assembler.createElement('picture', init);

export const pre = init => assembler.createElement('pre', init);

export const progress = init => assembler.createElement('progress', init);

export const q = init => assembler.createElement('q', init);

export const rp = init => assembler.createElement('rp', init);

export const rt = init => assembler.createElement('rt', init);

export const ruby = init => assembler.createElement('ruby', init);

export const s = init => assembler.createElement('s', init);

export const samp = init => assembler.createElement('samp', init);

export const script = init => assembler.createElement('script', init);

export const section = init => assembler.createElement('section', init);

export const select = init => assembler.createElement('select', init);

export const slot = init => assembler.createElement('slot', init);

export const small = init => assembler.createElement('small', init);

export const source = init => assembler.createElement('source', init);

export const span = init => assembler.createElement('span', init);

export const strong = init => assembler.createElement('strong', init);

export const style = init => assembler.createElement('style', init);

export const sub = init => assembler.createElement('sub', init);

export const summary = init => assembler.createElement('summary', init);

export const sup = init => assembler.createElement('sup', init);

// todo SVGAssembler
// export const svg = init => instance.createElement('svg', init);

export const table = init => assembler.createElement('table', init);

export const tbody = init => assembler.createElement('tbody', init);

export const td = init => assembler.createElement('td', init);

export const template = init => assembler.createElement('template', init);

export const textarea = init => assembler.createElement('textarea', init);

export const tfoot = init => assembler.createElement('tfoot', init);

export const th = init => assembler.createElement('th', init);

export const thead = init => assembler.createElement('thead', init);

export const time = init => assembler.createElement('time', init);

export const title = init => assembler.createElement('title', init);

export const tr = init => assembler.createElement('tr', init);

export const track = init => assembler.createElement('track', init);

export const u = init => assembler.createElement('u', init);

export const ul = init => assembler.createElement('ul', init);

// `var` is JS-keyword
export const variable = init => assembler.createElement('var', init);

export const video = init => assembler.createElement('video', init);

export const wbr = init => assembler.createElement('wbr', init);

