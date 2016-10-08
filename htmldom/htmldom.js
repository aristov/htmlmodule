import { HTMLAssembler } from './../html/html.js';

const assembler = new HTMLAssembler;

/**
 * Creates and initializes the specified element
 *
 * @param {String} tagName element tag name
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
const htmldom = (tagName, init) => assembler.createElement(tagName, init);

export default htmldom;

/**
 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
 *  - If the `a` element has an `href` attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
 *  - If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.
 *
 * Implements `HTMLAnchorElement` interface
 * @function a
 * @param {String} init.href — Address of the hyperlink
 * @param {String} init.target — Browsing context for hyperlink navigation
 * @param {String} init.download — Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} init.ping — URLs to ping
 * @param {String} init.rel — Relationship between the location in the document containing the hyperlink and the destination resource
 * @param {String} init.hreflang — Language of the linked resource
 * @param {String} init.type — Hint for the type of the referenced resource
 * @param {String} init.referrerpolicy — Determines the referrer policy for fetches initiated by the element
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
export const a = init => htmldom('a', init);

/**
 * [The `abbr` element](https://html.spec.whatwg.org/#the-abbr-element)
 * represents an abbreviation or acronym, optionally with its expansion.
 * The `title` attribute may be used to provide an expansion of the abbreviation.
 * The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
 *
 * Uses `HTMLElement` interface
 * @function abbr
 * @param {String} init.title — special semantics: full term or expansion of abbreviation
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
export const abbr = init => htmldom('abbr', init);

/**
 * [The `address` element](https://html.spec.whatwg.org/#the-address-element)
 * represents the contact information for its nearest `article` or `body` element ancestor.
 * If that is the `body` element, then the contact information applies to the document as a whole.
 *
 * Uses `HTMLElement` interface
 * @function address
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
export const address = init => htmldom('address', init);

/**
 * [The `area` element](https://html.spec.whatwg.org/#the-area-element)
 * represents either a hyperlink with some text and a corresponding area on an image map,
 * or a dead area on an image map.
 *
 * Implements `HTMLAreaElement` interface
 * @function area
 * @param {String} init.alt — Replacement text for use when images are not available
 * @param {String} init.coords — Coordinates for the shape to be created in an image map
 * @param {String} init.shape — The kind of shape to be created in an image map
 * @param {String} init.href — Address of the hyperlink
 * @param {String} init.target — Browsing context for hyperlink navigation
 * @param {String} init.download — Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} init.ping — URLs to ping
 * @param {String} init.rel — Relationship between the location in the document containing the hyperlink and the destination resource
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
export const area = init => htmldom('area', init);

/**
 * [The `article` element](https://html.spec.whatwg.org/#the-article-element)
 * represents a complete, or self-contained, composition in a document, page, application,
 * or site and that is, in principle, independently distributable or reusable, e.g. in syndication.
 * This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment,
 * an interactive widget or gadget, or any other independent item of content.
 *
 * Uses `HTMLElement` interface
 * @function article
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
export const article = init => htmldom('article', init);

/**
 * [The `aside` element](https://html.spec.whatwg.org/#the-aside-element)
 * represents a section of a page that consists of content that is tangentially related to the content around the aside element,
 * and which could be considered separate from that content.
 * Such sections are often represented as sidebars in printed typography.
 *
 * Uses HTMLElement interface
 * @function aside
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
export const aside = init => htmldom('aside', init);

/**
 * [The `audio` element](https://html.spec.whatwg.org/#the-audio-element)
 * represents a sound or audio stream.
 * Content may be provided inside the `audio` element.
 * User agents should not show this content to the user;
 * it is intended for older Web browsers which do not support audio, so that legacy audio plugins can be tried,
 * or to show text to the users of these older browsers informing them of how to access the audio contents.
 *
 * Uses HTMLAudioElement interface
 * @function audio
 * @param {String} init.src — Address of the resource
 * @param {String} init.crossorigin — How the element handles crossorigin requests
 * @param {String} init.preload — Hints how much buffering the media resource will likely need
 * @param {Boolean} init.autoplay — Hint that the media resource can be started automatically when the page is loaded
 * @param {Boolean} init.loop — Whether to loop the media resource
 * @param {Boolean} init.muted — Whether to mute the media resource by default
 * @param {Boolean} init.controls — Show user agent controls
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
export const audio = init => htmldom('audio', init);

export const b = init => htmldom('b', init);

export const base = init => htmldom('base', init);

/**
 * [The `bdi` element](https://html.spec.whatwg.org/#the-bdi-element)
 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
 *
 * Uses HTMLElement interface
 * @function bdi
 * @param {String} init.dir — special semantics
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
export const bdi = init => htmldom('bdi', init);

/**
 * [The `bdo` element](https://html.spec.whatwg.org/#the-bdo-element)
 * represents explicit text directionality formatting control for its children.
 * It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.
 *
 * Uses HTMLElement interface
 * @function bdo
 * @param {String} init.dir — special semantics: `rtl` or `ltr` values allowed only
 * @param init.global{} — global `HTMLElement` attributes
 * @param {*} init object
 */
export const bdo = init => htmldom('bdo', init);

export const blockquote = init => htmldom('blockquote', init);

export const body = init => htmldom('body', init);

export const br = init => htmldom('br', init);

export const button = init => htmldom('button', init);

export const canvas = init => htmldom('canvas', init);

export const caption = init => htmldom('caption', init);

export const cite = init => htmldom('cite', init);

export const code = init => htmldom('code', init);

export const col = init => htmldom('col', init);

export const colgroup = init => htmldom('colgroup', init);

export const data = init => htmldom('data', init);

export const datalist = init => htmldom('datalist', init);

export const dd = init => htmldom('dd', init);

export const del = init => htmldom('del', init);

export const details = init => htmldom('details', init);

export const dfn = init => htmldom('dfn', init);

export const dialog = init => htmldom('dialog', init);

export const div = init => htmldom('div', init);

export const dl = init => htmldom('dl', init);

export const dt = init => htmldom('dt', init);

export const em = init => htmldom('em', init);

export const embed = init => htmldom('embed', init);

export const fieldset = init => htmldom('fieldset', init);

export const figcaption = init => htmldom('figcaption', init);

export const figure = init => htmldom('figure', init);

export const footer = init => htmldom('footer', init);

export const form = init => htmldom('form', init);

export const h1 = init => htmldom('h1', init);

export const h2 = init => htmldom('h2', init);

export const h3 = init => htmldom('h3', init);

export const h4 = init => htmldom('h4', init);

export const h5 = init => htmldom('h5', init);

export const h6 = init => htmldom('h6', init);

export const head = init => htmldom('head', init);

export const header = init => htmldom('header', init);

export const hgroup = init => htmldom('hgroup', init);

export const hr = init => htmldom('hr', init);

export const html = init => htmldom('html', init);

export const i = init => htmldom('i', init);

export const iframe = init => htmldom('iframe', init);

export const img = init => htmldom('img', init);

export const input = init => htmldom('input', init);

export const ins = init => htmldom('ins', init);

export const kbd = init => htmldom('kbd', init);

export const keygen = init => htmldom('keygen', init);

export const label = init => htmldom('label', init);

export const legend = init => htmldom('legend', init);

export const li = init => htmldom('li', init);

export const link = init => htmldom('link', init);

export const main = init => htmldom('main', init);

export const map = init => htmldom('map', init);

export const mark = init => htmldom('mark', init);

// todo mathdom
// export const math = init => mathdom('math', init);

export const menu = init => htmldom('menu', init);

export const menuitem = init => htmldom('menuitem', init);

export const meta = init => htmldom('meta', init);

export const meter = init => htmldom('meter', init);

export const nav = init => htmldom('nav', init);

export const noscript = init => htmldom('noscript', init);

export const object = init => htmldom('object', init);

export const ol = init => htmldom('ol', init);

export const optgroup = init => htmldom('optgroup', init);

export const option = init => htmldom('option', init);

export const output = init => htmldom('output', init);

export const p = init => htmldom('p', init);

export const param = init => htmldom('param', init);

export const picture = init => htmldom('picture', init);

export const pre = init => htmldom('pre', init);

export const progress = init => htmldom('progress', init);

export const q = init => htmldom('q', init);

export const rp = init => htmldom('rp', init);

export const rt = init => htmldom('rt', init);

export const ruby = init => htmldom('ruby', init);

export const s = init => htmldom('s', init);

export const samp = init => htmldom('samp', init);

export const script = init => htmldom('script', init);

export const section = init => htmldom('section', init);

export const select = init => htmldom('select', init);

export const slot = init => htmldom('slot', init);

export const small = init => htmldom('small', init);

export const source = init => htmldom('source', init);

export const span = init => htmldom('span', init);

export const strong = init => htmldom('strong', init);

export const style = init => htmldom('style', init);

export const sub = init => htmldom('sub', init);

export const summary = init => htmldom('summary', init);

export const sup = init => htmldom('sup', init);

// todo svgdom
// export const svg = init => svgdom('svg', init);

export const table = init => htmldom('table', init);

export const tbody = init => htmldom('tbody', init);

export const td = init => htmldom('td', init);

export const template = init => htmldom('template', init);

export const textarea = init => htmldom('textarea', init);

export const tfoot = init => htmldom('tfoot', init);

export const th = init => htmldom('th', init);

export const thead = init => htmldom('thead', init);

export const time = init => htmldom('time', init);

export const title = init => htmldom('title', init);

export const tr = init => htmldom('tr', init);

export const track = init => htmldom('track', init);

export const u = init => htmldom('u', init);

export const ul = init => htmldom('ul', init);

// `var` is JS-keyword
export const variable = init => htmldom('var', init);

export const video = init => htmldom('video', init);

export const wbr = init => htmldom('wbr', init);

