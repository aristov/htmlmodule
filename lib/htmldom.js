import { HTMLAssembler } from './htmlassembler';

const assembler = new HTMLAssembler;

/**
 * Creates and initializes the specified element
 *
 * @param {String} tagName element tag name
 * 
 * @param {*} init object
 */
export const htmldom = (tagName, init) => assembler.createElement(tagName, init);

/**
 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
 *  - If the `a` element has an `href` attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
 *  - If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.
 *
 * Implements `HTMLAnchorElement` interface
 * @function a
 * @param {String} init.href Address of the hyperlink
 * @param {String} init.target Browsing context for hyperlink navigation
 * @param {String} init.download Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} init.ping URLs to ping
 * @param {String} init.rel Relationship between the location in the document containing the hyperlink and the destination resource
 * @param {String} init.hreflang Language of the linked resource
 * @param {String} init.type Hint for the type of the referenced resource
 * @param {String} init.referrerpolicy Determines the referrer policy for fetches initiated by the element
 * @param {{}} init `NodeInit` dictionary
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
 * @param {String} init.title special semantics: full term or expansion of abbreviation
 * @param {{}} init `NodeInit` dictionary
 */
export const abbr = init => htmldom('abbr', init);

/**
 * [The `address` element](https://html.spec.whatwg.org/#the-address-element)
 * represents the contact information for its nearest `article` or `body` element ancestor.
 * If that is the `body` element, then the contact information applies to the document as a whole.
 *
 * Uses `HTMLElement` interface
 * @function address
 * @param {{}} init `NodeInit` dictionary
 */
export const address = init => htmldom('address', init);

/**
 * [The `area` element](https://html.spec.whatwg.org/#the-area-element)
 * represents either a hyperlink with some text and a corresponding area on an image map,
 * or a dead area on an image map.
 *
 * Implements `HTMLAreaElement` interface
 * @function area
 * @param {String} init.alt Replacement text for use when images are not available
 * @param {String} init.coords Coordinates for the shape to be created in an image map
 * @param {String} init.shape The kind of shape to be created in an image map
 * @param {String} init.href Address of the hyperlink
 * @param {String} init.target Browsing context for hyperlink navigation
 * @param {String} init.download Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} init.ping URLs to ping
 * @param {String} init.rel Relationship between the location in the document containing the hyperlink and the destination resource
 * @param {{}} init `NodeInit` dictionary
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
 * @param {{}} init `NodeInit` dictionary
 */
export const article = init => htmldom('article', init);

/**
 * [The `aside` element](https://html.spec.whatwg.org/#the-aside-element)
 * represents a section of a page that consists of content that is tangentially related to the content around the aside element,
 * and which could be considered separate from that content.
 * Such sections are often represented as sidebars in printed typography.
 *
 * Uses `HTMLElement` interface
 * @function aside
 * @param {{}} init `NodeInit` dictionary
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
 * Implements `HTMLAudioElement` interface
 * @function audio
 * @param {String} init.src Address of the resource
 * @param {String} init.crossorigin How the element handles crossorigin requests
 * @param {String} init.preload Hints how much buffering the media resource will likely need
 * @param {Boolean} init.autoplay Hint that the media resource can be started automatically when the page is loaded
 * @param {Boolean} init.loop Whether to loop the media resource
 * @param {Boolean} init.muted Whether to mute the media resource by default
 * @param {Boolean} init.controls Show user agent controls
 * @param {{}} init `NodeInit` dictionary
 */
export const audio = init => htmldom('audio', init);

/**
 * [The `b` element](https://html.spec.whatwg.org/#the-b-element)
 * represents a span of text to which attention is being drawn
 * for utilitarian purposes without conveying any extra importance
 * and with no implication of an alternate voice or mood,
 * such as key words in a document abstract, product names in a review,
 * actionable words in interactive text-driven software, or an article lede.
 *
 * Uses `HTMLElement` interface
 * @function b
 * @param {{}} init `NodeInit` dictionary
 */
export const b = init => htmldom('b', init);

/**
 * [The `bdi` element](https://html.spec.whatwg.org/#the-bdi-element)
 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
 *
 * Uses `HTMLElement` interface
 * @function bdi
 * @param {String} init.dir special semantics
 * @param {{}} init `NodeInit` dictionary
 */
export const base = init => htmldom('base', init);

/**
 * [The `bdi` element](https://html.spec.whatwg.org/#the-bdi-element)
 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
 *
 * Uses `HTMLElement` interface
 * @function bdi
 * @param {String} init.dir special semantics
 * @param {{}} init `NodeInit` dictionary
 */
export const bdi = init => htmldom('bdi', init);

/**
 * [The `bdo` element](https://html.spec.whatwg.org/#the-bdo-element)
 * represents explicit text directionality formatting control for its children.
 * It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.
 *
 * Uses `HTMLElement` interface
 * @function bdo
 * @param {String} init.dir special semantics: `rtl` or `ltr` values allowed only
 * @param {{}} init `NodeInit` dictionary
 */
export const bdo = init => htmldom('bdo', init);

/**
 * [The `blockquote` element](https://html.spec.whatwg.org/#the-blockquote-element)
 * represents a section that is quoted from another source.
 * Content inside a blockquote must be quoted from another source,
 * whose address, if it has one, may be cited in the cite attribute.
 *
 * Implements `HTMLQuoteElement` interface
 * @function blockquote
 * @param {String} init.cite Link to the source of the quotation or more information about the edit
 * @param {{}} init `NodeInit` dictionary
 */
export const blockquote = init => htmldom('blockquote', init);

/**
 * [The `body` element](https://html.spec.whatwg.org/#the-body-element)
 * represents the main content of the document.
 *
 * Implements `HTMLBodyElement` interface
 * @function body
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
 * @param {{}} init `NodeInit` dictionary
 */
export const body = init => htmldom('body', init);

/**
 * [The `br` element](https://html.spec.whatwg.org/#the-br-element)
 * represents a line break.
 *
 * Implements `HTMLBRElement` interface
 * @function br
 * @param {{}} init `NodeInit` dictionary
 */
export const br = init => htmldom('br', init);

/**
 * [The `button` element](https://html.spec.whatwg.org/#the-button-element)
 * represents a button labeled by its contents.
 *
 * - [w3](https://www.w3.org/TR/html/single-page.html#the-button-element)
 * - [mdn](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
 * - [msdn](https://msdn.microsoft.com/en-us/library/ms535211(v=vs.85).aspx)
 *
 * Implements `HTMLButtonElement` interface
 * @function button
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
 * @param {{}} init `NodeInit` dictionary
 */
export const button = init => htmldom('button', init);

/**
 * [The `canvas` element](https://html.spec.whatwg.org/#the-canvas-element)
 * provides scripts with a resolution-dependent bitmap canvas,
 * which can be used for rendering graphs, game graphics, art,
 * or other visual images on the fly.
 *
 * Implements `HTMLCanvasElement` interface
 * @function canvas
 * @param {Number} init.width Horizontal dimension
 * @param {Number} init.height Vertical dimension
 * @param {{}} init `NodeInit` dictionary
 */
export const canvas = init => htmldom('canvas', init);

/**
 * [The `caption` element](https://html.spec.whatwg.org/#the-caption-element)
 * represents the title of the table that is its parent,
 * if it has a parent and that is a table element.
 *
 * Implements `HTMLTableCaptionElement` interface
 * @function caption
 * @param {{}} init `NodeInit` dictionary
 */
export const caption = init => htmldom('caption', init);

/**
 * [The `cite` element](https://html.spec.whatwg.org/#the-cite-element)
 * represents the title of a work (e.g. a book, a paper, an essay, a poem,
 * a score, a song, a script, a film, a TV show, a game, a sculpture, a painting,
 * a theatre production, a play, an opera, a musical, an exhibition, a legal case report,
 * a computer program, etc). This can be a work that is being quoted or referenced in detail
 * (i.e. a citation), or it can just be a work that is mentioned in passing.
 *
 * Uses `HTMLElement` interface
 * @function cite
 * @param {{}} init `NodeInit` dictionary
 */
export const cite = init => htmldom('cite', init);

/**
 * [The `code` element](https://html.spec.whatwg.org/#the-code-element)
 * represents a fragment of computer code. This could be an XML element name,
 * a file name, a computer program, or any other string that a computer would recognize.
 *
 * Uses `HTMLElement` interface
 * @function code
 * @param {{}} init `NodeInit` dictionary
 */
export const code = init => htmldom('code', init);

/**
 * [The `col` element](https://html.spec.whatwg.org/#the-col-element)
 * represents has a parent and that is a colgroup element that itself has a parent
 * that is a table element, then the col element represents one or more columns
 * in the column group represented by that colgroup.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-col-element)
 * - [MDN article](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535225(v=vs.85).aspx)
 *
 * Implements `HTMLTableColElement` interface
 * @function col
 * @param {Number} init.span Number of columns spanned by the element
 * @param {{}} init `NodeInit` dictionary
 */
export const col = init => htmldom('col', init);

/**
 * [The `colgroup` element](https://html.spec.whatwg.org/#the-colgroup-element)
 * represents represents a group of one or more columns in the table that is its parent,
 * if it has a parent and that is a table element.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-colgroup-element)
 * - [MDN article](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535225(v=vs.85).aspx)
 *
 * Implements `HTMLTableColElement` interface
 * @function colgroup
 * @param {Number} init.span Number of columns spanned by the element
 * @param {{}} init `NodeInit` dictionary
 */
export const colgroup = init => htmldom('colgroup', init);

/**
 * [The `data` element](https://html.spec.whatwg.org/#the-data-element)
 * represents its contents, along with a machine-readable form
 * of those contents in the value attribute.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-data-element)
 * - [MDN article](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/mt706246(v=vs.85).aspx)
 *
 * Implements `HTMLDataElement` interface
 * @function data
 * @param {String} init.value Machine-readable value
 * @param {{}} init `NodeInit` dictionary
 */
export const data = init => htmldom('data', init);

/**
 * [The `datalist` element](https://html.spec.whatwg.org/#the-datalist-element)
 * represents a set of option elements that represent predefined options for other controls.
 * In the rendering, the datalist element represents nothing and it, along with its children,
 * should be hidden.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
 * - [MDN article](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/hh772925(v=vs.85).aspx)
 *
 * Implements `HTMLDataListElement` interface
 * @function datalist
 * @param {{}} init `NodeInit` dictionary
 */
export const datalist = init => htmldom('datalist', init);

/**
 * [The `dd` element](https://html.spec.whatwg.org/#the-dd-element)
 * represents the description, definition, or value,
 * part of a term-description group in a description list (dl element).
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535234(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function dd
 * @param {{}} init `NodeInit` dictionary
 */
export const dd = init => htmldom('dd', init);

/**
 * [The `del` element](https://html.spec.whatwg.org/#the-del-element)
 * represents a removal from the document.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-del-element)
 * - [MDN api reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535236(v=vs.85).aspx)
 *
 * Uses `HTMLModElement` interface
 * @function del
 * @param {String} init.cite Link to the source of the quotation or more information about the edit
 * @param {String} init.dateTime Date and (optionally) time of the change
 * @param {{}} init `NodeInit` dictionary
 */
export const del = init => htmldom('del', init);

/**
 * [The `details` element](https://html.spec.whatwg.org/#the-details-element)
 * represents a disclosure widget from which the user can obtain additional information or controls.
 *
 * - [W3 specification](https://www.w3.org/TR/html/interactive-elements.html#the-details-element)
 * - [MDN elemeent reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
 *
 * Implements `HTMLDetailsElement` interface
 * @function details
 * @param {String} init.open Whether the details are visible
 * @param {{}} init `NodeInit` dictionary
 */
export const details = init => htmldom('details', init);

/**
 * [The `dfn` element](https://html.spec.whatwg.org/#the-dfn-element)
 * represents the defining instance of a term. The paragraph, description list group,
 * or section that is the nearest ancestor of the dfn element must also contain
 * the definition(s) for the term given by the dfn element.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-dfn-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535237(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function dfn
 * @param {String} init.title Special semantics: Full term or expansion of abbreviation
 * @param {{}} init `NodeInit` dictionary
 */
export const dfn = init => htmldom('dfn', init);

/**
 * [The `dialog` element](https://html.spec.whatwg.org/#the-dialog-element)
 * represents a part of an application that a user interacts with to perform a task,
 * for example a dialog box, inspector, or window.
 *
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
 *
 * Implements `HTMLDialogElement` interface
 * @function dialog
 * @param {String} init.open Whether the dialog box is showing
 * @param {{}} init `NodeInit` dictionary
 */
export const dialog = init => htmldom('dialog', init);

/**
 * [The `div` element](https://html.spec.whatwg.org/#the-div-element)
 * has no special meaning at all. It represents its children.
 * It can be used with the class, lang, and title attributes to mark up semantics
 * common to a group of consecutive elements.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-div-element)
 * - [MDN api reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535240(v=vs.85).aspx)
 *
 * Implements `HTMLDivElement` interface
 * @function div
 * @param {{}} init `NodeInit` dictionary
 */
export const div = init => htmldom('div', init);

/**
 * [The `dl` element](https://html.spec.whatwg.org/#the-dl-element)
 * represents an association list consisting of zero or more name-value groups (a description list).
 * A name-value group consists of one or more names (dt elements) followed by one or more values
 * (dd elements), ignoring any nodes other than dt and dd elements.
 * Within a single dl element, there should not be more than one dt element for each name.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-dl-element)
 * - [MDN api reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535241(v=vs.85).aspx)
 *
 * Implements `HTMLDListElement` interface
 * @function dl
 * @param {{}} init `NodeInit` dictionary
 */
export const dl = init => htmldom('dl', init);

/**
 * [The `dt` element](https://html.spec.whatwg.org/#the-dt-element)
 * represents the term, or name, part of a term-description group in a description list (dl element).
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-dt-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535243(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function dt
 * @param {{}} init `NodeInit` dictionary
 */
export const dt = init => htmldom('dt', init);

/**
 * [The `em` element](https://html.spec.whatwg.org/#the-em-element)
 * represents stress emphasis of its contents.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-em-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535244(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function em
 * @param {{}} init `NodeInit` dictionary
 */
export const em = init => htmldom('em', init);

/**
 * [The `embed` element](https://html.spec.whatwg.org/#the-embed-element)
 * represents provides an integration point for an external (typically non-HTML)
 * application or interactive content.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-embed-element)
 * - [MDN api reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535245(v=vs.85).aspx)
 *
 * Implements `HTMLEmbedElement` interface
 * @function embed
 * @param {String} init.src Address of the resource
 * @param {String} init.type Type of embedded resource
 * @param {String} init.width Horizontal dimension
 * @param {String} init.height Vertical dimension
 * @param {{}} init `NodeInit` dictionary
 */
export const embed = init => htmldom('embed', init);

/**
 * [The `fieldset` element](https://html.spec.whatwg.org/#the-fieldset-element)
 * represents
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-fieldset-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535247(v=vs.85).aspx)
 *
 * Implements `HTMLFieldSetElement` interface
 * @function fieldset
 * @param {String} init.disabled Whether the form control is disabled
 * @param {String} init.form Associates the control with a form element
 * @param {String} init.name Name of form control to use in the form.elements API
 * @param {{}} init `NodeInit` dictionary
 */
export const fieldset = init => htmldom('fieldset', init);

/**
 * [The `figcaption` element](https://html.spec.whatwg.org/#the-figcaption-element)
 * represents a caption or legend for the rest of the contents
 * of the figcaption element's parent figure element, if any.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-figcaption-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/gg593037(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function figcaption
 * @param {{}} init `NodeInit` dictionary
 */
export const figcaption = init => htmldom('figcaption', init);

/**
 * [The `figure` element](https://html.spec.whatwg.org/#the-figure-element)
 * represents some flow content, optionally with a caption,
 * that is self-contained (like a complete sentence) and is typically referenced
 * as a single unit from the main flow of the document.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-figure-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/*.aspx)
 *
 * Uses `HTMLElement` interface
 * @function figure
 * @param {{}} init `NodeInit` dictionary
 */
export const figure = init => htmldom('figure', init);

/**
 * [The `footer` element](https://html.spec.whatwg.org/#the-footer-element)
 * represents a footer for its nearest ancestor sectioning content or sectioning root element.
 * A footer typically contains information about its section such as who wrote it,
 * links to related documents, copyright data, and the like.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-footer-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/gg593039(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function footer
 * @param {{}} init `NodeInit` dictionary
 */
export const footer = init => htmldom('footer', init);

/**
 * [The `form` element](https://html.spec.whatwg.org/#the-form-element)
 * represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-form-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535249(v=vs.85).aspx)
 *
 * Implements `HTMLFormElement` interface
 * @function form
 * @param {String} init.acceptCharset Character encodings to use for form submission
 * @param {String} init.action URL to use for form submission
 * @param {String} init.autocomplete Default setting for autofill feature for controls in the form
 * @param {String} init.enctype Form data set encoding type to use for form submission
 * @param {String} init.method HTTP method to use for form submission
 * @param {String} init.name Name of form to use in the document.forms API
 * @param {Boolean} init.noValidate Bypass form control validation for form submission
 * @param {String} init.target Browsing context for form submission
 * @param {{}} init `NodeInit` dictionary
 */
export const form = init => htmldom('form', init);

/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-h1-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535253(v=vs.85).aspx)
 *
 * Implements `HTMLHeadingElement` interface
 * @function h1
 * @param {{}} init `NodeInit` dictionary
 */
export const h1 = init => htmldom('h1', init);
/**
 * See [h1](#h1)
 * @function h2
 * @param {{}} init `NodeInit` dictionary
 */
export const h2 = init => htmldom('h2', init);
/**
 * See [h1](#h1)
 * @function h3
 * @param {{}} init `NodeInit` dictionary
 */
export const h3 = init => htmldom('h3', init);
/**
 * See [h1](#h1)
 * @function h4
 * @param {{}} init `NodeInit` dictionary
 */
export const h4 = init => htmldom('h4', init);
/**
 * See [h1](#h1)
 * @function h5
 * @param {{}} init `NodeInit` dictionary
 */
export const h5 = init => htmldom('h5', init);
/**
 * See [h1](#h1)
 * @function h6
 * @param {{}} init `NodeInit` dictionary
 */
export const h6 = init => htmldom('h6', init);

/**
 * [The `head` element](https://html.spec.whatwg.org/#the-head-element)
 * represents a collection of metadata for the Document.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-head-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/HTMLHeadElement)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535252(v=vs.85).aspx)
 *
 * Implements `HTMLHeadElement` interface
 * @function head
 * @param {{}} init `NodeInit` dictionary
 */
export const head = init => htmldom('head', init);

/**
 * [The `header` element](https://html.spec.whatwg.org/#the-header-element)
 * represents a group of introductory or navigational aids.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-header-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/gg593044(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function header
 * @param {{}} init `NodeInit` dictionary
 */
export const header = init => htmldom('header', init);

/**
 * [The `hgroup` element](https://html.spec.whatwg.org/#the-hgroup-element)
 * represents the heading of a section, which consists
 * of all the h1–h6 element children of the hgroup element.
 * The element is used to group a set of h1–h6 elements when the heading has multiple levels,
 * such as subheadings, alternative titles, or taglines.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-hgroup-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/gg593045(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function hgroup
 * @param {{}} init `NodeInit` dictionary
 */
export const hgroup = init => htmldom('hgroup', init);

/**
 * [The `hr` element](https://html.spec.whatwg.org/#the-hr-element)
 * represents a paragraph-level thematic break, e.g. a scene change in a story,
 * or a transition to another topic within a section of a reference book.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-hr-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535254(v=vs.85).aspx)
 *
 * Implements `HTMLHRElement` interface
 * @function hr
 * @param {{}} init `NodeInit` dictionary
 */
export const hr = init => htmldom('hr', init);

/**
 * [The `html` element](https://html.spec.whatwg.org/#the-html-element)
 * represents the root of an HTML document.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-html-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535255(v=vs.85).aspx)
 *
 * Implements `HTMLHtmlElement` interface
 * @function html
 * @param {String} init.manifest [Application cache manifest](https://html.spec.whatwg.org/#concept-appcache-manifest)
 * @param {{}} init `NodeInit` dictionary
 */
export const html = init => htmldom('html', init);

/**
 * [The `i` element](https://html.spec.whatwg.org/#the-i-element)
 * represents a span of text in an alternate voice or mood,
 * or otherwise offset from the normal prose in a manner indicating a different quality of text,
 * such as a taxonomic designation, a technical term, an idiomatic phrase from another language,
 * transliteration, a thought, or a ship name in Western texts.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-i-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535257(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function i
 * @param {{}} init `NodeInit` dictionary
 */
export const i = init => htmldom('i', init);

/**
 * [The `iframe` element](https://html.spec.whatwg.org/#the-iframe-element)
 * represents a [nested browsing context](https://html.spec.whatwg.org/#nested-browsing-context).
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-iframe-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535258(v=vs.85).aspx)
 *
 * Implements `HTMLIFrameElement` interface
 * @function iframe
 * @param {String} init.src Address of the resource
 * @param {String} init.srcdoc A document to render in the iframe
 * @param {String} init.name Name of nested browsing context
 * @param {String} init.attrset.sandbox Security rules for nested content
 * @param {String} init.allowFullScreen Whether to allow the iframe's contents to use requestFullscreen()
 * @param {String} init.allowUserMedia Whether to allow the iframe's contents to use getUserMedia()
 * @param {String} init.width Horizontal dimension
 * @param {String} init.height Vertical dimension
 * @param {String} init.referrerPolicy Determines the referrer policy for fetches initiated by the element
 * @param {{}} init `NodeInit` dictionary
 */
export const iframe = init => htmldom('iframe', init);

/**
 * [The `img` element](https://html.spec.whatwg.org/#the-img-element)
 * represents an image.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-img-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535259(v=vs.85).aspx)
 *
 * Implements `HTMLImageElement` interface
 * @function img
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
 * @param {{}} init `NodeInit` dictionary
 */
export const img = init => htmldom('img', init);

/**
 * [The `input` element](https://html.spec.whatwg.org/#the-input-element)
 * represents a typed data field, usually with a form control to allow the user to edit the data.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-input-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535260(v=vs.85).aspx)
 *
 * Implements `HTMLInputElement` interface
 * @function input
 * @param {String} init.accept Hint for expected file type in file upload controls
 * @param {String} init.alt Replacement text for use when images are not available
 * @param {String} init.autocomplete Hint for form autofill feature
 * @param {Boolean} init.autofocus Automatically focus the form control when the page is loaded
 * @param {Boolean} init.checked Whether the command or control is checked
 * @param {Boolean} init.defaultChecked
 * @param {String} init.dirName Name of form control to use for sending the element's directionality in form submission
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
 * @param {String} init.formAction URL to use for form submission
 * @param {String} init.formEnctype Form data set encoding type to use for form submission
 * @param {String} init.formMethod HTTP method to use for form submission
 * @param {Boolean} init.formNoValidate Bypass form control validation for form submission
 * @param {String} init.formTarget Browsing context for form submission
 * @param {Number} init.height Vertical dimension
 * @param {Boolean} init.indeterminate
 * @param {String} init.inputMode Hint for selecting an input modality
 * @param {String} init.attrset.list List of autocomplete options
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
 * @param {{}} init `NodeInit` dictionary
 */
export const input = init => htmldom('input', init);

/**
 * [The `ins` element](https://html.spec.whatwg.org/#the-ins-element)
 * represents
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ins-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535842(v=vs.85).aspx)
 *
 * Uses `HTMLModElement` interface
 * @function ins
 * @param {String} init.cite Link to the source of the quotation or more information about the edit
 * @param {String} init.dateTime Date and (optionally) time of the change
 * @param {{}} init `NodeInit` dictionary
 */
export const ins = init => htmldom('ins', init);

/**
 * [The `kbd` element](https://html.spec.whatwg.org/#the-kbd-element)
 * represents user input (typically keyboard input,
 * although it may also be used to represent other input, such as voice commands).
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-kbd-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/*.aspx)
 *
 * Uses `HTMLElement` interface
 * @function kbd
 * @param {{}} init `NodeInit` dictionary
 */
export const kbd = init => htmldom('kbd', init);

/**
 * [The `label` element](https://html.spec.whatwg.org/#the-label-element)
 * represents a caption in a user interface.
 * The caption can be associated with a specific form control,
 * known as the label element's labeled control, either using the for attribute,
 * or by putting the form control inside the label element itself.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-label-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535845(v=vs.85).aspx)
 *
 * Implements `HTMLLabelElement` interface
 * @function label
 * @param {String} init.for Associate the label with form control
 * @param {{}} init `NodeInit` dictionary
 */
export const label = init => htmldom('label', init);

/**
 * [The `legend` element](https://html.spec.whatwg.org/#the-legend-element)
 * represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-legend-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535846(v=vs.85).aspx)
 *
 * Implements `HTMLLegendElement` interface
 * @function legend
 * @param {{}} init `NodeInit` dictionary
 */
export const legend = init => htmldom('legend', init);

/**
 * [The `li` element](https://html.spec.whatwg.org/#the-li-element)
 * represents a list item. If its parent element is an ol, ul, or menu element,
 * then the element is an item of the parent element's list, as defined for those elements.
 * Otherwise, the list item has no defined list-related relationship to any other li element.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-li-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535847(v=vs.85).aspx)
 *
 * Implements `HTMLLIElement` interface
 * @function li
 * @param {Number} init.value Ordinal value of the list item (if the element is not a child of an ul or menu element)
 * @param {{}} init `NodeInit` dictionary
 */
export const li = init => htmldom('li', init);

/**
 * [The `link` element](https://html.spec.whatwg.org/#the-link-element)
 * allows authors to link their document to other resources.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-link-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535848(v=vs.85).aspx)
 *
 * Implements `HTMLLinkElement` interface
 * @function link
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
 * @param {{}} init `NodeInit` dictionary
 */
export const link = init => htmldom('link', init);

/**
 * [The `main` element](https://html.spec.whatwg.org/#the-main-element)
 * can be used as a container for the dominant contents of another element.
 * It represents its children.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-main-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/mt634542(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function main
 * @param {{}} init `NodeInit` dictionary
 */
export const main = init => htmldom('main', init);

/**
 * [The `map` element](https://html.spec.whatwg.org/#the-map-element),
 * in conjunction with an img element and any area element descendants, defines an image map.
 * The element represents its children.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-map-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535850(v=vs.85).aspx)
 *
 * Implements `HTMLMapElement` interface
 * @function map
 * @param {String} init.name Name of [image map](https://html.spec.whatwg.org/#image-map) to reference from the `usemap` attribute
 * @param {{}} init `NodeInit` dictionary
 */
export const map = init => htmldom('map', init);

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
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-mark-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/gg593046(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function mark
 * @param {{}} init `NodeInit` dictionary
 */
export const mark = init => htmldom('mark', init);

/**
 * [The `menu` element](https://html.spec.whatwg.org/#the-menu-element)
 * represents a list of commands.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-menu-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535852(v=vs.85).aspx)
 *
 * Implements `HTMLMenuElement` interface
 * @function menu
 * @param {String} init.type Type of menu
 * @param {String} init.label User-visible label
 * @param {{}} init `NodeInit` dictionary
 */
export const menu = init => htmldom('menu', init);

/**
 * [The `menuitem` element](https://html.spec.whatwg.org/#the-menuitem-element)
 * represents a command that the user can invoke from a popup menu
 * (either a context menu or the menu of a menu button).
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-menuitem-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuItemElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem)
 *
 * Implements `HTMLMenuItemElement` interface
 * @function menuitem
 * @param {String} init.type Type of command
 * @param {String} init.label User-visible label
 * @param {String} init.icon Icon for the command
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {Boolean} init.checked Whether the command or control is checked
 * @param {String} init.radiogroup Name of group of commands to treat as a radio button group
 * @param {Boolean} init.default Mark the command as being a default command
 * @param {String} init.title Special semantics: hint describing the command
 * @param {{}} init `NodeInit` dictionary
 */
export const menuitem = init => htmldom('menuitem', init);

/**
 * [The `meta` element](https://html.spec.whatwg.org/#the-meta-element)
 * represents various kinds of metadata that cannot be expressed using the title,
 * base, link, style, and script elements.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-meta-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535853(v=vs.85).aspx)
 *
 * Implements `HTMLMetaElement` interface
 * @function meta
 * @param {String} init.name Metadata name
 * @param {String} init.http-equiv Pragma directive
 * @param {String} init.content Value of the element
 * @param {String} init.attrset.charset Character encoding declaration
 * @param {{}} init `NodeInit` dictionary
 */
export const meta = init => htmldom('meta', init);

/**
 * [The `meter` element](https://html.spec.whatwg.org/#the-meter-element)
 * represents a scalar measurement within a known range, or a fractional value;
 * for example disk usage, the relevance of a query result,
 * or the fraction of a voting population to have selected a particular candidate.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-meter-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/mt573149(v=vs.85).aspx)
 *
 * Implements `HTMLMeterElement` interface
 * @function meter
 * @param {Number} init.value Current value of the element
 * @param {Number} init.min Lower bound of range
 * @param {Number} init.max Upper bound of range
 * @param {Number} init.low High limit of low range
 * @param {Number} init.high Low limit of high range
 * @param {Number} init.optimum Optimum value in gauge
 * @param {{}} init `NodeInit` dictionary
 */
export const meter = init => htmldom('meter', init);

/**
 * [The `nav` element](https://html.spec.whatwg.org/#the-nav-element)
 * represents a section of a page that links to other pages or to parts within the page:
 * a section with navigation links.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-nav-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/gg593047(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function nav
 * @param {{}} init `NodeInit` dictionary
 */
export const nav = init => htmldom('nav', init);

/**
 * [The `noscript` element](https://html.spec.whatwg.org/#the-noscript-element)
 * represents nothing if scripting is enabled,
 * and represents its children if scripting is disabled.
 * It is used to present different markup to user agents that support scripting
 * and those that don't support scripting, by affecting how the document is parsed.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-noscript-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535858(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function noscript
 * @param {{}} init `NodeInit` dictionary
 */
export const noscript = init => htmldom('noscript', init);

/**
 * [The `object` element](https://html.spec.whatwg.org/#the-object-element)
 * can represent an external resource, which, depending on the type of the resource,
 * will either be treated as an image, as a nested browsing context,
 * or as an external resource to be processed by a plugin.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-object-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535859(v=vs.85).aspx)
 *
 * Implements `HTMLObjectElement` interface
 * @function object
 * @param {String} init.data Address of the resource
 * @param {String} init.type Type of embedded resource
 * @param {Boolean} init.typeMustMatch Whether the type attribute and the Content-Type value need to match for the resource to be used
 * @param {String} init.name Name of nested browsing context
 * @param {String} init.useMap Name of image map to use
 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
 * @param {String} init.width Horizontal dimension
 * @param {String} init.height Vertical dimension
 * @param {{}} init `NodeInit` dictionary
 */
export const object = init => htmldom('object', init);

/**
 * [The `ol` element](https://html.spec.whatwg.org/#the-ol-element)
 * represents a list of items, where the items have been intentionally ordered,
 * such that changing the order would change the meaning of the document.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ol-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535875(v=vs.85).aspx)
 *
 * Implements `HTMLOListElement` interface
 * @function ol
 * @param {Boolean} init.reversed Number the list backwards
 * @param {Number} init.start Starting value of the list
 * @param {String} init.type Kind of list marker
 * @param {{}} init `NodeInit` dictionary
 */
export const ol = init => htmldom('ol', init);

/**
 * [The `optgroup` element](https://html.spec.whatwg.org/#the-optgroup-element)
 * represents a group of option elements with a common label.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-optgroup-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535876(v=vs.85).aspx)
 *
 * Implements `HTMLOptGroupElement` interface
 * @function optgroup
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {String} init.label User-visible label
 * @param {{}} init `NodeInit` dictionary
 */
export const optgroup = init => htmldom('optgroup', init);

/**
 * [The `option` element](https://html.spec.whatwg.org/#the-option-element)
 * represents an option in a select element or as part of a list of suggestions
 * in a datalist element.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-option-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535877(v=vs.85).aspx)
 *
 * Implements `HTMLOptionElement` interface
 * @function option
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {String} init.label User-visible label
 * @param {Boolean} init.selected Whether the option is selected by default
 * @param {String} init.value Value to be used for form submission
 * @param {{}} init `NodeInit` dictionary
 */
export const option = init => htmldom('option', init);

/**
 * [The `output` element](https://html.spec.whatwg.org/#the-output-element)
 * represents the result of a calculation performed by the application,
 * or the result of a user action.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-output-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/mt732268(v=vs.85).aspx)
 *
 * Implements `HTMLOutputElement` interface
 * @function output
 * @param {String} init.for Specifies controls from which the output was calculated
 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
 * @param {String} init.name Name of form control to use in the [form.elements](https://html.spec.whatwg.org/#dom-form-elements) API
 * @param {{}} init `NodeInit` dictionary
 */
export const output = init => htmldom('output', init);

/**
 * [The `p` element](https://html.spec.whatwg.org/#the-p-element)
 * represents a paragraph.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-p-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535878(v=vs.85).aspx)
 *
 * Implements `HTMLParagraphElement` interface
 * @function p
 * @param {{}} init `NodeInit` dictionary
 */
export const p = init => htmldom('p', init);

/**
 * [The `param` element](https://html.spec.whatwg.org/#the-param-element)
 * defines parameters for plugins invoked by object elements.
 * It does not represent anything on its own.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-param-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535880(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * Implements `HTMLParamElement` interface
 * @function param
 * @param {String} init.name Name of parameter
 * @param {String} init.value Value of parameter
 * @param {{}} init `NodeInit` dictionary
 */
export const param = init => htmldom('param', init);

/**
 * [The `picture` element](https://html.spec.whatwg.org/#the-picture-element)
 * is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-picture-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/mt574001(v=vs.85).aspx)
 *
 * Implements `HTMLPictureElement` interface
 * @function picture
 * @param {{}} init `NodeInit` dictionary
 */
export const picture = init => htmldom('picture', init);

/**
 * [The `pre` element](https://html.spec.whatwg.org/#the-pre-element)
 * represents a block of preformatted text, in which structure is represented
 * by typographic conventions rather than by elements.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-pre-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535883(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * Implements `HTMLPreElement` interface
 * @function pre
 * @param {{}} init `NodeInit` dictionary
 */
export const pre = init => htmldom('pre', init);

/**
 * [The `progress` element](https://html.spec.whatwg.org/#the-progress-element)
 * represents the completion progress of a task. The progress is either indeterminate,
 * indicating that progress is being made but that it is not clear
 * how much more work remains to be done before the task is complete
 * (e.g. because the task is waiting for a remote host to respond),
 * or the progress is a number in the range zero to a maximum,
 * giving the fraction of work that has so far been completed.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-progress-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/hh772953(v=vs.85).aspx)
 *
 * Implements `HTMLProgressElement` interface
 * @function progress
 * @param {Number} init.value Current value of the element
 * @param {Number} init.max Upper bound of range
 * @param {{}} init `NodeInit` dictionary
 */
export const progress = init => htmldom('progress', init);

/**
 * [The `q` element](https://html.spec.whatwg.org/#the-q-element)
 * represents some phrasing content quoted from another source.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-q-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535884(v=vs.85).aspx)
 *
 * Uses `HTMLQuoteElement` interface
 * @function q
 * @param {String} init.cite Link to the source of the quotation or more information about the edit
 * @param {{}} init `NodeInit` dictionary
 */
export const q = init => htmldom('q', init);

/**
 * [The `rp` element](https://html.spec.whatwg.org/#the-rp-element)
 * can be used to provide parentheses or other content
 * around a ruby text component of a ruby annotation,
 * to be shown by user agents that don't support ruby annotations.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-rp-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)
 *
 * Uses `HTMLElement` interface
 * @function rp
 * @param {{}} init `NodeInit` dictionary
 */
export const rp = init => htmldom('rp', init);

/**
 * [The `rt` element](https://html.spec.whatwg.org/#the-rt-element)
 * marks the ruby text component of a ruby annotation.
 * When it is the child of a ruby element, it doesn't represent anything itself,
 * but the ruby element uses it as part of determining what it represents.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-rt-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535885(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function rt
 * @param {{}} init `NodeInit` dictionary
 */
export const rt = init => htmldom('rt', init);

/**
 * [The `ruby` element](https://html.spec.whatwg.org/#the-ruby-element)
 * allows one or more spans of phrasing content to be marked with ruby annotations.
 * Ruby annotations are short runs of text presented alongside base text,
 * primarily used in East Asian typography as a guide for pronunciation
 * or to include other annotations.
 * In Japanese, this form of typography is also known as furigana.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ruby-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535886(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function ruby
 * @param {{}} init `NodeInit` dictionary
 */
export const ruby = init => htmldom('ruby', init);

/**
 * [The `s` element](https://html.spec.whatwg.org/#the-s-element)
 * represents contents that are no longer accurate or no longer relevant.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-s-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535890(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function s
 * @param {{}} init `NodeInit` dictionary
 */
export const s = init => htmldom('s', init);

/**
 * [The `samp` element](https://html.spec.whatwg.org/#the-samp-element)
 * represents sample or quoted output from another program or computing system.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-samp-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535891(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function samp
 * @param {{}} init `NodeInit` dictionary
 */
export const samp = init => htmldom('samp', init);

/**
 * [The `script` element](https://html.spec.whatwg.org/#the-script-element)
 * allows authors to include dynamic script and data blocks in their documents.
 * The element does not represent content for the user.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-script-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535892(v=vs.85).aspx)
 *
 * Implements `HTMLScriptElement` interface
 * @function script
 * @param {String} init.src Address of the resource
 * @param {String} init.type Type of embedded resource
 * @param {String} init.charset Character encoding of the external script resource
 * @param {String} init.async Execute script when available, without blocking
 * @param {String} init.defer Defer script execution
 * @param {String} init.crossOrigin How the element handles crossorigin requests
 * @param {String} init.nonce Cryptographic nonce used in Content Security Policy checks [CSP]
 * @param {{}} init `NodeInit` dictionary
 */
export const script = init => htmldom('script', init);

/**
 * [The `section` element](https://html.spec.whatwg.org/#the-section-element)
 * represents a generic section of a document or application.
 * A section, in this context, is a thematic grouping of content,
 * typically with a heading.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-section-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/gg593059(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function section
 * @param {{}} init `NodeInit` dictionary
 */
export const section = init => htmldom('section', init);

/**
 * [The `select` element](https://html.spec.whatwg.org/#the-select-element)
 * represents a control for selecting amongst a set of options.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-select-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535893(v=vs.85).aspx)
 *
 * Implements `HTMLSelectElement` interface
 * @function select
 * @param {String} init.autocomplete Hint for form autofill feature
 * @param {Boolean} init.autofocus Automatically focus the form control when the page is loaded
 * @param {Boolean} init.disabled Whether the form control is disabled
 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
 * @param {Boolean} init.multiple Whether to allow multiple values
 * @param {String} init.name Name of form control to use for form submission and in the form.elements API
 * @param {Boolean} init.required Whether the control is required for form submission
 * @param {Number} init.size Size of the control
 * @param {{}} init `NodeInit` dictionary
 */
export const select = init => htmldom('select', init);

/**
 * [The `slot` element](https://html.spec.whatwg.org/#the-slot-element)
 * defines a slot. It is typically used in a shadow tree.
 * A slot element represents its assigned nodes, if any, and its contents otherwise.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-slot-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
 *
 * Uses `HTMLElement` interface
 * Implements `HTMLSlotElement` interface
 * @function slot
 * @param {String} init.name Name of shadow tree slot
 * @param {{}} init `NodeInit` dictionary
 */
export const slot = init => htmldom('slot', init);

/**
 * [The `small` element](https://html.spec.whatwg.org/#the-small-element)
 * represents side comments such as small print.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-small-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535894(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function small
 * @param {{}} init `NodeInit` dictionary
 */
export const small = init => htmldom('small', init);

/**
 * [The `source` element](https://html.spec.whatwg.org/#the-source-element)
 * allows authors to specify multiple alternative source sets for img elements
 * or multiple alternative media resources for media elements.
 * It does not represent anything on its own.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-source-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ff975070(v=vs.85).aspx)
 *
 * Implements `HTMLSourceElement` interface
 * @function source
 * @param {String} init.src Address of the resource
 * @param {String} init.type Type of embedded resource
 * @param {String} init.srcset Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
 * @param {String} init.sizes Image sizes for different page layouts
 * @param {String} init.media Applicable media
 * @param {{}} init `NodeInit` dictionary
 */
export const source = init => htmldom('source', init);

/**
 * [The `span` element](https://html.spec.whatwg.org/#the-span-element)
 * doesn't mean anything on its own,
 * but can be useful when used together with the global attributes,
 * e.g. class, lang, or dir. It represents its children.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-span-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535895(v=vs.85).aspx)
 *
 * Implements `HTMLSpanElement` interface
 * @function span
 * @param {{}} init `NodeInit` dictionary
 */
export const span = init => htmldom('span', init);

/**
 * [The `strong` element](https://html.spec.whatwg.org/#the-strong-element)
 * represents strong importance, seriousness, or urgency for its contents.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-strong-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535897(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function strong
 * @param {{}} init `NodeInit` dictionary
 */
export const strong = init => htmldom('strong', init);

/**
 * [The `style` element](https://html.spec.whatwg.org/#the-style-element)
 * allows authors to embed style information in their documents.
 * The style element is one of several inputs to the styling processing model.
 * The element does not represent content for the user.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-style-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535898(v=vs.85).aspx)
 *
 * Implements `HTMLStyleElement` interface
 * @function style
 * @param {String} init.media Applicable media
 * @param {String} init.nonce Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
 * @param {String} init.type Type of embedded resource
 * @param {String} init.title Special semantics: CSS style sheet set name.
 * @param {{}} init `NodeInit` dictionary
 */
export const style = init => htmldom('style', init);

/**
 * [The `sub` element](https://html.spec.whatwg.org/#the-sub-element)
 * represents a subscript.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-sub-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535899(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function sub
 * @param {{}} init `NodeInit` dictionary
 */
export const sub = init => htmldom('sub', init);

/**
 * [The `summary` element](https://html.spec.whatwg.org/#the-summary-element)
 *  represents a summary, caption, or legend for the rest of the contents
 *  of the summary element's parent details element, if any.
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-summary-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
 *
 * Uses `HTMLElement` interface
 * @function summary
 * @param {{}} init `NodeInit` dictionary
 */
export const summary = init => htmldom('summary', init);

/**
 * [The `sup` element](https://html.spec.whatwg.org/#the-sup-element)
 * represents a superscript
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-sup-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)
 * - [MSDN reference](https://msdn.microsoft.com/en-us/library/ms535900(v=vs.85).aspx)
 *
 * Uses `HTMLElement` interface
 * @function sup
 * @param {{}} init `NodeInit` dictionary
 */
export const sup = init => htmldom('sup', init);


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
 * @function variable
 * @param {{}} init `NodeInit` dictionary
 */
export const variable = init => htmldom('var', init);

export const video = init => htmldom('video', init);

export const wbr = init => htmldom('wbr', init);




/*
 * [The `$` element](https://html.spec.whatwg.org/#the-$-element)
 * ***
 *
 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-$-element)
 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/$)
 * - [MSDN reference](###)
 *
 * Uses `HTMLElement` interface
 * Implements `HTML*Element` interface
 * @function $
 * @param {String} init.*
 * @param {{}} init `NodeInit` dictionary
 */