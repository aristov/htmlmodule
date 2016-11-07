/**
 * https://html.spec.whatwg.org
 *
 * Elements in the DOM represent things; that is, they have intrinsic meaning, also known as semantics.
 */

import { HTMLAssembler } from './htmlassembler';

const assembler = new HTMLAssembler;

/**
 * Assembles the specified `HTMLElement` node
 *
 * Provides `HTMLElement` interface and all HTML DOM interfaces which inherit from it
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#htmlelement-htmlelement)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
 * • [msdn api](https://msdn.microsoft.com/en-us/library/hh869697.aspx)
 *
 * @function htmldom
 * @param {String} tagName element tag name
 * @param {{}|String|Node|DOMAssembler|Array} [init] `NodeInit` dictionary
 * @param {{}} [init.attrset] `HTMLElement` attributes set as a dictionary object
 * @param {{}} [init.dataset] `HTMLElement` dataset as a dictionary object
 * @param {{}} [init.style] `HTMLElement` style as a dictionary object (CSSStyleDeclaration)
 * @param {String|Node|DOMAssembler|Array} [init.children] `HTMLElement` child nodes
 * @param {String} [init.accessKey] Specify an access key for the element
 * @param {String} [init.className] `Element` class name; reflects "class" attribute
 * @param {String} [init.contentEditable] Specify whether or not the element is editable
 * @param {String} [init.dir] Specify a text writing directionality of the content of the current element
 * @param {Boolean} [init.hidden] Specify the visibility state of the element
 * @param {String} [init.id] `Element` unique identifier; reflects "id" content attribute
 * @param {String} [init.innerHTML] Paste a markup string as an inner DOM structure
 * @param {String} [init.innerText] Paste a string data as a single text node
 * @param {String} [init.lang] Define a human-language of the element and its contents
 * @param {Number} [init.tabIndex] Specify a focusability of the element
 * @param {String} [init.textContent] Paste string data as a single text node
 * @param {String} [init.title] Specify title of the element; represents a browser title tooltip content
 * @param {Function} [init.onabort] Fired at the Window when the download was aborted by the user
 * @param {Function} [init.onblur] Fired at nodes when they stop being focused
 * @param {Function} [init.oncancel] Fired at dialog elements when they are canceled by the user (e.g. by pressing the Escape key)
 * @param {Function} [init.onchange] Fired at controls when the user commits a value change (see also the input event)
 * @param {Function} [init.onclick] Normally a mouse event; also synthetically fired at an element before its activation behavior is run, when an element is activated from a non-pointer input device (e.g. a keyboard)
 * @param {Function} [init.onclose] Fired at dialog elements when they are closed, and at WebSocket elements when the connection is terminated
 * @param {Function} [init.oncontextmenu] Fired at elements when the user requests their context menu
 * @param {Function} [init.oncuechange] One or more cues in the track have become active or stopped being active.
 * @param {Function} [init.ondblclick] Fires on double click
 * @param {Function} [init.ondurationchange] The duration attribute has just been updated.
 * @param {Function} [init.onemptied] networkState is NETWORK_EMPTY; all the IDL attributes are in their initial states.
 * @param {Function} [init.onended] currentTime equals the end of the media resource; ended is true.
 * @param {Function} [init.onerror] Fired when unexpected errors occur (e.g. networking errors, script errors, decoding errors)
 * @param {Function} [init.onfocus] Fired at nodes gaining focus
 * @param {Function} [init.oninput] Fired at controls when the user changes the value
 * @param {Function} [init.oninvalid] Fired at controls during form validation if they do not satisfy their constraints
 * @param {Function} [init.onkeydown] A user agent dispatches this event when a key is pressed down
 * @param {Function} [init.onkeypress] A user agent dispatches this event when a key is pressed down, if and only if that key normally produces a character value
 * @param {Function} [init.onkeyup] A user agent dispatches this event when a key is released
 * @param {Function} [init.onload] Fired at the Window when the document has finished loading; fired at an element containing a resource (e.g. img, embed) when its resource has finished loading
 * @param {Function} [init.onloadend] Fired at img elements after a successful load
 * @param {Function} [init.onloadstart] Fired at img elements when a load begins
 * @param {Function} [init.onmousedown] A user agent dispatches this event when a pointing device button is pressed over an element
 * @param {Function} [init.onmouseenter] A user agent dispatches this event when a pointing device is moved onto the boundaries of an element or one of its descendent elements
 * @param {Function} [init.onmouseleave] A user agent dispatches this event when a pointing device is moved off of the boundaries of an element and all of its descendent elements
 * @param {Function} [init.onmousemove] A user agent dispatches this event when a pointing device is moved while it is over an element
 * @param {Function} [init.onmouseout] A user agent dispatches this event when a pointing device is moved off of the boundaries of an element
 * @param {Function} [init.onmouseover] A user agent dispatches this event when a pointing device is moved onto the boundaries of an element
 * @param {Function} [init.onmouseup] A user agent dispatches this event when a pointing device button is released over an element
 * @param {Function} [init.onwheel] A user agent dispatches this event when a mouse wheel has been rotated around any axis, or when an equivalent input device (such as a mouse-ball, certain tablets or touchpads, etc.) has emulated such an action
 * @param {Function} [init.onpause] The element has been paused. Fired after the pause() method has returned
 * @param {Function} [init.onplay] The element is no longer paused. Fired after the play() method has returned, or when the autoplay attribute has caused playback to begin
 * @param {Function} [init.onplaying] Playback is ready to start after having been paused or delayed due to lack of media data
 * @param {Function} [init.onprogress] Fired at img elements during a CORS-same-origin image load
 * @param {Function} [init.onratechange] Either the defaultPlaybackRate or the playbackRate attribute has just been updated
 * @param {Function} [init.onreset] Fired at a form element when it is reset
 * @param {Function} [init.onresize] Fired at the Window when the viewport is resized
 * @param {Function} [init.onscroll] Fired at the Document or element when the viewport or element is scrolled, respectively
 * @param {Function} [init.onseeked] The seeking IDL attribute changed to false after the current playback position was changed
 * @param {Function} [init.onseeking] The seeking IDL attribute changed to true, and the user agent has started seeking to a new position
 * @param {Function} [init.onselect] Fired at form controls when their text selection is adjusted (whether by an API or by the user)
 * @param {Function} [init.onshow] Fired at a menu element when it is shown as a context menu
 * @param {Function} [init.onstalled] The user agent is trying to fetch media data, but data is unexpectedly not forthcoming
 * @param {Function} [init.onsubmit] Fired at a form element when it is submitted
 * @param {Function} [init.onsuspend] The user agent is intentionally not currently fetching media data
 * @param {Function} [init.ontimeupdate] The current playback position changed as part of normal playback or in an especially interesting way, for example discontinuously
 * @param {Function} [init.ontoggle] Fired at details elements when they open or close
 * @param {Function} [init.onvolumechange] Either the volume attribute or the muted attribute has changed. Fired after the relevant attribute's setter has returned
 * @param {Function} [init.onwaiting] Playback has stopped because the next frame is not available, but the user agent expects that frame to become available in due course
 * @return {HTMLElement}
 */
export function htmldom(tagName, init) {
    return assembler.createElement(tagName, init);
}


/**
 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
 *  - If the `a` element has an `href` attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
 *  - If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-a-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
 * • [msdn api](https://msdn.microsoft.com/en-us/library/hh869682.aspx)
 *
 * @function a
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.href] Address of the hyperlink
 * @param {String} [init.target] Browsing context for hyperlink navigation
 * @param {String} [init.download] Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} [init.ping] URLs to ping
 * @param {String} [init.rel] Relationship between the location in the document containing the hyperlink and the destination resource
 * @param {String} [init.hreflang] Language of the linked resource
 * @param {String} [init.type] Hint for the type of the referenced resource
 * @param {String} [init.referrerPolicy] Determines the referrer policy for fetches initiated by the element
 * @return {HTMLAnchorElement}
 */
export function a(init) {
    return htmldom('a', init);
}

/**
 * [The `abbr` element](https://html.spec.whatwg.org/#the-abbr-element)
 * represents an abbreviation or acronym, optionally with its expansion.
 * The `title` attribute may be used to provide an expansion of the abbreviation.
 * The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-abbr-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
 *
 * @function abbr
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.title] Special semantics: full term or expansion of abbreviation
 * @return {HTMLElement}
 */
export function abbr(init) {
    return htmldom('abbr', init);
}

/**
 * [The `address` element](https://html.spec.whatwg.org/#the-address-element)
 * represents the contact information for its nearest `article` or `body` element ancestor.
 * If that is the `body` element, then the contact information applies to the document as a whole.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-address-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
 *
 * @function address
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function address(init) {
    return htmldom('address', init);
}

/**
 * [The `area` element](https://html.spec.whatwg.org/#the-area-element)
 * represents either a hyperlink with some text and a corresponding area on an image map,
 * or a dead area on an image map.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-area-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
 *
 * @function area
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.alt] Replacement text for use when images are not available
 * @param {String} [init.coords] Coordinates for the shape to be created in an image map
 * @param {String} [init.shape] The kind of shape to be created in an image map
 * @param {String} [init.href] Address of the hyperlink
 * @param {String} [init.target] Browsing context for hyperlink navigation
 * @param {String} [init.download] Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} [init.ping] URLs to ping
 * @param {String} [init.rel] Relationship between the location in the document containing the hyperlink and the destination resource
 * @return {HTMLAreaElement}
 */
export function area(init) {
    return htmldom('area', init);
}

/**
 * [The `article` element](https://html.spec.whatwg.org/#the-article-element)
 * represents a complete, or self-contained, composition in a document, page, application,
 * or site and that is, in principle, independently distributable or reusable, e.g. in syndication.
 * This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment,
 * an interactive widget or gadget, or any other independent item of content.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-article-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
 *
 * @function article
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function article(init) {
    return htmldom('article', init);
}

/**
 * [The `aside` element](https://html.spec.whatwg.org/#the-aside-element)
 * represents a section of a page that consists of content that is tangentially related to the content around the aside element,
 * and which could be considered separate from that content.
 * Such sections are often represented as sidebars in printed typography.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-aside-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
 *
 * @function aside
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function aside(init) {
    return htmldom('aside', init);
}

/**
 * [The `audio` element](https://html.spec.whatwg.org/#the-audio-element)
 * represents a sound or audio stream.
 * Content may be provided inside the `audio` element.
 * User agents should not show this content to the user;
 * it is intended for older Web browsers which do not support audio, so that legacy audio plugins can be tried,
 * or to show text to the users of these older browsers informing them of how to access the audio contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-audio-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
 *
 * @function audio
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.crossorigin] How the element handles crossorigin requests
 * @param {String} [init.preload] Hints how much buffering the media resource will likely need
 * @param {Boolean} [init.autoplay] Hint that the media resource can be started automatically when the page is loaded
 * @param {Boolean} [init.loop] Whether to loop the media resource
 * @param {Boolean} [init.muted] Whether to mute the media resource by default
 * @param {Boolean} [init.controls] Show user agent controls
 * @return {HTMLAudioElement}
 *
 * @version HTML5
 */
export function audio(init) {
    return htmldom('audio', init);
}

/**
 * [The `b` element](https://html.spec.whatwg.org/#the-b-element)
 * represents a span of text to which attention is being drawn
 * for utilitarian purposes without conveying any extra importance
 * and with no implication of an alternate voice or mood,
 * such as key words in a document abstract, product names in a review,
 * actionable words in interactive text-driven software, or an article lede.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-b-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
 *
 * @function b
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function b(init) {
    return htmldom('b', init);
}

/**
 * [The `base` element](https://html.spec.whatwg.org/#the-base-element)
 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-base-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
 *
 * @function base
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.dir] special semantics
 * @return {HTMLElement}
 */
export function base(init) {
    return htmldom('base', init);
}

/**
 * [The `bdi` element](https://html.spec.whatwg.org/#the-bdi-element)
 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-bdi-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)
 *
 * @function bdi
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.dir] special semantics
 * @return {HTMLElement}
 */
export function bdi(init) {
    return htmldom('bdi', init);
}

/**
 * [The `bdo` element](https://html.spec.whatwg.org/#the-bdo-element)
 * represents explicit text directionality formatting control for its children.
 * It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-bdo-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo)
 *
 * @function bdo
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.dir] special semantics: `rtl` or `ltr` values allowed only
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function bdo(init) {
    return htmldom('bdo', init);
}

/**
 * [The `blockquote` element](https://html.spec.whatwg.org/#the-blockquote-element)
 * represents a section that is quoted from another source.
 * Content inside a blockquote must be quoted from another source,
 * whose address, if it has one, may be cited in the cite attribute.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-blockquote-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
 *
 * @function blockquote
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
 * @return {HTMLQuoteElement}
 */
export function blockquote(init) {
    return htmldom('blockquote', init);
}

/**
 * [The `body` element](https://html.spec.whatwg.org/#the-body-element)
 * represents the main content of the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-body-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
 *
 * @function body
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Function} [init.onafterprint] Fired at the Window after printing
 * @param {Function} [init.onbeforeprint] Fired at the Window before printing
 * @param {Function} [init.onbeforeunload] Fired at the Window when the page is about to be unloaded, in case the page would like to show a warning prompt
 * @param {Function} [init.onhashchange] Fired at the Window when the fragment part of the document's URL changes
 * @param {Function} [init.onlanguagechange] Fired at the global scope object when the user's preferred languages change
 * @param {Function} [init.onmessage] Fired at an object when it receives a message
 * @param {Function} [init.onoffline] Fired at the global scope object when the network connections fails
 * @param {Function} [init.ononline] Fired at the global scope object when the network connections returns
 * @param {Function} [init.onpagehide] Fired at the Window when the page's entry in the session history stops being the current entry
 * @param {Function} [init.onpageshow] Fired at the Window when the page's entry in the session history becomes the current entry
 * @param {Function} [init.onpopstate] Fired at the Window when the user navigates the session history
 * @param {Function} [init.onrejectionhandled] Fired at global scope objects when a previously-unhandled promise rejection becomes handled
 * @param {Function} [init.onstorage] Fired at Window event when the corresponding localStorage or sessionStorage storage areas change
 * @param {Function} [init.onunhandledrejection] Fired at global scope objects when a promise rejection goes unhandled
 * @param {Function} [init.onunload] Fired at the Window object when the page is going away
 * @return {HTMLBodyElement}
 */
export function body(init) {
    return htmldom('body', init);
}

/**
 * [The `br` element](https://html.spec.whatwg.org/#the-br-element)
 * represents a line break.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-br-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBRElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
 *
 * @function br
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLBRElement}
 */
export function br(init) {
    return htmldom('br', init);
}

/**
 * [The `button` element](https://html.spec.whatwg.org/#the-button-element)
 * represents a button labeled by its contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-button-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535211.aspx)
 *
 * @function button
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
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
 * @return {HTMLButtonElement}
 */
export function button(init) {
    return htmldom('button', init);
}

/**
 * [The `canvas` element](https://html.spec.whatwg.org/#the-canvas-element)
 * provides scripts with a resolution-dependent bitmap canvas,
 * which can be used for rendering graphs, game graphics, art,
 * or other visual images on the fly.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-canvas-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
 *
 * @function canvas
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.width] Horizontal dimension
 * @param {Number} [init.height] Vertical dimension
 * @return {HTMLCanvasElement}
 *
 * @version HTML5
 */
export function canvas(init) {
    return htmldom('canvas', init);
}

/**
 * [The `caption` element](https://html.spec.whatwg.org/#the-caption-element)
 * represents the title of the table that is its parent,
 * if it has a parent and that is a table element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-caption-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
 *
 * @function caption
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableCaptionElement}
 */
export function caption(init) {
    return htmldom('caption', init);
}

/**
 * [The `cite` element](https://html.spec.whatwg.org/#the-cite-element)
 * represents the title of a work (e.g. a book, a paper, an essay, a poem,
 * a score, a song, a script, a film, a TV show, a game, a sculpture, a painting,
 * a theatre production, a play, an opera, a musical, an exhibition, a legal case report,
 * a computer program, etc). This can be a work that is being quoted or referenced in detail
 * (i.e. a citation), or it can just be a work that is mentioned in passing.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-cite-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)
 *
 * @function cite
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function cite(init) {
    return htmldom('cite', init);
}

/**
 * [The `code` element](https://html.spec.whatwg.org/#the-code-element)
 * represents a fragment of computer code. This could be an XML element name,
 * a file name, a computer program, or any other string that a computer would recognize.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-code-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
 *
 * @function code
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function code(init) {
    return htmldom('code', init);
}

/**
 * [The `col` element](https://html.spec.whatwg.org/#the-col-element)
 * represents has a parent and that is a colgroup element that itself has a parent
 * that is a table element, then the col element represents one or more columns
 * in the column group represented by that colgroup.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-col-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535225.aspx)
 *
 * @function col
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.span] Number of columns spanned by the element
 * @return {HTMLTableColElement}
 */
export function col(init) {
    return htmldom('col', init);
}

/**
 * [The `colgroup` element](https://html.spec.whatwg.org/#the-colgroup-element)
 * represents represents a group of one or more columns in the table that is its parent,
 * if it has a parent and that is a table element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-colgroup-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535225.aspx)
 *
 * @function colgroup
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.span] Number of columns spanned by the element
 * @return {HTMLTableColElement}
 */
export function colgroup(init) {
    return htmldom('colgroup', init);
}

/**
 * [The `data` element](https://html.spec.whatwg.org/#the-data-element)
 * represents its contents, along with a machine-readable form
 * of those contents in the value attribute.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-data-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt706246.aspx)
 *
 * @function data
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.value] Machine-readable value
 * @return {HTMLDataElement}
 */
export function data(init) {
    return htmldom('data', init);
}

/**
 * [The `datalist` element](https://html.spec.whatwg.org/#the-datalist-element)
 * represents a set of option elements that represent predefined options for other controls.
 * In the rendering, the datalist element represents nothing and it, along with its children,
 * should be hidden.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772925.aspx)
 *
 * @function datalist
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLDataListElement}
 *
 * @version HTML5
 */
export function datalist(init) {
    return htmldom('datalist', init);
}

/**
 * [The `dd` element](https://html.spec.whatwg.org/#the-dd-element)
 * represents the description, definition, or value,
 * part of a term-description group in a description list (dl element).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535234.aspx)
 *
 * @function dd
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function dd(init) {
    return htmldom('dd', init);
}

/**
 * [The `del` element](https://html.spec.whatwg.org/#the-del-element)
 * represents a removal from the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-del-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535236.aspx)
 *
 * @function del
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
 * @param {String} [init.dateTime] Date and (optionally) time of the change
 * @return {HTMLModElement}
 */
export function del(init) {
    return htmldom('del', init);
}

/**
 * [The `details` element](https://html.spec.whatwg.org/#the-details-element)
 * represents a disclosure widget from which the user can obtain additional information or controls.
 *
 * [w3](https://www.w3.org/TR/html/interactive-elements.html#the-details-element)
 * • [MDN elemeent reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
 *
 * @function details
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.open] Whether the details are visible
 * @return {HTMLDetailsElement}
 */
export function details(init) {
    return htmldom('details', init);
}

/**
 * [The `dfn` element](https://html.spec.whatwg.org/#the-dfn-element)
 * represents the defining instance of a term. The paragraph, description list group,
 * or section that is the nearest ancestor of the dfn element must also contain
 * the definition(s) for the term given by the dfn element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-dfn-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535237.aspx)
 *
 * @function dfn
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.title] Special semantics: Full term or expansion of abbreviation
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function dfn(init) {
    return htmldom('dfn', init);
}

/**
 * [The `dialog` element](https://html.spec.whatwg.org/#the-dialog-element)
 * represents a part of an application that a user interacts with to perform a task,
 * for example a dialog box, inspector, or window.
 *
 * [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
 *
 * @function dialog
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.open] Whether the dialog box is showing
 * @return {HTMLDialogElement}
 */
export function dialog(init) {
    return htmldom('dialog', init);
}

/**
 * [The `div` element](https://html.spec.whatwg.org/#the-div-element)
 * has no special meaning at all. It represents its children.
 * It can be used with the class, lang, and title attributes to mark up semantics
 * common to a group of consecutive elements.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-div-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535240.aspx)
 *
 * @function div
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLDivElement}
 *
 * @version HTML5
 */
export function div(init) {
    return htmldom('div', init);
}

/**
 * [The `dl` element](https://html.spec.whatwg.org/#the-dl-element)
 * represents an association list consisting of zero or more name-value groups (a description list).
 * A name-value group consists of one or more names (dt elements) followed by one or more values
 * (dd elements), ignoring any nodes other than dt and dd elements.
 * Within a single dl element, there should not be more than one dt element for each name.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-dl-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535241.aspx)
 *
 * @function dl
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLDListElement}
 */
export function dl(init) {
    return htmldom('dl', init);
}

/**
 * [The `dt` element](https://html.spec.whatwg.org/#the-dt-element)
 * represents the term, or name, part of a term-description group in a description list (dl element).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-dt-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535243.aspx)
 *
 * @function dt
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function dt(init) {
    return htmldom('dt', init);
}

/**
 * [The `em` element](https://html.spec.whatwg.org/#the-em-element)
 * represents stress emphasis of its contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-em-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535244.aspx)
 *
 * @function em
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function em(init) {
    return htmldom('em', init);
}

/**
 * [The `embed` element](https://html.spec.whatwg.org/#the-embed-element)
 * represents provides an integration point for an external (typically non-HTML)
 * application or interactive content.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-embed-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535245.aspx)
 *
 * @function embed
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.type] Type of embedded resource
 * @param {String} [init.width] Horizontal dimension
 * @param {String} [init.height] Vertical dimension
 * @return {HTMLEmbedElement}
 */
export function embed(init) {
    return htmldom('embed', init);
}

/**
 * [The `fieldset` element](https://html.spec.whatwg.org/#the-fieldset-element)
 * represents
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-fieldset-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535247.aspx)
 *
 * @function fieldset
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.disabled] Whether the form control is disabled
 * @param {String} [init.form] Associates the control with a form element
 * @param {String} [init.name] Name of form control to use in the form.elements API
 * @return {HTMLFieldSetElement}
 */
export function fieldset(init) {
    return htmldom('fieldset', init);
}

/**
 * [The `figcaption` element](https://html.spec.whatwg.org/#the-figcaption-element)
 * represents a caption or legend for the rest of the contents
 * of the figcaption element's parent figure element, if any.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-figcaption-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593037.aspx)
 *
 * @function figcaption
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function figcaption(init) {
    return htmldom('figcaption', init);
}

/**
 * [The `figure` element](https://html.spec.whatwg.org/#the-figure-element)
 * represents some flow content, optionally with a caption,
 * that is self-contained (like a complete sentence) and is typically referenced
 * as a single unit from the main flow of the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-figure-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
 *
 * @function figure
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function figure(init) {
    return htmldom('figure', init);
}

/**
 * [The `footer` element](https://html.spec.whatwg.org/#the-footer-element)
 * represents a footer for its nearest ancestor sectioning content or sectioning root element.
 * A footer typically contains information about its section such as who wrote it,
 * links to related documents, copyright data, and the like.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-footer-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593039.aspx)
 *
 * @function footer
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function footer(init) {
    return htmldom('footer', init);
}

/**
 * [The `form` element](https://html.spec.whatwg.org/#the-form-element)
 * represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-form-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535249.aspx)
 *
 * @function form
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.acceptCharset] Character encodings to use for form submission
 * @param {String} [init.action] URL to use for form submission
 * @param {String} [init.autocomplete] Default setting for autofill feature for controls in the form
 * @param {String} [init.enctype] Form data set encoding type to use for form submission
 * @param {String} [init.method] HTTP method to use for form submission
 * @param {String} [init.name] Name of form to use in the document.forms API
 * @param {Boolean} [init.noValidate] Bypass form control validation for form submission
 * @param {String} [init.target] Browsing context for form submission
 * @return {HTMLFormElement}
 */
export function form(init) {
    return htmldom('form', init);
}

/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-h1-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535253.aspx)
 *
 * @function h1
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */
export function h1(init) {
    return htmldom('h1', init);
}
/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h2
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */
export function h2(init) {
    return htmldom('h2', init);
}
/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h3
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */
export function h3(init) {
    return htmldom('h3', init);
}
/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h4
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */
export function h4(init) {
    return htmldom('h4', init);
}
/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h5
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */
export function h5(init) {
    return htmldom('h5', init);
}
/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h6
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */
export function h6(init) {
    return htmldom('h6', init);
}

/**
 * [The `head` element](https://html.spec.whatwg.org/#the-head-element)
 * represents a collection of metadata for the Document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-head-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/HTMLHeadElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535252.aspx)
 *
 * @function head
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadElement}
 */
export function head(init) {
    return htmldom('head', init);
}

/**
 * [The `header` element](https://html.spec.whatwg.org/#the-header-element)
 * represents a group of introductory or navigational aids.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-header-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593044.aspx)
 *
 * @function header
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function header(init) {
    return htmldom('header', init);
}

/**
 * [The `hgroup` element](https://html.spec.whatwg.org/#the-hgroup-element)
 * represents the heading of a section, which consists
 * of all the h1–h6 element children of the hgroup element.
 * The element is used to group a set of h1–h6 elements when the heading has multiple levels,
 * such as subheadings, alternative titles, or taglines.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-hgroup-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593045.aspx)
 *
 * @function hgroup
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function hgroup(init) {
    return htmldom('hgroup', init);
}

/**
 * [The `hr` element](https://html.spec.whatwg.org/#the-hr-element)
 * represents a paragraph-level thematic break, e.g. a scene change in a story,
 * or a transition to another topic within a section of a reference book.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-hr-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535254.aspx)
 *
 * @function hr
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHRElement}
 */
export function hr(init) {
    return htmldom('hr', init);
}

/**
 * [The `html` element](https://html.spec.whatwg.org/#the-html-element)
 * represents the root of an HTML document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-html-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535255.aspx)
 *
 * @function html
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.manifest] [Application cache manifest](https://html.spec.whatwg.org/#concept-appcache-manifest)
 * @return {HTMLHtmlElement}
 */
export function html(init) {
    return htmldom('html', init);
}

/**
 * [The `i` element](https://html.spec.whatwg.org/#the-i-element)
 * represents a span of text in an alternate voice or mood,
 * or otherwise offset from the normal prose in a manner indicating a different quality of text,
 * such as a taxonomic designation, a technical term, an idiomatic phrase from another language,
 * transliteration, a thought, or a ship name in Western texts.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-i-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535257.aspx)
 *
 * @function i
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function i(init) {
    return htmldom('i', init);
}

/**
 * [The `iframe` element](https://html.spec.whatwg.org/#the-iframe-element)
 * represents a [nested browsing context](https://html.spec.whatwg.org/#nested-browsing-context).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-iframe-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535258.aspx)
 *
 * @function iframe
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.srcdoc] A document to render in the iframe
 * @param {String} [init.name] Name of nested browsing context
 * @param {String} [init.attrset.sandbox] Security rules for nested content
 * @param {String} [init.allowFullScreen] Whether to allow the iframe's contents to use requestFullscreen()
 * @param {String} [init.allowUserMedia] Whether to allow the iframe's contents to use getUserMedia()
 * @param {String} [init.width] Horizontal dimension
 * @param {String} [init.height] Vertical dimension
 * @param {String} [init.referrerPolicy] Determines the referrer policy for fetches initiated by the element
 * @return {HTMLIFrameElement}
 */
export function iframe(init) {
    return htmldom('iframe', init);
}

/**
 * [The `img` element](https://html.spec.whatwg.org/#the-img-element)
 * represents an image.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-img-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535259.aspx)
 *
 * @function img
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.alt] Replacement text for use when images are not available
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.srcset] Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
 * @param {String} [init.sizes] Image sizes for different page layouts
 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
 * @param {String} [init.useMap] Name of image map to use
 * @param {Boolean} [init.isMap] Whether the image is a server-side image map
 * @param {Number} [init.width] Horizontal dimension
 * @param {Number} [init.height] Vertical dimension
 * @param {String} [init.referrerPolicy] Determines the referrer policy for fetches initiated by the element
 * @return {HTMLImageElement}
 */
export function img(init) {
    return htmldom('img', init);
}

/**
 * [The `input` element](https://html.spec.whatwg.org/#the-input-element)
 * represents a typed data field, usually with a form control to allow the user to edit the data.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-input-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535260.aspx)
 *
 * @function input
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.alt] Replacement text for use when images are not available
 * @param {String} [init.accept] Hint for expected file type in file upload controls
 * @param {String} [init.autocomplete] Hint for form autofill feature
 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
 * @param {Boolean} [init.checked] Whether the command or control is checked
 * @param {Boolean} [init.defaultChecked]
 * @param {String} [init.dirName] Name of form control to use for sending the element's directionality in form submission
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {String} [init.formAction] URL to use for form submission
 * @param {String} [init.formEnctype] Form data set encoding type to use for form submission
 * @param {String} [init.formMethod] HTTP method to use for form submission
 * @param {Boolean} [init.formNoValidate] Bypass form control validation for form submission
 * @param {String} [init.formTarget] Browsing context for form submission
 * @param {Number} [init.height] Vertical dimension
 * @param {Boolean} [init.indeterminate]
 * @param {String} [init.inputMode] Hint for selecting an input modality
 * @param {String} [init.max] Maximum value
 * @param {Number} [init.maxLength] Maximum length of value
 * @param {String} [init.min] Minimum value
 * @param {Number} [init.minLength] Minimum length of value
 * @param {Boolean} [init.multiple] Whether to allow multiple values
 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
 * @param {String} [init.pattern] Pattern to be matched by the form control's value
 * @param {String} [init.placeholder] User-visible label to be placed within the form control
 * @param {Boolean} [init.readOnly] Whether to allow the value to be edited by the user
 * @param {Boolean} [init.required] Whether the control is required for form submission
 * @param {Number} [init.size] Size of the control
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.step] Granularity to be matched by the form control's value
 * @param {String} [init.type] Type of form control
 * @param {String} [init.value] Value of the form control
 * @param {String} [init.defaultValue]
 * @param {String} [init.width] Horizontal dimension
 * @param {String} [init.title] Special semantics: Description of pattern (when used with pattern attribute).
 * @param {String} [init.attrset.form] Associates the control with a form element (ID reference)
 * @param {String} [init.attrset.list] List of autocomplete options
 * @return {HTMLInputElement}
 */
export function input(init) {
    return htmldom('input', init);
}

/**
 * [The `ins` element](https://html.spec.whatwg.org/#the-ins-element)
 * represents an addition to the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-ins-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535842.aspx)
 *
 * @function ins
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
 * @param {String} [init.dateTime] Date and (optionally) time of the change
 * @return {HTMLModElement}
 */
export function ins(init) {
    return htmldom('ins', init);
}

/**
 * [The `kbd` element](https://html.spec.whatwg.org/#the-kbd-element)
 * represents user input (typically keyboard input,
 * although it may also be used to represent other input, such as voice commands).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-kbd-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
 *
 * @function kbd
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function kbd(init) {
    return htmldom('kbd', init);
}

/**
 * [The `label` element](https://html.spec.whatwg.org/#the-label-element)
 * represents a caption in a user interface.
 * The caption can be associated with a specific form control,
 * known as the label element's labeled control, either using the for attribute,
 * or by putting the form control inside the label element itself.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-label-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535845.aspx)
 *
 * @function label
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.for] Associate the label with form control
 * @return {HTMLLabelElement}
 */
export function label(init) {
    return htmldom('label', init);
}

/**
 * [The `legend` element](https://html.spec.whatwg.org/#the-legend-element)
 * represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-legend-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535846.aspx)
 *
 * @function legend
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLLegendElement}
 */
export function legend(init) {
    return htmldom('legend', init);
}

/**
 * [The `li` element](https://html.spec.whatwg.org/#the-li-element)
 * represents a list item. If its parent element is an ol, ul, or menu element,
 * then the element is an item of the parent element's list, as defined for those elements.
 * Otherwise, the list item has no defined list-related relationship to any other li element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-li-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535847.aspx)
 *
 * @function li
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.value] Ordinal value of the list item (if the element is not a child of an ul or menu element)
 * @return {HTMLLIElement}
 */
export function li(init) {
    return htmldom('li', init);
}

/**
 * [The `link` element](https://html.spec.whatwg.org/#the-link-element)
 * allows authors to link their document to other resources.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-link-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535848.aspx)
 *
 * @function link
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.href] Address of the hyperlink
 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
 * @param {String} [init.rel] Relationship between the document containing the hyperlink and the destination resource
 * @param {String} [init.as] Destination for a preload request (for `rel="preload"`)
 * @param {String} [init.media] Applicable media
 * @param {String} [init.nonce] Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
 * @param {String} [init.hreflang] Language of the linked resource
 * @param {String} [init.type] Hint for the type of the referenced resource
 * @param {String} [init.sizes] Sizes of the icons (for `rel="icon"`)
 * @param {String} [init.referrerPolicy] Determines the referrer policy for fetches initiated by the element
 * @param {String} [init.title] Special semantics: title of the link; [CSS style sheet set name](CSS style sheet set name).
 * @return {HTMLLinkElement}
 */
export function link(init) {
    return htmldom('link', init);
}

/**
 * [The `main` element](https://html.spec.whatwg.org/#the-main-element)
 * can be used as a container for the dominant contents of another element.
 * It represents its children.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-main-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt634542.aspx)
 *
 * @function main
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function main(init) {
    return htmldom('main', init);
}

/**
 * [The `map` element](https://html.spec.whatwg.org/#the-map-element),
 * in conjunction with an img element and any area element descendants, defines an image map.
 * The element represents its children.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-map-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535850.aspx)
 *
 * @function map
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.name] Name of [image map](https://html.spec.whatwg.org/#image-map) to reference from the `usemap` attribute
 * @return {HTMLMapElement}
 */
export function map(init) {
    return htmldom('map', init);
}

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
 * [w3](https://www.w3.org/TR/html/single-page.html#the-mark-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593046.aspx)
 *
 * @function mark
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function mark(init) {
    return htmldom('mark', init);
}

/**
 * [The `menu` element](https://html.spec.whatwg.org/#the-menu-element)
 * represents a list of commands.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-menu-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535852.aspx)
 *
 * @function menu
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.type] Type of menu
 * @param {String} [init.label] User-visible label
 * @return {HTMLMenuElement}
 *
 * @version HTML5
 */
export function menu(init) {
    return htmldom('menu', init);
}

/**
 * [The `menuitem` element](https://html.spec.whatwg.org/#the-menuitem-element)
 * represents a command that the user can invoke from a popup menu
 * (either a context menu or the menu of a menu button).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-menuitem-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuItemElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem)
 *
 * @function menuitem
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.type] Type of command
 * @param {String} [init.label] User-visible label
 * @param {String} [init.icon] Icon for the command
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {Boolean} [init.checked] Whether the command or control is checked
 * @param {String} [init.radiogroup] Name of group of commands to treat as a radio button group
 * @param {Boolean} [init.default] Mark the command as being a default command
 * @param {String} [init.title] Special semantics: hint describing the command
 * @return {HTMLMenuItemElement}
 *
 * @version HTML5
 */
export function menuitem(init) {
    return htmldom('menuitem', init);
}

/**
 * [The `meta` element](https://html.spec.whatwg.org/#the-meta-element)
 * represents various kinds of metadata that cannot be expressed using the title,
 * base, link, style, and script elements.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-meta-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535853.aspx)
 *
 * @function meta
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.name] Metadata name
 * @param {String} [init.http-equiv] Pragma directive
 * @param {String} [init.content] Value of the element
 * @param {String} [init.attrset.charset] Character encoding declaration
 * @return {HTMLMetaElement}
 */
export function meta(init) {
    return htmldom('meta', init);
}

/**
 * [The `meter` element](https://html.spec.whatwg.org/#the-meter-element)
 * represents a scalar measurement within a known range, or a fractional value;
 * for example disk usage, the relevance of a query result,
 * or the fraction of a voting population to have selected a particular candidate.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-meter-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt573149.aspx)
 *
 * @function meter
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.value] Current value of the element
 * @param {Number} [init.min] Lower bound of range
 * @param {Number} [init.max] Upper bound of range
 * @param {Number} [init.low] High limit of low range
 * @param {Number} [init.high] Low limit of high range
 * @param {Number} [init.optimum] Optimum value in gauge
 * @return {HTMLMeterElement}
 *
 * @version HTML5
 */
export function meter(init) {
    return htmldom('meter', init);
}

/**
 * [The `nav` element](https://html.spec.whatwg.org/#the-nav-element)
 * represents a section of a page that links to other pages or to parts within the page:
 * a section with navigation links.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-nav-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593047.aspx)
 *
 * @function nav
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function nav(init) {
    return htmldom('nav', init);
}

/**
 * [The `noscript` element](https://html.spec.whatwg.org/#the-noscript-element)
 * represents nothing if scripting is enabled,
 * and represents its children if scripting is disabled.
 * It is used to present different markup to user agents that support scripting
 * and those that don't support scripting, by affecting how the document is parsed.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-noscript-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535858.aspx)
 *
 * @function noscript
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function noscript(init) {
    return htmldom('noscript', init);
}

/**
 * [The `object` element](https://html.spec.whatwg.org/#the-object-element)
 * can represent an external resource, which, depending on the type of the resource,
 * will either be treated as an image, as a nested browsing context,
 * or as an external resource to be processed by a plugin.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-object-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535859.aspx)
 *
 * @function object
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.data] Address of the resource
 * @param {String} [init.type] Type of embedded resource
 * @param {Boolean} [init.typeMustMatch] Whether the type attribute and the Content-Type value need to match for the resource to be used
 * @param {String} [init.name] Name of nested browsing context
 * @param {String} [init.useMap] Name of image map to use
 * @param {String} [init.attrset.form] Associates the control with a form element (ID reference)
 * @param {String} [init.width] Horizontal dimension
 * @param {String} [init.height] Vertical dimension
 * @return {HTMLObjectElement}
 */
export function object(init) {
    return htmldom('object', init);
}

/**
 * [The `ol` element](https://html.spec.whatwg.org/#the-ol-element)
 * represents a list of items, where the items have been intentionally ordered,
 * such that changing the order would change the meaning of the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-ol-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535875.aspx)
 *
 * @function ol
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Boolean} [init.reversed] Number the list backwards
 * @param {Number} [init.start] Starting value of the list
 * @param {String} [init.type] Kind of list marker
 * @return {HTMLOListElement}
 */
export function ol(init) {
    return htmldom('ol', init);
}

/**
 * [The `optgroup` element](https://html.spec.whatwg.org/#the-optgroup-element)
 * represents a group of option elements with a common label.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-optgroup-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535876.aspx)
 *
 * @function optgroup
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {String} [init.label] User-visible label
 * @return {HTMLOptGroupElement}
 */
export function optgroup(init) {
    return htmldom('optgroup', init);
}

/**
 * [The `option` element](https://html.spec.whatwg.org/#the-option-element)
 * represents an option in a select element or as part of a list of suggestions
 * in a datalist element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-option-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535877.aspx)
 *
 * @function option
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {String} [init.label] User-visible label
 * @param {Boolean} [init.selected] Whether the option is selected by default
 * @param {String} [init.value] Value to be used for form submission
 * @return {HTMLOptionElement}
 */
export function option(init) {
    return htmldom('option', init);
}

/**
 * [The `output` element](https://html.spec.whatwg.org/#the-output-element)
 * represents the result of a calculation performed by the application,
 * or the result of a user action.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-output-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt732268.aspx)
 *
 * @function output
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.for] Specifies controls from which the output was calculated
 * @param {String} [init.attrset.form] Associates the control with a form element (ID reference)
 * @param {String} [init.name] Name of form control to use in the [form.elements](https://html.spec.whatwg.org/#dom-form-elements) API
 * @return {HTMLOutputElement}
 *
 * @version HTML5
 */
export function output(init) {
    return htmldom('output', init);
}

/**
 * [The `p` element](https://html.spec.whatwg.org/#the-p-element)
 * represents a paragraph.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-p-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535878.aspx)
 *
 * @function p
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLParagraphElement}
 */
export function p(init) {
    return htmldom('p', init);
}

/**
 * [The `param` element](https://html.spec.whatwg.org/#the-param-element)
 * defines parameters for plugins invoked by object elements.
 * It does not represent anything on its own.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-param-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535880.aspx)
 *
 * @function param
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.name] Name of parameter
 * @param {String} [init.value] Value of parameter
 * @return {HTMLParamElement}
 */
export function param(init) {
    return htmldom('param', init);
}

/**
 * [The `picture` element](https://html.spec.whatwg.org/#the-picture-element)
 * is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-picture-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt574001.aspx)
 *
 * @function picture
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLPictureElement}
 *
 * @version HTML5
 */
export function picture(init) {
    return htmldom('picture', init);
}

/**
 * [The `pre` element](https://html.spec.whatwg.org/#the-pre-element)
 * represents a block of preformatted text, in which structure is represented
 * by typographic conventions rather than by elements.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-pre-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535883.aspx)
 *
 * @function pre
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLPreElement}
 */
export function pre(init) {
    return htmldom('pre', init);
}

/**
 * [The `progress` element](https://html.spec.whatwg.org/#the-progress-element)
 * represents the completion progress of a task. The progress is either indeterminate,
 * indicating that progress is being made but that it is not clear
 * how much more work remains to be done before the task is complete
 * (e.g. because the task is waiting for a remote host to respond),
 * or the progress is a number in the range zero to a maximum,
 * giving the fraction of work that has so far been completed.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-progress-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772953.aspx)
 *
 * @function progress
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.value] Current value of the element
 * @param {Number} [init.max] Upper bound of range
 * @return {HTMLProgressElement}
 *
 * @version HTML5
 */
export function progress(init) {
    return htmldom('progress', init);
}

/**
 * [The `q` element](https://html.spec.whatwg.org/#the-q-element)
 * represents some phrasing content quoted from another source.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-q-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535884.aspx)
 *
 * @function q
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
 * @return {HTMLQuoteElement}
 */
export function q(init) {
    return htmldom('q', init);
}

/**
 * [The `rp` element](https://html.spec.whatwg.org/#the-rp-element)
 * can be used to provide parentheses or other content
 * around a ruby text component of a ruby annotation,
 * to be shown by user agents that don't support ruby annotations.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-rp-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)
 *
 * @function rp
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function rp(init) {
    return htmldom('rp', init);
}

/**
 * [The `rt` element](https://html.spec.whatwg.org/#the-rt-element)
 * marks the ruby text component of a ruby annotation.
 * When it is the child of a ruby element, it doesn't represent anything itself,
 * but the ruby element uses it as part of determining what it represents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-rt-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535885.aspx)
 *
 * @function rt
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function rt(init) {
    return htmldom('rt', init);
}

/**
 * [The `ruby` element](https://html.spec.whatwg.org/#the-ruby-element)
 * allows one or more spans of phrasing content to be marked with ruby annotations.
 * Ruby annotations are short runs of text presented alongside base text,
 * primarily used in East Asian typography as a guide for pronunciation
 * or to include other annotations.
 * In Japanese, this form of typography is also known as furigana.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-ruby-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535886.aspx)
 *
 * @function ruby
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function ruby(init) {
    return htmldom('ruby', init);
}

/**
 * [The `s` element](https://html.spec.whatwg.org/#the-s-element)
 * represents contents that are no longer accurate or no longer relevant.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-s-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535890.aspx)
 *
 * @function s
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function s(init) {
    return htmldom('s', init);
}

/**
 * [The `samp` element](https://html.spec.whatwg.org/#the-samp-element)
 * represents sample or quoted output from another program or computing system.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-samp-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535891.aspx)
 *
 * @function samp
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function samp(init) {
    return htmldom('samp', init);
}

/**
 * [The `script` element](https://html.spec.whatwg.org/#the-script-element)
 * allows authors to include dynamic script and data blocks in their documents.
 * The element does not represent content for the user.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-script-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535892.aspx)
 *
 * @function script
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.type] Type of embedded resource
 * @param {String} [init.charset] Character encoding of the external script resource
 * @param {String} [init.async] Execute script when available, without blocking
 * @param {String} [init.defer] Defer script execution
 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
 * @param {String} [init.nonce] Cryptographic nonce used in Content Security Policy checks [CSP]
 * @return {HTMLScriptElement}
 */
export function script(init) {
    return htmldom('script', init);
}

/**
 * [The `section` element](https://html.spec.whatwg.org/#the-section-element)
 * represents a generic section of a document or application.
 * A section, in this context, is a thematic grouping of content,
 * typically with a heading.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-section-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593059.aspx)
 *
 * @function section
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function section(init) {
    return htmldom('section', init);
}

/**
 * [The `select` element](https://html.spec.whatwg.org/#the-select-element)
 * represents a control for selecting amongst a set of options.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-select-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535893.aspx)
 *
 * @function select
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.autocomplete] Hint for form autofill feature
 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {String} [init.attrset.form] Associates the control with a form element (ID reference)
 * @param {Boolean} [init.multiple] Whether to allow multiple values
 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
 * @param {Boolean} [init.required] Whether the control is required for form submission
 * @param {Number} [init.size] Size of the control
 * @return {HTMLSelectElement}
 */
export function select(init) {
    return htmldom('select', init);
}

/**
 * [The `slot` element](https://html.spec.whatwg.org/#the-slot-element)
 * defines a slot. It is typically used in a shadow tree.
 * A slot element represents its assigned nodes, if any, and its contents otherwise.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-slot-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
 *
 * @function slot
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.name] Name of shadow tree slot
 * @return {HTMLSlotElement}
 *
 * @version HTML5
 */
export function slot(init) {
    return htmldom('slot', init);
}

/**
 * [The `small` element](https://html.spec.whatwg.org/#the-small-element)
 * represents side comments such as small print.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-small-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535894.aspx)
 *
 * @function small
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function small(init) {
    return htmldom('small', init);
}

/**
 * [The `source` element](https://html.spec.whatwg.org/#the-source-element)
 * allows authors to specify multiple alternative source sets for img elements
 * or multiple alternative media resources for media elements.
 * It does not represent anything on its own.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-source-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ff975070.aspx)
 *
 * @function source
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.type] Type of embedded resource
 * @param {String} [init.srcset] Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
 * @param {String} [init.sizes] Image sizes for different page layouts
 * @param {String} [init.media] Applicable media
 * @return {HTMLSourceElement}
 *
 * @version HTML5
 */
export function source(init) {
    return htmldom('source', init);
}

/**
 * [The `span` element](https://html.spec.whatwg.org/#the-span-element)
 * doesn't mean anything on its own,
 * but can be useful when used together with the global attributes,
 * e.g. class, lang, or dir. It represents its children.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-span-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535895.aspx)
 *
 * @function span
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLSpanElement}
 */
export function span(init) {
    return htmldom('span', init);
}

/**
 * [The `strong` element](https://html.spec.whatwg.org/#the-strong-element)
 * represents strong importance, seriousness, or urgency for its contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-strong-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535897.aspx)
 *
 * @function strong
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function strong(init) {
    return htmldom('strong', init);
}

/**
 * [The `style` element](https://html.spec.whatwg.org/#the-style-element)
 * allows authors to embed style information in their documents.
 * The style element is one of several inputs to the styling processing model.
 * The element does not represent content for the user.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-style-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535898.aspx)
 *
 * @function style
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.media] Applicable media
 * @param {String} [init.nonce] Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
 * @param {String} [init.type] Type of embedded resource
 * @param {String} [init.title] Special semantics: CSS style sheet set name.
 * @return {HTMLStyleElement}
 */
export function style(init) {
    return htmldom('style', init);
}

/**
 * [The `sub` element](https://html.spec.whatwg.org/#the-sub-element)
 * represents a subscript.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-sub-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535899.aspx)
 *
 * @function sub
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function sub(init) {
    return htmldom('sub', init);
}

/**
 * [The `summary` element](https://html.spec.whatwg.org/#the-summary-element)
 *  represents a summary, caption, or legend for the rest of the contents
 *  of the summary element's parent details element, if any.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-summary-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
 *
 * @function summary
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function summary(init) {
    return htmldom('summary', init);
}

/**
 * [The `sup` element](https://html.spec.whatwg.org/#the-sup-element)
 * represents a superscript
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-sup-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535900.aspx)
 *
 * @function sup
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function sup(init) {
    return htmldom('sup', init);
}

/**
 * [The `table` element](https://html.spec.whatwg.org/#the-table-element)
 * represents data with more than one dimension, in the form of a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-table-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535901.aspx)
 *
 * @function table
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableElement}
 */
export function table(init) {
    return htmldom('table', init);
}

/**
 * [The `tbody` element](https://html.spec.whatwg.org/#the-tbody-element)
 * represents a block of rows that consist of a body of data for the parent table element,
 * if the tbody element has a parent and it is a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-tbody-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535902.aspx)
 *
 * @function tbody
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableSectionElement}
 */
export function tbody(init) {
    return htmldom('tbody', init);
}

/**
 * [The `td` element](https://html.spec.whatwg.org/#the-td-element)
 * represents a data cell in a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-td-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535903.aspx)
 *
 * @function td
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.colSpan] Number of columns that the cell is to span
 * @param {String} [init.rowSpan] Number of rows that the cell is to span
 * @param {String} [init.headers] The header cells for this cell
 * @return {HTMLTableCellElement}
 */
export function td(init) {
    return htmldom('td', init);
}

/**
 * [The `template` element](https://html.spec.whatwg.org/#the-template-element)
 * is used to declare fragments of HTML that can be cloned and inserted in the document by script.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-template-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt586693.aspx)
 *
 * @function template
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTemplateElement}
 *
 * @version HTML5
 */
export function template(init) {
    return htmldom('template', init);
}

/**
 * [The `textarea` element](https://html.spec.whatwg.org/#the-textarea-element)
 * represents a multiline plain text edit control for the element's raw value.
 * The contents of the control represent the control's default value.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-textarea-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535904.aspx)
 *
 * @function textarea
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.autocomplete] Hint for form autofill feature
 * @param {String} [init.autofocus] Automatically focus the form control when the page is loaded
 * @param {String} [init.cols] Maximum number of characters per line
 * @param {String} [init.dirName] Name of form control to use for sending the element's directionality in form submission
 * @param {String} [init.disabled] Whether the form control is disabled
 * @param {String} [init.form] Associates the control with a form element
 * @param {String} [init.inputMode] Hint for selecting an input modality
 * @param {String} [init.maxLength] Maximum length of value
 * @param {String} [init.minLength] Minimum length of value
 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
 * @param {String} [init.placeholder] User-visible label to be placed within the form control
 * @param {String} [init.readOnly] Whether to allow the value to be edited by the user
 * @param {String} [init.required] Whether the control is required for form submission
 * @param {String} [init.rows] Number of lines to show
 * @param {String} [init.wrap] How the value of the form control is to be wrapped for form submission
 * @return {HTMLTextAreaElement}
 */
export function textarea(init) {
    return htmldom('textarea', init);
}

/**
 * [The `tfoot` element](https://html.spec.whatwg.org/#the-tfoot-element)
 *  represents the block of rows that consist of the column summaries (footers)
 *  for the parent table element, if the tfoot element has a parent and it is a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-tfoot-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535907.aspx)
 *
 * @function tfoot
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableSectionElement}
 */
export function tfoot(init) {
    return htmldom('tfoot', init);
}

/**
 * [The `th` element](https://html.spec.whatwg.org/#the-th-element)
 * represents a header cell in a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-th-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535908.aspx)
 *
 * @function th
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.colSpan] Number of columns that the cell is to span
 * @param {String} [init.rowSpan] Number of rows that the cell is to span
 * @param {String} [init.headers] The header cells for this cell
 * @param {String} [init.scope] Specifies which cells the header cell applies to
 * @param {String} [init.abbr] Alternative label to use for the header cell when referencing the cell in other contexts
 * @return {HTMLTableCellElement}
 */
export function th(init) {
    return htmldom('th', init);
}

/**
 * [The `thead` element](https://html.spec.whatwg.org/#the-thead-element)
 * represents the block of rows that consist of the column labels (headers)
 * for the parent table element, if the thead element has a parent and it is a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-thead-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535909.aspx)
 *
 * @function thead
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableSectionElement}
 */
export function thead(init) {
    return htmldom('thead', init);
}

/**
 * [The `time` element](https://html.spec.whatwg.org/#the-time-element)
 * represents its contents,
 * along with a machine-readable form of those contents in the datetime attribute.
 * The kind of content is limited to various kinds of dates,
 * times, time-zone offsets, and durations, as described below.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-time-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt706248.aspx)
 *
 * @function time
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.datetime] Machine-readable value
 * @return {HTMLTimeElement}
 *
 * @version HTML5
 */
export function time(init) {
    return htmldom('time', init);
}

/**
 * [The `title` element](https://html.spec.whatwg.org/#the-title-element)
 * represents the document's title or name.
 * Authors should use titles that identify their documents
 * even when they are used out of context,
 * for example in a user's history or bookmarks, or in search results.
 * The document's title is often different from its first heading,
 * since the first heading does not have to stand alone when taken out of context.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-title-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535910.aspx)
 *
 * @function title
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTitleElement}
 */
export function title(init) {
    return htmldom('title', init);
}

/**
 * [The `tr` element](https://html.spec.whatwg.org/#the-tr-element)
 * represents a row of cells in a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-tr-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535911.aspx)
 *
 * @function tr
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableRowElement}
 */
export function tr(init) {
    return htmldom('tr', init);
}

/**
 * [The `track` element](https://html.spec.whatwg.org/#the-track-element)
 * allows authors to specify explicit external timed text tracks for media elements.
 * It does not represent anything on its own.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-track-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772958.aspx)
 *
 * @function track
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.kind] The type of text track
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.srclang] Language of the text track
 * @param {String} [init.label] User-visible label
 * @param {Boolean} [init.default] Enable the track if no other text track is more suitable
 * @return {HTMLTrackElement}
 *
 * @version HTML5
 */
export function track(init) {
    return htmldom('track', init);
}

/**
 * [The `u` element](https://html.spec.whatwg.org/#the-u-element)
 * represents a span of text with an unarticulated,
 * though explicitly rendered, non-textual annotation,
 * such as labeling the text as being a proper name in Chinese text
 * (a Chinese proper name mark), or labeling the text as being misspelt.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-u-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535913.aspx)
 *
 * @function u
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function u(init) {
    return htmldom('u', init);
}

/**
 * [The `ul` element](https://html.spec.whatwg.org/#the-ul-element)
 * represents a list of items, where the order of the items is not important — that is,
 * where changing the order would not materially change the meaning of the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-ul-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535914.aspx)
 *
 * @function ul
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLUListElement}
 */
export function ul(init) {
    return htmldom('ul', init);
}

/**
 * [the `var` element](https://html.spec.whatwg.org/#the-var-element)
 * represents a variable.
 * This could be an actual variable in a mathematical expression or programming context,
 * an identifier representing a constant, a symbol identifying a physical quantity,
 * a function parameter, or just be a term used as a placeholder in prose.
 *
 * **`var` is reserved JS keyword so use `variable` instead**
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-var-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535916.aspx)
 *
 * @function variable
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */
export function variable(init) {
    return htmldom('var', init);
}

/**
 * [The `video` element](https://html.spec.whatwg.org/#the-video-element)
 * is used for playing videos or movies, and audio files with captions.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-video-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772959.aspx)
 *
 * @function video
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
 * @param {String} [init.poster] Poster frame to show prior to video playback
 * @param {String} [init.preload] Hints how much buffering the media resource will likely need
 * @param {Boolean} [init.autoplay] Hint that the media resource can be started automatically when the page is loaded
 * @param {Boolean} [init.playsInline] Encourage the user agent to display video content within the element's playback area
 * @param {Boolean} [init.loop] Whether to loop the media resource
 * @param {Number} [init.muted] Whether to mute the media resource by default
 * @param {Boolean} [init.controls] Show user agent controls
 * @param {Number} [init.width] Horizontal dimension
 * @param {Number} [init.height] Vertical dimension
 * @return {HTMLVideoElement}
 *
 * @version HTML5
 */
export function video(init) {
    return htmldom('video', init);
}

/**
 * [The `wbr` element](https://html.spec.whatwg.org/#the-wbr-element)
 * represents a line break opportunity.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-wbr-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)
 *
 * @function wbr
 * @param {String|Array|Node|DOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */
export function wbr(init) {
    return htmldom('wbr', init);
}
