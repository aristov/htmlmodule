import { HTMLAssembler } from './htmlassembler';

const assembler = new HTMLAssembler;

/**
 * Assembles the specified `HTMLElement` node
 *
 * Provides `HTMLElement` interface and all HTML DOM interfaces which inherit from it
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#htmlelement-htmlelement)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
 * - [MSDN API reference](https://msdn.microsoft.com/en-us/library/hh869697.aspx)
 *
 * @function htmldom
 * @param {String} tagName element tag name
 * @param {{}} init `NodeInit` dictionary
 * @param {{}} init.attrset
 * @param {{}} init.dataset
 * @param {{}} init.style `CSSStyleDeclaration`
 * @param {String|Node|DOMAssembler|Array} init.children
 * @param {String} init.accessKey
 * @param {String} init.className
 * @param {String} init.contentEditable
 * @param {String} init.dir
 * @param {Boolean} init.hidden
 * @param {String} init.id
 * @param {String} init.innerHTML
 * @param {String} init.lang
 * @param {Number} init.tabIndex
 * @param {String} init.title
 */
export function htmldom(tagName, init) {
    return assembler.createElement(tagName, init)
};

/**
 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
 *  - If the `a` element has an `href` attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
 *  - If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.
 *
 * Implements `HTMLAnchorElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-a-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
 * - [MSDN API reference](https://msdn.microsoft.com/en-us/library/hh869682.aspx)
 *
 * @function a
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.href Address of the hyperlink
 * @param {String} init.target Browsing context for hyperlink navigation
 * @param {String} init.download Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} init.ping URLs to ping
 * @param {String} init.rel Relationship between the location in the document containing the hyperlink and the destination resource
 * @param {String} init.hreflang Language of the linked resource
 * @param {String} init.type Hint for the type of the referenced resource
 * @param {String} init.referrerPolicy Determines the referrer policy for fetches initiated by the element
 */
export function a(init) { return htmldom('a', init) }

/**
 * [The `abbr` element](https://html.spec.whatwg.org/#the-abbr-element)
 * represents an abbreviation or acronym, optionally with its expansion.
 * The `title` attribute may be used to provide an expansion of the abbreviation.
 * The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-abbr-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
 *
 * @function abbr
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.title Special semantics: full term or expansion of abbreviation
 */
export function abbr(init) { return htmldom('abbr', init) }

/**
 * [The `address` element](https://html.spec.whatwg.org/#the-address-element)
 * represents the contact information for its nearest `article` or `body` element ancestor.
 * If that is the `body` element, then the contact information applies to the document as a whole.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-address-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
 *
 * @function address
 * @param {{}} init `NodeInit` dictionary
 */
export function address(init) { return htmldom('address', init) }

/**
 * [The `area` element](https://html.spec.whatwg.org/#the-area-element)
 * represents either a hyperlink with some text and a corresponding area on an image map,
 * or a dead area on an image map.
 *
 * Implements `HTMLAreaElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-area-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
 *
 * @function area
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.alt Replacement text for use when images are not available
 * @param {String} init.coords Coordinates for the shape to be created in an image map
 * @param {String} init.shape The kind of shape to be created in an image map
 * @param {String} init.href Address of the hyperlink
 * @param {String} init.target Browsing context for hyperlink navigation
 * @param {String} init.download Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} init.ping URLs to ping
 * @param {String} init.rel Relationship between the location in the document containing the hyperlink and the destination resource
 */
export function area(init) { return htmldom('area', init) }

/**
 * [The `article` element](https://html.spec.whatwg.org/#the-article-element)
 * represents a complete, or self-contained, composition in a document, page, application,
 * or site and that is, in principle, independently distributable or reusable, e.g. in syndication.
 * This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment,
 * an interactive widget or gadget, or any other independent item of content.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-article-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
 *
 * @function article
 * @param {{}} init `NodeInit` dictionary
 */
export function article(init) { return htmldom('article', init) }

/**
 * [The `aside` element](https://html.spec.whatwg.org/#the-aside-element)
 * represents a section of a page that consists of content that is tangentially related to the content around the aside element,
 * and which could be considered separate from that content.
 * Such sections are often represented as sidebars in printed typography.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-aside-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
 *
 * @function aside
 * @param {{}} init `NodeInit` dictionary
 */
export function aside(init) { return htmldom('aside', init) }

/**
 * [The `audio` element](https://html.spec.whatwg.org/#the-audio-element)
 * represents a sound or audio stream.
 * Content may be provided inside the `audio` element.
 * User agents should not show this content to the user;
 * it is intended for older Web browsers which do not support audio, so that legacy audio plugins can be tried,
 * or to show text to the users of these older browsers informing them of how to access the audio contents.
 *
 * Implements `HTMLAudioElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-audio-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
 *
 * @function audio
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.src Address of the resource
 * @param {String} init.crossorigin How the element handles crossorigin requests
 * @param {String} init.preload Hints how much buffering the media resource will likely need
 * @param {Boolean} init.autoplay Hint that the media resource can be started automatically when the page is loaded
 * @param {Boolean} init.loop Whether to loop the media resource
 * @param {Boolean} init.muted Whether to mute the media resource by default
 * @param {Boolean} init.controls Show user agent controls
 */
export function audio(init) { return htmldom('audio', init) }

/**
 * [The `b` element](https://html.spec.whatwg.org/#the-b-element)
 * represents a span of text to which attention is being drawn
 * for utilitarian purposes without conveying any extra importance
 * and with no implication of an alternate voice or mood,
 * such as key words in a document abstract, product names in a review,
 * actionable words in interactive text-driven software, or an article lede.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-b-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
 *
 * @function b
 * @param {{}} init `NodeInit` dictionary
 */
export function b(init) { return htmldom('b', init) }

/**
 * [The `base` element](https://html.spec.whatwg.org/#the-base-element)
 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-base-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
 *
 * @function base
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.dir special semantics
 */
export function base(init) { return htmldom('base', init) }

/**
 * [The `bdi` element](https://html.spec.whatwg.org/#the-bdi-element)
 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-bdi-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)
 *
 * @function bdi
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.dir special semantics
 */
export function bdi(init) { return htmldom('bdi', init) }

/**
 * [The `bdo` element](https://html.spec.whatwg.org/#the-bdo-element)
 * represents explicit text directionality formatting control for its children.
 * It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-bdo-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo)
 *
 * @function bdo
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.dir special semantics: `rtl` or `ltr` values allowed only
 */
export function bdo(init) { return htmldom('bdo', init) }

/**
 * [The `blockquote` element](https://html.spec.whatwg.org/#the-blockquote-element)
 * represents a section that is quoted from another source.
 * Content inside a blockquote must be quoted from another source,
 * whose address, if it has one, may be cited in the cite attribute.
 *
 * Implements `HTMLQuoteElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-blockquote-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
 *
 * @function blockquote
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.cite Link to the source of the quotation or more information about the edit
 */
export function blockquote(init) { return htmldom('blockquote', init) }

/**
 * [The `body` element](https://html.spec.whatwg.org/#the-body-element)
 * represents the main content of the document.
 *
 * Implements `HTMLBodyElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-body-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
 *
 * @function body
 * @param {{}} init `NodeInit` dictionary
 * @param init.onafterprint
 * @param init.onbeforeprint
 * @param init.onbeforeunload
 * @param init.onhashchange
 * @param init.onlanguagechange
 * @param init.onmessage
 * @param init.onoffline
 * @param init.ononline
 * @param init.onpagehide
 * @param init.onpageshow
 * @param init.onpopstate
 * @param init.onrejectionhandled
 * @param init.onstorage
 * @param init.onunhandledrejection
 * @param init.onunload
 */
export function body(init) { return htmldom('body', init) }

/**
 * [The `br` element](https://html.spec.whatwg.org/#the-br-element)
 * represents a line break.
 *
 * Implements `HTMLBRElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-br-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBRElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
 *
 * @function br
 * @param {{}} init `NodeInit` dictionary
 */
export function br(init) { return htmldom('br', init) }

/**
 * [The `button` element](https://html.spec.whatwg.org/#the-button-element)
 * represents a button labeled by its contents.
 *
 * - [w3](https://www.w3.org/TR/html/single-page.html#the-button-element)
 * - [mdn](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
 * - [msdn](https://msdn.microsoft.com/en-us/library/ms535211.aspx)
 *
 * Implements `HTMLButtonElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-button-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
 *
 * @function button
 * @param {{}} init `NodeInit` dictionary
 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {String} [init.formAction] URL to use for form submission
 * @param {String} [init.formEnctype] Form data set encoding type to use for form submission
 * @param {String} [init.formMethod] HTTP method to use for form submission
 * @param {Boolean} [init.formNoValidate] Bypass form control validation for form submission
 * @param {String} [init.formTarget] Browsing context for form submission
 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
 * @param {String} [init.type] Type of button
 * @param {String} [init.value] Value to be used for form submission
 * @param {HTMLMenuElement} [init.menu] Specifies the element's designated pop-up menu
 */
export function button(init) { return htmldom('button', init) }

/**
 * [The `canvas` element](https://html.spec.whatwg.org/#the-canvas-element)
 * provides scripts with a resolution-dependent bitmap canvas,
 * which can be used for rendering graphs, game graphics, art,
 * or other visual images on the fly.
 *
 * Implements `HTMLCanvasElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-canvas-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
 *
 * @function canvas
 * @param {{}} init `NodeInit` dictionary
 * @param {Number} init.width Horizontal dimension
 * @param {Number} init.height Vertical dimension
 */
export function canvas(init) { return htmldom('canvas', init) }

/**
 * [The `caption` element](https://html.spec.whatwg.org/#the-caption-element)
 * represents the title of the table that is its parent,
 * if it has a parent and that is a table element.
 *
 * Implements `HTMLTableCaptionElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-caption-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
 *
 * @function caption
 * @param {{}} init `NodeInit` dictionary
 */
export function caption(init) { return htmldom('caption', init) }

/**
 * [The `cite` element](https://html.spec.whatwg.org/#the-cite-element)
 * represents the title of a work (e.g. a book, a paper, an essay, a poem,
 * a score, a song, a script, a film, a TV show, a game, a sculpture, a painting,
 * a theatre production, a play, an opera, a musical, an exhibition, a legal case report,
 * a computer program, etc). This can be a work that is being quoted or referenced in detail
 * (i.e. a citation), or it can just be a work that is mentioned in passing.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-cite-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)
 *
 * @function cite
 * @param {{}} init `NodeInit` dictionary
 */
export function cite(init) { return htmldom('cite', init) }

/**
 * [The `code` element](https://html.spec.whatwg.org/#the-code-element)
 * represents a fragment of computer code. This could be an XML element name,
 * a file name, a computer program, or any other string that a computer would recognize.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-code-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
 *
 * @function code
 * @param {{}} init `NodeInit` dictionary
 */
export function code(init) { return htmldom('code', init) }

/**
 * [The `col` element](https://html.spec.whatwg.org/#the-col-element)
 * represents has a parent and that is a colgroup element that itself has a parent
 * that is a table element, then the col element represents one or more columns
 * in the column group represented by that colgroup.
 *
 * Implements `HTMLTableColElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-col-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535225.aspx)
 *
 * @function col
 * @param {{}} init `NodeInit` dictionary
 * @param {Number} init.span Number of columns spanned by the element
 */
export function col(init) { return htmldom('col', init) }

/**
 * [The `colgroup` element](https://html.spec.whatwg.org/#the-colgroup-element)
 * represents represents a group of one or more columns in the table that is its parent,
 * if it has a parent and that is a table element.
 *
 * Implements `HTMLTableColElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-colgroup-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535225.aspx)
 *
 * @function colgroup
 * @param {{}} init `NodeInit` dictionary
 * @param {Number} init.span Number of columns spanned by the element
 */
export function colgroup(init) { return htmldom('colgroup', init) }

/**
 * [The `data` element](https://html.spec.whatwg.org/#the-data-element)
 * represents its contents, along with a machine-readable form
 * of those contents in the value attribute.
 *
 * Implements `HTMLDataElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-data-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt706246.aspx)
 *
 * @function data
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.value Machine-readable value
 */
export function data(init) { return htmldom('data', init) }

/**
 * [The `datalist` element](https://html.spec.whatwg.org/#the-datalist-element)
 * represents a set of option elements that represent predefined options for other controls.
 * In the rendering, the datalist element represents nothing and it, along with its children,
 * should be hidden.
 *
 * Implements `HTMLDataListElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/hh772925.aspx)
 *
 * @function datalist
 * @param {{}} init `NodeInit` dictionary
 */
export function datalist(init) { return htmldom('datalist', init) }

/**
 * [The `dd` element](https://html.spec.whatwg.org/#the-dd-element)
 * represents the description, definition, or value,
 * part of a term-description group in a description list (dl element).
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535234.aspx)
 *
 * @function dd
 * @param {{}} init `NodeInit` dictionary
 */
export function dd(init) { return htmldom('dd', init) }

/**
 * [The `del` element](https://html.spec.whatwg.org/#the-del-element)
 * represents a removal from the document.
 *
 * Uses `HTMLModElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-del-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535236.aspx)
 *
 * @function del
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.cite Link to the source of the quotation or more information about the edit
 * @param {String} init.dateTime Date and (optionally) time of the change
 */
export function del(init) { return htmldom('del', init) }

/**
 * [The `details` element](https://html.spec.whatwg.org/#the-details-element)
 * represents a disclosure widget from which the user can obtain additional information or controls.
 *
 * Implements `HTMLDetailsElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/interactive-elements.html#the-details-element)
 * - [MDN elemeent reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
 *
 * @function details
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.open Whether the details are visible
 */
export function details(init) { return htmldom('details', init) }

/**
 * [The `dfn` element](https://html.spec.whatwg.org/#the-dfn-element)
 * represents the defining instance of a term. The paragraph, description list group,
 * or section that is the nearest ancestor of the dfn element must also contain
 * the definition(s) for the term given by the dfn element.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-dfn-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535237.aspx)
 *
 * @function dfn
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.title Special semantics: Full term or expansion of abbreviation
 */
export function dfn(init) { return htmldom('dfn', init) }

/**
 * [The `dialog` element](https://html.spec.whatwg.org/#the-dialog-element)
 * represents a part of an application that a user interacts with to perform a task,
 * for example a dialog box, inspector, or window.
 *
 * Implements `HTMLDialogElement` interface
 *
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
 *
 * @function dialog
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.open Whether the dialog box is showing
 */
export function dialog(init) { return htmldom('dialog', init) }

/**
 * [The `div` element](https://html.spec.whatwg.org/#the-div-element)
 * has no special meaning at all. It represents its children.
 * It can be used with the class, lang, and title attributes to mark up semantics
 * common to a group of consecutive elements.
 *
 * Implements `HTMLDivElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-div-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535240.aspx)
 *
 * @function div
 * @param {{}} init `NodeInit` dictionary
 */
export function div(init) { return htmldom('div', init) }

/**
 * [The `dl` element](https://html.spec.whatwg.org/#the-dl-element)
 * represents an association list consisting of zero or more name-value groups (a description list).
 * A name-value group consists of one or more names (dt elements) followed by one or more values
 * (dd elements), ignoring any nodes other than dt and dd elements.
 * Within a single dl element, there should not be more than one dt element for each name.
 *
 * Implements `HTMLDListElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-dl-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535241.aspx)
 *
 * @function dl
 * @param {{}} init `NodeInit` dictionary
 */
export function dl(init) { return htmldom('dl', init) }

/**
 * [The `dt` element](https://html.spec.whatwg.org/#the-dt-element)
 * represents the term, or name, part of a term-description group in a description list (dl element).
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-dt-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535243.aspx)
 *
 * @function dt
 * @param {{}} init `NodeInit` dictionary
 */
export function dt(init) { return htmldom('dt', init) }

/**
 * [The `em` element](https://html.spec.whatwg.org/#the-em-element)
 * represents stress emphasis of its contents.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-em-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535244.aspx)
 *
 * @function em
 * @param {{}} init `NodeInit` dictionary
 */
export function em(init) { return htmldom('em', init) }

/**
 * [The `embed` element](https://html.spec.whatwg.org/#the-embed-element)
 * represents provides an integration point for an external (typically non-HTML)
 * application or interactive content.
 *
 * Implements `HTMLEmbedElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-embed-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535245.aspx)
 *
 * @function embed
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.src Address of the resource
 * @param {String} init.type Type of embedded resource
 * @param {String} init.width Horizontal dimension
 * @param {String} init.height Vertical dimension
 */
export function embed(init) { return htmldom('embed', init) }

/**
 * [The `fieldset` element](https://html.spec.whatwg.org/#the-fieldset-element)
 * represents
 *
 * Implements `HTMLFieldSetElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-fieldset-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535247.aspx)
 *
 * @function fieldset
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.disabled Whether the form control is disabled
 * @param {String} init.form Associates the control with a form element
 * @param {String} init.name Name of form control to use in the form.elements API
 */
export function fieldset(init) { return htmldom('fieldset', init) }

/**
 * [The `figcaption` element](https://html.spec.whatwg.org/#the-figcaption-element)
 * represents a caption or legend for the rest of the contents
 * of the figcaption element's parent figure element, if any.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-figcaption-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593037.aspx)
 *
 * @function figcaption
 * @param {{}} init `NodeInit` dictionary
 */
export function figcaption(init) { return htmldom('figcaption', init) }

/**
 * [The `figure` element](https://html.spec.whatwg.org/#the-figure-element)
 * represents some flow content, optionally with a caption,
 * that is self-contained (like a complete sentence) and is typically referenced
 * as a single unit from the main flow of the document.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-figure-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
 *
 * @function figure
 * @param {{}} init `NodeInit` dictionary
 */
export function figure(init) { return htmldom('figure', init) }

/**
 * [The `footer` element](https://html.spec.whatwg.org/#the-footer-element)
 * represents a footer for its nearest ancestor sectioning content or sectioning root element.
 * A footer typically contains information about its section such as who wrote it,
 * links to related documents, copyright data, and the like.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-footer-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593039.aspx)
 *
 * @function footer
 * @param {{}} init `NodeInit` dictionary
 */
export function footer(init) { return htmldom('footer', init) }

/**
 * [The `form` element](https://html.spec.whatwg.org/#the-form-element)
 * represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
 *
 * Implements `HTMLFormElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-form-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535249.aspx)
 *
 * @function form
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.acceptCharset Character encodings to use for form submission
 * @param {String} init.action URL to use for form submission
 * @param {String} init.autocomplete Default setting for autofill feature for controls in the form
 * @param {String} init.enctype Form data set encoding type to use for form submission
 * @param {String} init.method HTTP method to use for form submission
 * @param {String} init.name Name of form to use in the document.forms API
 * @param {Boolean} init.noValidate Bypass form control validation for form submission
 * @param {String} init.target Browsing context for form submission
 */
export function form(init) { return htmldom('form', init) }

/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * Implements `HTMLHeadingElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-h1-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535253.aspx)
 *
 * @function h1
 * @param {{}} init `NodeInit` dictionary
 */
export function h1(init) { return htmldom('h1', init) }
/**
 * See [h1](#h1)
 * @function h2
 * @param {{}} init `NodeInit` dictionary
 */
export function h2(init) { return htmldom('h2', init) }
/**
 * See [h1](#h1)
 * @function h3
 * @param {{}} init `NodeInit` dictionary
 */
export function h3(init) { return htmldom('h3', init) }
/**
 * See [h1](#h1)
 * @function h4
 * @param {{}} init `NodeInit` dictionary
 */
export function h4(init) { return htmldom('h4', init) }
/**
 * See [h1](#h1)
 * @function h5
 * @param {{}} init `NodeInit` dictionary
 */
export function h5(init) { return htmldom('h5', init) }
/**
 * See [h1](#h1)
 * @function h6
 * @param {{}} init `NodeInit` dictionary
 */
export function h6(init) { return htmldom('h6', init) }

/**
 * [The `head` element](https://html.spec.whatwg.org/#the-head-element)
 * represents a collection of metadata for the Document.
 *
 * Implements `HTMLHeadElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-head-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/HTMLHeadElement)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535252.aspx)
 *
 * @function head
 * @param {{}} init `NodeInit` dictionary
 */
export function head(init) { return htmldom('head', init) }

/**
 * [The `header` element](https://html.spec.whatwg.org/#the-header-element)
 * represents a group of introductory or navigational aids.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-header-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593044.aspx)
 *
 * @function header
 * @param {{}} init `NodeInit` dictionary
 */
export function header(init) { return htmldom('header', init) }

/**
 * [The `hgroup` element](https://html.spec.whatwg.org/#the-hgroup-element)
 * represents the heading of a section, which consists
 * of all the h1–h6 element children of the hgroup element.
 * The element is used to group a set of h1–h6 elements when the heading has multiple levels,
 * such as subheadings, alternative titles, or taglines.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-hgroup-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593045.aspx)
 *
 * @function hgroup
 * @param {{}} init `NodeInit` dictionary
 */
export function hgroup(init) { return htmldom('hgroup', init) }

/**
 * [The `hr` element](https://html.spec.whatwg.org/#the-hr-element)
 * represents a paragraph-level thematic break, e.g. a scene change in a story,
 * or a transition to another topic within a section of a reference book.
 *
 * Implements `HTMLHRElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-hr-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535254.aspx)
 *
 * @function hr
 * @param {{}} init `NodeInit` dictionary
 */
export function hr(init) { return htmldom('hr', init) }

/**
 * [The `html` element](https://html.spec.whatwg.org/#the-html-element)
 * represents the root of an HTML document.
 *
 * Implements `HTMLHtmlElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-html-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535255.aspx)
 *
 * @function html
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.manifest [Application cache manifest](https://html.spec.whatwg.org/#concept-appcache-manifest)
 */
export function html(init) { return htmldom('html', init) }

/**
 * [The `i` element](https://html.spec.whatwg.org/#the-i-element)
 * represents a span of text in an alternate voice or mood,
 * or otherwise offset from the normal prose in a manner indicating a different quality of text,
 * such as a taxonomic designation, a technical term, an idiomatic phrase from another language,
 * transliteration, a thought, or a ship name in Western texts.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-i-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535257.aspx)
 *
 * @function i
 * @param {{}} init `NodeInit` dictionary
 */
export function i(init) { return htmldom('i', init) }

/**
 * [The `iframe` element](https://html.spec.whatwg.org/#the-iframe-element)
 * represents a [nested browsing context](https://html.spec.whatwg.org/#nested-browsing-context).
 *
 * Implements `HTMLIFrameElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-iframe-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535258.aspx)
 *
 * @function iframe
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.src Address of the resource
 * @param {String} init.srcdoc A document to render in the iframe
 * @param {String} init.name Name of nested browsing context
 * @param {String} init.attrset.sandbox Security rules for nested content
 * @param {String} init.allowFullScreen Whether to allow the iframe's contents to use requestFullscreen()
 * @param {String} init.allowUserMedia Whether to allow the iframe's contents to use getUserMedia()
 * @param {String} init.width Horizontal dimension
 * @param {String} init.height Vertical dimension
 * @param {String} init.referrerPolicy Determines the referrer policy for fetches initiated by the element
 */
export function iframe(init) { return htmldom('iframe', init) }

/**
 * [The `img` element](https://html.spec.whatwg.org/#the-img-element)
 * represents an image.
 *
 * Implements `HTMLImageElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-img-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535259.aspx)
 *
 * @function img
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.alt Replacement text for use when images are not available
 * @param {String} init.src Address of the resource
 * @param {String} init.srcset Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
 * @param {String} init.sizes Image sizes for different page layouts
 * @param {String} init.crossOrigin How the element handles crossorigin requests
 * @param {String} init.useMap Name of image map to use
 * @param {Boolean} init.isMap Whether the image is a server-side image map
 * @param {Number} init.width Horizontal dimension
 * @param {Number} init.height Vertical dimension
 * @param {String} init.referrerPolicy Determines the referrer policy for fetches initiated by the element
 */
export function img(init) { return htmldom('img', init) }

/**
 * [The `input` element](https://html.spec.whatwg.org/#the-input-element)
 * represents a typed data field, usually with a form control to allow the user to edit the data.
 *
 * Implements `HTMLInputElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-input-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535260.aspx)
 *
 * @function input
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.alt Replacement text for use when images are not available
 * @param {String} init.accept Hint for expected file type in file upload controls
 * @param {String} init.autocomplete Hint for form autofill feature
 * @param {Boolean} init.autofocus Automatically focus the form control when the page is loaded
 * @param {Boolean} init.checked Whether the command or control is checked
 * @param {Boolean} init.defaultChecked
 * @param {String} init.dirName Name of form control to use for sending the element's directionality in form submission
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {String} init.formAction URL to use for form submission
 * @param {String} init.formEnctype Form data set encoding type to use for form submission
 * @param {String} init.formMethod HTTP method to use for form submission
 * @param {Boolean} init.formNoValidate Bypass form control validation for form submission
 * @param {String} init.formTarget Browsing context for form submission
 * @param {Number} init.height Vertical dimension
 * @param {Boolean} init.indeterminate
 * @param {String} init.inputMode Hint for selecting an input modality
 * @param {String} init.max Maximum value
 * @param {Number} init.maxLength Maximum length of value
 * @param {String} init.min Minimum value
 * @param {Number} init.minLength Minimum length of value
 * @param {Boolean} init.multiple Whether to allow multiple values
 * @param {String} init.name Name of form control to use for form submission and in the form.elements API
 * @param {String} init.pattern Pattern to be matched by the form control's value
 * @param {String} init.placeholder User-visible label to be placed within the form control
 * @param {Boolean} init.readOnly Whether to allow the value to be edited by the user
 * @param {Boolean} init.required Whether the control is required for form submission
 * @param {Number} init.size Size of the control
 * @param {String} init.src Address of the resource
 * @param {String} init.step Granularity to be matched by the form control's value
 * @param {String} init.type Type of form control
 * @param {String} init.value Value of the form control
 * @param {String} init.defaultValue
 * @param {String} init.width Horizontal dimension
 * @param {String} init.title Special semantics: Description of pattern (when used with pattern attribute).
 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
 * @param {String} init.attrset.list List of autocomplete options
 */
export function input(init) { return htmldom('input', init) }

/**
 * [The `ins` element](https://html.spec.whatwg.org/#the-ins-element)
 * represents an addition to the document.
 *
 * Uses `HTMLModElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ins-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535842.aspx)
 *
 * @function ins
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.cite Link to the source of the quotation or more information about the edit
 * @param {String} init.dateTime Date and (optionally) time of the change
 */
export function ins(init) { return htmldom('ins', init) }

/**
 * [The `kbd` element](https://html.spec.whatwg.org/#the-kbd-element)
 * represents user input (typically keyboard input,
 * although it may also be used to represent other input, such as voice commands).
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-kbd-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
 *
 * @function kbd
 * @param {{}} init `NodeInit` dictionary
 */
export function kbd(init) { return htmldom('kbd', init) }

/**
 * [The `label` element](https://html.spec.whatwg.org/#the-label-element)
 * represents a caption in a user interface.
 * The caption can be associated with a specific form control,
 * known as the label element's labeled control, either using the for attribute,
 * or by putting the form control inside the label element itself.
 *
 * Implements `HTMLLabelElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-label-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535845.aspx)
 *
 * @function label
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.for Associate the label with form control
 */
export function label(init) { return htmldom('label', init) }

/**
 * [The `legend` element](https://html.spec.whatwg.org/#the-legend-element)
 * represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
 *
 * Implements `HTMLLegendElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-legend-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535846.aspx)
 *
 * @function legend
 * @param {{}} init `NodeInit` dictionary
 */
export function legend(init) { return htmldom('legend', init) }

/**
 * [The `li` element](https://html.spec.whatwg.org/#the-li-element)
 * represents a list item. If its parent element is an ol, ul, or menu element,
 * then the element is an item of the parent element's list, as defined for those elements.
 * Otherwise, the list item has no defined list-related relationship to any other li element.
 *
 * Implements `HTMLLIElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-li-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535847.aspx)
 *
 * @function li
 * @param {{}} init `NodeInit` dictionary
 * @param {Number} init.value Ordinal value of the list item (if the element is not a child of an ul or menu element)
 */
export function li(init) { return htmldom('li', init) }

/**
 * [The `link` element](https://html.spec.whatwg.org/#the-link-element)
 * allows authors to link their document to other resources.
 *
 * Implements `HTMLLinkElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-link-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535848.aspx)
 *
 * @function link
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.href Address of the hyperlink
 * @param {String} init.crossOrigin How the element handles crossorigin requests
 * @param {String} init.rel Relationship between the document containing the hyperlink and the destination resource
 * @param {String} init.as Destination for a preload request (for `rel="preload"`)
 * @param {String} init.media Applicable media
 * @param {String} init.nonce Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
 * @param {String} init.hreflang Language of the linked resource
 * @param {String} init.type Hint for the type of the referenced resource
 * @param {String} init.sizes Sizes of the icons (for `rel="icon"`)
 * @param {String} init.referrerPolicy Determines the referrer policy for fetches initiated by the element
 * @param {String} init.title Special semantics: title of the link; [CSS style sheet set name](CSS style sheet set name).
 */
export function link(init) { return htmldom('link', init) }

/**
 * [The `main` element](https://html.spec.whatwg.org/#the-main-element)
 * can be used as a container for the dominant contents of another element.
 * It represents its children.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-main-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt634542.aspx)
 *
 * @function main
 * @param {{}} init `NodeInit` dictionary
 */
export function main(init) { return htmldom('main', init) }

/**
 * [The `map` element](https://html.spec.whatwg.org/#the-map-element),
 * in conjunction with an img element and any area element descendants, defines an image map.
 * The element represents its children.
 *
 * Implements `HTMLMapElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-map-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535850.aspx)
 *
 * @function map
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.name Name of [image map](https://html.spec.whatwg.org/#image-map) to reference from the `usemap` attribute
 */
export function map(init) { return htmldom('map', init) }

/**
 * [The `mark` element](https://html.spec.whatwg.org/#the-mark-element)
 * represents a run of text in one document marked or highlighted for reference purposes,
 * due to its relevance in another context.
 * When used in a quotation or other block of text referred to from the prose,
 * it indicates a highlight that was not originally present but which has been added
 * to bring the reader's attention to a part of the text that might not have been considered
 * important by the original author when the block was originally written,
 * but which is now under previously unexpected scrutiny.
 * When used in the main prose of a document,
 * it indicates a part of the document that has been highlighted
 * due to its likely relevance to the user's current activity.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-mark-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593046.aspx)
 *
 * @function mark
 * @param {{}} init `NodeInit` dictionary
 */
export function mark(init) { return htmldom('mark', init) }

/**
 * [The `menu` element](https://html.spec.whatwg.org/#the-menu-element)
 * represents a list of commands.
 *
 * Implements `HTMLMenuElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-menu-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535852.aspx)
 *
 * @function menu
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.type Type of menu
 * @param {String} init.label User-visible label
 */
export function menu(init) { return htmldom('menu', init) }

/**
 * [The `menuitem` element](https://html.spec.whatwg.org/#the-menuitem-element)
 * represents a command that the user can invoke from a popup menu
 * (either a context menu or the menu of a menu button).
 *
 * Implements `HTMLMenuItemElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-menuitem-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuItemElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem)
 *
 * @function menuitem
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.type Type of command
 * @param {String} init.label User-visible label
 * @param {String} init.icon Icon for the command
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {Boolean} init.checked Whether the command or control is checked
 * @param {String} init.radiogroup Name of group of commands to treat as a radio button group
 * @param {Boolean} init.default Mark the command as being a default command
 * @param {String} init.title Special semantics: hint describing the command
 */
export function menuitem(init) { return htmldom('menuitem', init) }

/**
 * [The `meta` element](https://html.spec.whatwg.org/#the-meta-element)
 * represents various kinds of metadata that cannot be expressed using the title,
 * base, link, style, and script elements.
 *
 * Implements `HTMLMetaElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-meta-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535853.aspx)
 *
 * @function meta
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.name Metadata name
 * @param {String} init.http-equiv Pragma directive
 * @param {String} init.content Value of the element
 * @param {String} init.attrset.charset Character encoding declaration
 */
export function meta(init) { return htmldom('meta', init) }

/**
 * [The `meter` element](https://html.spec.whatwg.org/#the-meter-element)
 * represents a scalar measurement within a known range, or a fractional value;
 * for example disk usage, the relevance of a query result,
 * or the fraction of a voting population to have selected a particular candidate.
 *
 * Implements `HTMLMeterElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-meter-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt573149.aspx)
 *
 * @function meter
 * @param {{}} init `NodeInit` dictionary
 * @param {Number} init.value Current value of the element
 * @param {Number} init.min Lower bound of range
 * @param {Number} init.max Upper bound of range
 * @param {Number} init.low High limit of low range
 * @param {Number} init.high Low limit of high range
 * @param {Number} init.optimum Optimum value in gauge
 */
export function meter(init) { return htmldom('meter', init) }

/**
 * [The `nav` element](https://html.spec.whatwg.org/#the-nav-element)
 * represents a section of a page that links to other pages or to parts within the page:
 * a section with navigation links.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-nav-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593047.aspx)
 *
 * @function nav
 * @param {{}} init `NodeInit` dictionary
 */
export function nav(init) { return htmldom('nav', init) }

/**
 * [The `noscript` element](https://html.spec.whatwg.org/#the-noscript-element)
 * represents nothing if scripting is enabled,
 * and represents its children if scripting is disabled.
 * It is used to present different markup to user agents that support scripting
 * and those that don't support scripting, by affecting how the document is parsed.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-noscript-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535858.aspx)
 *
 * @function noscript
 * @param {{}} init `NodeInit` dictionary
 */
export function noscript(init) { return htmldom('noscript', init) }

/**
 * [The `object` element](https://html.spec.whatwg.org/#the-object-element)
 * can represent an external resource, which, depending on the type of the resource,
 * will either be treated as an image, as a nested browsing context,
 * or as an external resource to be processed by a plugin.
 *
 * Implements `HTMLObjectElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-object-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535859.aspx)
 *
 * @function object
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.data Address of the resource
 * @param {String} init.type Type of embedded resource
 * @param {Boolean} init.typeMustMatch Whether the type attribute and the Content-Type value need to match for the resource to be used
 * @param {String} init.name Name of nested browsing context
 * @param {String} init.useMap Name of image map to use
 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
 * @param {String} init.width Horizontal dimension
 * @param {String} init.height Vertical dimension
 */
export function object(init) { return htmldom('object', init) }

/**
 * [The `ol` element](https://html.spec.whatwg.org/#the-ol-element)
 * represents a list of items, where the items have been intentionally ordered,
 * such that changing the order would change the meaning of the document.
 *
 * Implements `HTMLOListElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ol-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535875.aspx)
 *
 * @function ol
 * @param {{}} init `NodeInit` dictionary
 * @param {Boolean} init.reversed Number the list backwards
 * @param {Number} init.start Starting value of the list
 * @param {String} init.type Kind of list marker
 */
export function ol(init) { return htmldom('ol', init) }

/**
 * [The `optgroup` element](https://html.spec.whatwg.org/#the-optgroup-element)
 * represents a group of option elements with a common label.
 *
 * Implements `HTMLOptGroupElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-optgroup-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535876.aspx)
 *
 * @function optgroup
 * @param {{}} init `NodeInit` dictionary
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {String} init.label User-visible label
 */
export function optgroup(init) { return htmldom('optgroup', init) }

/**
 * [The `option` element](https://html.spec.whatwg.org/#the-option-element)
 * represents an option in a select element or as part of a list of suggestions
 * in a datalist element.
 *
 * Implements `HTMLOptionElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-option-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535877.aspx)
 *
 * @function option
 * @param {{}} init `NodeInit` dictionary
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {String} init.label User-visible label
 * @param {Boolean} init.selected Whether the option is selected by default
 * @param {String} init.value Value to be used for form submission
 */
export function option(init) { return htmldom('option', init) }

/**
 * [The `output` element](https://html.spec.whatwg.org/#the-output-element)
 * represents the result of a calculation performed by the application,
 * or the result of a user action.
 *
 * Implements `HTMLOutputElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-output-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt732268.aspx)
 *
 * @function output
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.for Specifies controls from which the output was calculated
 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
 * @param {String} init.name Name of form control to use in the [form.elements](https://html.spec.whatwg.org/#dom-form-elements) API
 */
export function output(init) { return htmldom('output', init) }

/**
 * [The `p` element](https://html.spec.whatwg.org/#the-p-element)
 * represents a paragraph.
 *
 * Implements `HTMLParagraphElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-p-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535878.aspx)
 *
 * @function p
 * @param {{}} init `NodeInit` dictionary
 */
export function p(init) { return htmldom('p', init) }

/**
 * [The `param` element](https://html.spec.whatwg.org/#the-param-element)
 * defines parameters for plugins invoked by object elements.
 * It does not represent anything on its own.
 *
 * Implements `HTMLParamElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-param-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535880.aspx)
 *
 * @function param
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.name Name of parameter
 * @param {String} init.value Value of parameter
 */
export function param(init) { return htmldom('param', init) }

/**
 * [The `picture` element](https://html.spec.whatwg.org/#the-picture-element)
 * is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.
 *
 * Implements `HTMLPictureElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-picture-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt574001.aspx)
 *
 * @function picture
 * @param {{}} init `NodeInit` dictionary
 */
export function picture(init) { return htmldom('picture', init) }

/**
 * [The `pre` element](https://html.spec.whatwg.org/#the-pre-element)
 * represents a block of preformatted text, in which structure is represented
 * by typographic conventions rather than by elements.
 *
 * Implements `HTMLPreElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-pre-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535883.aspx)
 *
 * @function pre
 * @param {{}} init `NodeInit` dictionary
 */
export function pre(init) { return htmldom('pre', init) }

/**
 * [The `progress` element](https://html.spec.whatwg.org/#the-progress-element)
 * represents the completion progress of a task. The progress is either indeterminate,
 * indicating that progress is being made but that it is not clear
 * how much more work remains to be done before the task is complete
 * (e.g. because the task is waiting for a remote host to respond),
 * or the progress is a number in the range zero to a maximum,
 * giving the fraction of work that has so far been completed.
 *
 * Implements `HTMLProgressElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-progress-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/hh772953.aspx)
 *
 * @function progress
 * @param {{}} init `NodeInit` dictionary
 * @param {Number} init.value Current value of the element
 * @param {Number} init.max Upper bound of range
 */
export function progress(init) { return htmldom('progress', init) }

/**
 * [The `q` element](https://html.spec.whatwg.org/#the-q-element)
 * represents some phrasing content quoted from another source.
 *
 * Uses `HTMLQuoteElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-q-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535884.aspx)
 *
 * @function q
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.cite Link to the source of the quotation or more information about the edit
 */
export function q(init) { return htmldom('q', init) }

/**
 * [The `rp` element](https://html.spec.whatwg.org/#the-rp-element)
 * can be used to provide parentheses or other content
 * around a ruby text component of a ruby annotation,
 * to be shown by user agents that don't support ruby annotations.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-rp-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)
 *
 * @function rp
 * @param {{}} init `NodeInit` dictionary
 */
export function rp(init) { return htmldom('rp', init) }

/**
 * [The `rt` element](https://html.spec.whatwg.org/#the-rt-element)
 * marks the ruby text component of a ruby annotation.
 * When it is the child of a ruby element, it doesn't represent anything itself,
 * but the ruby element uses it as part of determining what it represents.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-rt-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535885.aspx)
 *
 * @function rt
 * @param {{}} init `NodeInit` dictionary
 */
export function rt(init) { return htmldom('rt', init) }

/**
 * [The `ruby` element](https://html.spec.whatwg.org/#the-ruby-element)
 * allows one or more spans of phrasing content to be marked with ruby annotations.
 * Ruby annotations are short runs of text presented alongside base text,
 * primarily used in East Asian typography as a guide for pronunciation
 * or to include other annotations.
 * In Japanese, this form of typography is also known as furigana.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ruby-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535886.aspx)
 *
 * @function ruby
 * @param {{}} init `NodeInit` dictionary
 */
export function ruby(init) { return htmldom('ruby', init) }

/**
 * [The `s` element](https://html.spec.whatwg.org/#the-s-element)
 * represents contents that are no longer accurate or no longer relevant.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-s-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535890.aspx)
 *
 * @function s
 * @param {{}} init `NodeInit` dictionary
 */
export function s(init) { return htmldom('s', init) }

/**
 * [The `samp` element](https://html.spec.whatwg.org/#the-samp-element)
 * represents sample or quoted output from another program or computing system.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-samp-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535891.aspx)
 *
 * @function samp
 * @param {{}} init `NodeInit` dictionary
 */
export function samp(init) { return htmldom('samp', init) }

/**
 * [The `script` element](https://html.spec.whatwg.org/#the-script-element)
 * allows authors to include dynamic script and data blocks in their documents.
 * The element does not represent content for the user.
 *
 * Implements `HTMLScriptElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-script-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535892.aspx)
 *
 * @function script
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.src Address of the resource
 * @param {String} init.type Type of embedded resource
 * @param {String} init.charset Character encoding of the external script resource
 * @param {String} init.async Execute script when available, without blocking
 * @param {String} init.defer Defer script execution
 * @param {String} init.crossOrigin How the element handles crossorigin requests
 * @param {String} init.nonce Cryptographic nonce used in Content Security Policy checks [CSP]
 */
export function script(init) { return htmldom('script', init) }

/**
 * [The `section` element](https://html.spec.whatwg.org/#the-section-element)
 * represents a generic section of a document or application.
 * A section, in this context, is a thematic grouping of content,
 * typically with a heading.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-section-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593059.aspx)
 *
 * @function section
 * @param {{}} init `NodeInit` dictionary
 */
export function section(init) { return htmldom('section', init) }

/**
 * [The `select` element](https://html.spec.whatwg.org/#the-select-element)
 * represents a control for selecting amongst a set of options.
 *
 * Implements `HTMLSelectElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-select-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535893.aspx)
 *
 * @function select
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.autocomplete Hint for form autofill feature
 * @param {Boolean} init.autofocus Automatically focus the form control when the page is loaded
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
 * @param {Boolean} init.multiple Whether to allow multiple values
 * @param {String} init.name Name of form control to use for form submission and in the form.elements API
 * @param {Boolean} init.required Whether the control is required for form submission
 * @param {Number} init.size Size of the control
 */
export function select(init) { return htmldom('select', init) }

/**
 * [The `slot` element](https://html.spec.whatwg.org/#the-slot-element)
 * defines a slot. It is typically used in a shadow tree.
 * A slot element represents its assigned nodes, if any, and its contents otherwise.
 *
 * Implements `HTMLSlotElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-slot-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
 *
 * @function slot
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.name Name of shadow tree slot
 */
export function slot(init) { return htmldom('slot', init) }

/**
 * [The `small` element](https://html.spec.whatwg.org/#the-small-element)
 * represents side comments such as small print.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-small-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535894.aspx)
 *
 * @function small
 * @param {{}} init `NodeInit` dictionary
 */
export function small(init) { return htmldom('small', init) }

/**
 * [The `source` element](https://html.spec.whatwg.org/#the-source-element)
 * allows authors to specify multiple alternative source sets for img elements
 * or multiple alternative media resources for media elements.
 * It does not represent anything on its own.
 *
 * Implements `HTMLSourceElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-source-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ff975070.aspx)
 *
 * @function source
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.src Address of the resource
 * @param {String} init.type Type of embedded resource
 * @param {String} init.srcset Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
 * @param {String} init.sizes Image sizes for different page layouts
 * @param {String} init.media Applicable media
 */
export function source(init) { return htmldom('source', init) }

/**
 * [The `span` element](https://html.spec.whatwg.org/#the-span-element)
 * doesn't mean anything on its own,
 * but can be useful when used together with the global attributes,
 * e.g. class, lang, or dir. It represents its children.
 *
 * Implements `HTMLSpanElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-span-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535895.aspx)
 *
 * @function span
 * @param {{}} init `NodeInit` dictionary
 */
export function span(init) { return htmldom('span', init) }

/**
 * [The `strong` element](https://html.spec.whatwg.org/#the-strong-element)
 * represents strong importance, seriousness, or urgency for its contents.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-strong-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535897.aspx)
 *
 * @function strong
 * @param {{}} init `NodeInit` dictionary
 */
export function strong(init) { return htmldom('strong', init) }

/**
 * [The `style` element](https://html.spec.whatwg.org/#the-style-element)
 * allows authors to embed style information in their documents.
 * The style element is one of several inputs to the styling processing model.
 * The element does not represent content for the user.
 *
 * Implements `HTMLStyleElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-style-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535898.aspx)
 *
 * @function style
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.media Applicable media
 * @param {String} init.nonce Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
 * @param {String} init.type Type of embedded resource
 * @param {String} init.title Special semantics: CSS style sheet set name.
 */
export function style(init) { return htmldom('style', init) }

/**
 * [The `sub` element](https://html.spec.whatwg.org/#the-sub-element)
 * represents a subscript.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-sub-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535899.aspx)
 *
 * @function sub
 * @param {{}} init `NodeInit` dictionary
 */
export function sub(init) { return htmldom('sub', init) }

/**
 * [The `summary` element](https://html.spec.whatwg.org/#the-summary-element)
 *  represents a summary, caption, or legend for the rest of the contents
 *  of the summary element's parent details element, if any.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-summary-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
 *
 * @function summary
 * @param {{}} init `NodeInit` dictionary
 */
export function summary(init) { return htmldom('summary', init) }

/**
 * [The `sup` element](https://html.spec.whatwg.org/#the-sup-element)
 * represents a superscript
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-sup-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535900.aspx)
 *
 * @function sup
 * @param {{}} init `NodeInit` dictionary
 */
export function sup(init) { return htmldom('sup', init) }

/**
 * [The `table` element](https://html.spec.whatwg.org/#the-table-element)
 * represents data with more than one dimension, in the form of a table.
 *
 * Implements `HTMLTableElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-table-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535901.aspx)
 *
 * @function table
 * @param {{}} init `NodeInit` dictionary
 */
export function table(init) { return htmldom('table', init) }

/**
 * [The `tbody` element](https://html.spec.whatwg.org/#the-tbody-element)
 * represents a block of rows that consist of a body of data for the parent table element,
 * if the tbody element has a parent and it is a table.
 *
 * Implements `HTMLTableSectionElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-tbody-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535902.aspx)
 *
 * @function tbody
 * @param {{}} init `NodeInit` dictionary
 */
export function tbody(init) { return htmldom('tbody', init) }

/**
 * [The `td` element](https://html.spec.whatwg.org/#the-td-element)
 * represents a data cell in a table.
 *
 * Implements `HTMLTableCellElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-td-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535903.aspx)
 *
 * @function td
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.colSpan Number of columns that the cell is to span
 * @param {String} init.rowSpan Number of rows that the cell is to span
 * @param {String} init.headers The header cells for this cell
 */
export function td(init) { return htmldom('td', init) }

/**
 * [The `template` element](https://html.spec.whatwg.org/#the-template-element)
 * is used to declare fragments of HTML that can be cloned and inserted in the document by script.
 *
 * Implements `HTMLTemplateElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-template-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt586693.aspx)
 *
 * @function template
 * @param {{}} init `NodeInit` dictionary
 */
export function template(init) { return htmldom('template', init) }

/**
 * [The `textarea` element](https://html.spec.whatwg.org/#the-textarea-element)
 * represents a multiline plain text edit control for the element's raw value.
 * The contents of the control represent the control's default value.
 *
 * Implements `HTMLTextAreaElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-textarea-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535904.aspx)
 *
 * @function textarea
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.autocomplete Hint for form autofill feature
 * @param {String} init.autofocus Automatically focus the form control when the page is loaded
 * @param {String} init.cols Maximum number of characters per line
 * @param {String} init.dirName Name of form control to use for sending the element's directionality in form submission
 * @param {String} init.disabled Whether the form control is disabled
 * @param {String} init.form Associates the control with a form element
 * @param {String} init.inputMode Hint for selecting an input modality
 * @param {String} init.maxLength Maximum length of value
 * @param {String} init.minLength Minimum length of value
 * @param {String} init.name Name of form control to use for form submission and in the form.elements API
 * @param {String} init.placeholder User-visible label to be placed within the form control
 * @param {String} init.readOnly Whether to allow the value to be edited by the user
 * @param {String} init.required Whether the control is required for form submission
 * @param {String} init.rows Number of lines to show
 * @param {String} init.wrap How the value of the form control is to be wrapped for form submission
 */
export function textarea(init) { return htmldom('textarea', init) }

/**
 * [The `tfoot` element](https://html.spec.whatwg.org/#the-tfoot-element)
 *  represents the block of rows that consist of the column summaries (footers)
 *  for the parent table element, if the tfoot element has a parent and it is a table.
 *
 * Uses `HTMLTableSectionElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-tfoot-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535907.aspx)
 *
 * @function tfoot
 * @param {{}} init `NodeInit` dictionary
 */
export function tfoot(init) { return htmldom('tfoot', init) }

/**
 * [The `th` element](https://html.spec.whatwg.org/#the-th-element)
 * represents a header cell in a table.
 *
 * Uses `HTMLTableCellElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-th-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535908.aspx)
 *
 * @function th
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.colSpan Number of columns that the cell is to span
 * @param {String} init.rowSpan Number of rows that the cell is to span
 * @param {String} init.headers The header cells for this cell
 * @param {String} init.scope Specifies which cells the header cell applies to
 * @param {String} init.abbr Alternative label to use for the header cell when referencing the cell in other contexts
 */
export function th(init) { return htmldom('th', init) }

/**
 * [The `thead` element](https://html.spec.whatwg.org/#the-thead-element)
 * represents the block of rows that consist of the column labels (headers)
 * for the parent table element, if the thead element has a parent and it is a table.
 *
 * Uses `HTMLTableSectionElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-thead-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535909.aspx)
 *
 * @function thead
 * @param {{}} init `NodeInit` dictionary
 */
export function thead(init) { return htmldom('thead', init) }

/**
 * [The `time` element](https://html.spec.whatwg.org/#the-time-element)
 * represents its contents,
 * along with a machine-readable form of those contents in the datetime attribute.
 * The kind of content is limited to various kinds of dates,
 * times, time-zone offsets, and durations, as described below.
 *
 * Implements `HTMLTimeElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-time-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt706248.aspx)
 *
 * @function time
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.datetime Machine-readable value
 */
export function time(init) { return htmldom('time', init) }

/**
 * [The `title` element](https://html.spec.whatwg.org/#the-title-element)
 * represents the document's title or name.
 * Authors should use titles that identify their documents
 * even when they are used out of context,
 * for example in a user's history or bookmarks, or in search results.
 * The document's title is often different from its first heading,
 * since the first heading does not have to stand alone when taken out of context.
 *
 * Implements `HTMLTitleElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-title-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535910.aspx)
 *
 * @function title
 * @param {{}} init `NodeInit` dictionary
 */
export function title(init) { return htmldom('title', init) }

/**
 * [The `tr` element](https://html.spec.whatwg.org/#the-tr-element)
 * represents a row of cells in a table.
 *
 * Implements `HTMLTableRowElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-tr-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535911.aspx)
 *
 * @function tr
 * @param {{}} init `NodeInit` dictionary
 */
export function tr(init) { return htmldom('tr', init) }

/**
 * [The `track` element](https://html.spec.whatwg.org/#the-track-element)
 * allows authors to specify explicit external timed text tracks for media elements.
 * It does not represent anything on its own.
 *
 * Implements `HTMLTrackElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-track-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/hh772958.aspx)
 *
 * @function track
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.kind The type of text track
 * @param {String} init.src Address of the resource
 * @param {String} init.srclang Language of the text track
 * @param {String} init.label User-visible label
 * @param {Boolean} init.default Enable the track if no other text track is more suitable
 */
export function track(init) { return htmldom('track', init) }

/**
 * [The `u` element](https://html.spec.whatwg.org/#the-u-element)
 * represents a span of text with an unarticulated,
 * though explicitly rendered, non-textual annotation,
 * such as labeling the text as being a proper name in Chinese text
 * (a Chinese proper name mark), or labeling the text as being misspelt.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-u-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535913.aspx)
 *
 * @function u
 * @param {{}} init `NodeInit` dictionary
 */
export function u(init) { return htmldom('u', init) }

/**
 * [The `ul` element](https://html.spec.whatwg.org/#the-ul-element)
 * represents a list of items, where the order of the items is not important — that is,
 * where changing the order would not materially change the meaning of the document.
 *
 * Implements `HTMLUListElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ul-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535914.aspx)
 *
 * @function ul
 * @param {{}} init `NodeInit` dictionary
 */
export function ul(init) { return htmldom('ul', init) }

/**
 * [the `var` element](https://html.spec.whatwg.org/#the-var-element)
 * represents a variable.
 * This could be an actual variable in a mathematical expression or programming context,
 * an identifier representing a constant, a symbol identifying a physical quantity,
 * a function parameter, or just be a term used as a placeholder in prose.
 *
 * **`var` is reserved JS keyword so use `variable` instead**
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-var-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535916.aspx)
 *
 * @function variable
 * @param {{}} init `NodeInit` dictionary
 */
export function variable(init) { return htmldom('variable', init) }

/**
 * [The `video` element](https://html.spec.whatwg.org/#the-video-element)
 * is used for playing videos or movies, and audio files with captions.
 *
 * Implements `HTMLVideoElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-video-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/hh772959.aspx)
 *
 * @function video
 * @param {{}} init `NodeInit` dictionary
 * @param {String} init.src Address of the resource
 * @param {String} init.crossOrigin How the element handles crossorigin requests
 * @param {String} init.poster Poster frame to show prior to video playback
 * @param {String} init.preload Hints how much buffering the media resource will likely need
 * @param {Boolean} init.autoplay Hint that the media resource can be started automatically when the page is loaded
 * @param {Boolean} init.playsInline Encourage the user agent to display video content within the element's playback area
 * @param {Boolean} init.loop Whether to loop the media resource
 * @param {Number} init.muted Whether to mute the media resource by default
 * @param {Boolean} init.controls Show user agent controls
 * @param {Number} init.width Horizontal dimension
 * @param {Number} init.height Vertical dimension
 */
export function video(init) { return htmldom('video', init) }

/**
 * [The `wbr` element](https://html.spec.whatwg.org/#the-wbr-element)
 * represents a line break opportunity.
 *
 * Uses `HTMLElement` interface
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-wbr-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)
 *
 * @function wbr
 * @param {{}} init `NodeInit` dictionary
 */
export function wbr(init) { return htmldom('wbr', init) }
