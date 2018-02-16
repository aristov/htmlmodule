import { HTMLElementAssembler } from './element'

const { HTMLMediaElement } = window

export class HTMLMediaAssembler extends HTMLElementAssembler {
    /**
     * https://www.w3.org/TR/html/semantics-embedded-content.html#dom-htmlmediaelement-load
     */
    load() {
        this.node.load()
    }

    /**
     * @param type
     * @returns {CanPlayTypeResult}
     */
    canPlayType(type) {
        return this.node.canPlayType
    }

    /**
     * @param {Number} time
     */
    fastSeek(time) {
        this.node.fastSeek(time)
    }

    /**
     * @returns {Date}
     */
    getStartDate() {
        return this.node.getStartDate()
    }

    /**
     * https://www.w3.org/TR/html/semantics-embedded-content.html#dom-htmlmediaelement-play
     */
    play() {
        this.node.play()
    }

    /**
     * https://www.w3.org/TR/html/semantics-embedded-content.html#dom-htmlmediaelement-pause
     */
    pause() {
        this.node.pause()
    }

    /**
     * @param {TextTrackKind} kind
     * @param {String} [label='']
     * @param {String} [language='']
     * @returns {TextTrack}
     */
    addTextTrack(kind, label = '', language = '') {
        return this.node.addTextTrack(kind, label, language)
    }

    /**
     * @returns {MediaError}
     */
    get error() {
        return this.node.error
    }

    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {MediaProvider} srcObject
     */
    set srcObject(srcObject) {
        this.node.srcObject = srcObject
    }

    /**
     * @returns {MediaProvider}
     */
    get srcObject() {
        return this.node.srcObject
    }

    /**
     * @returns {String}
     */
    get currentSrc() {
        return this.node.currentSrc
    }

    /**
     * @param {String} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {String}
     */
    get crossOrigin() {
        return this.node.crossOrigin
    }

    /**
     * @returns {Number}
     */
    get networkState() {
        return this.node.networkState
    }

    /**
     * @param {String} preload
     */
    set preload(preload) {
        this.node.preload = preload
    }

    /**
     * @returns {String}
     */
    get preload() {
        return this.node.preload
    }

    /**
     * @returns {TimeRanges}
     */
    get buffered() {
        return this.node.buffered
    }

    /**
     * @returns {Number}
     */
    get readyState() {
        return this.node.readyState
    }

    /**
     * @returns {Boolean}
     */
    get seeking() {
        return this.node.seeking
    }

    /**
     * @param {Number} currentTime
     */
    set currentTime(currentTime) {
        this.node.currentTime = currentTime
    }

    /**
     * @returns {Number}
     */
    get currentTime() {
        return this.node.currentTime
    }

    /**
     * @returns {Number}
     */
    get duration() {
        return this.node.duration
    }

    /**
     * @returns {Boolean}
     */
    get paused() {
        return this.node.paused
    }

    /**
     * @param {Number} defaultPlaybackRate
     */
    set defaultPlaybackRate(defaultPlaybackRate) {
        this.node.defaultPlaybackRate = defaultPlaybackRate
    }

    /**
     * @returns {Number}
     */
    get defaultPlaybackRate() {
        return this.node.defaultPlaybackRate
    }

    /**
     * @param {Number} playbackRate
     */
    set playbackRate(playbackRate) {
        this.node.playbackRate = playbackRate
    }

    /**
     * @returns {Number}
     */
    get playbackRate() {
        return this.node.playbackRate
    }

    /**
     * @returns {TimeRanges}
     */
    get played() {
        return this.node.played
    }

    /**
     * @returns {TimeRanges}
     */
    get seekable() {
        return this.node.seekable
    }

    /**
     * @returns {Boolean}
     */
    get ended() {
        return this.node.ended
    }

    /**
     * @param {Boolean} autoplay
     */
    set autoplay(autoplay) {
        this.node.autoplay = autoplay
    }

    /**
     * @returns {Boolean}
     */
    get autoplay() {
        return this.node.autoplay
    }

    /**
     * @param {Boolean} loop
     */
    set loop(loop) {
        this.node.loop = loop
    }

    /**
     * @returns {Boolean}
     */
    get loop() {
        return this.node.loop
    }

    /**
     * @param {Boolean} controls
     */
    set controls(controls) {
        this.node.controls = controls
    }

    /**
     * @returns {Boolean}
     */
    get controls() {
        return this.node.controls
    }

    /**
     * @param {Number} volume
     */
    set volume(volume) {
        this.node.volume
    }

    /**
     * @returns {Number}
     */
    get volume() {
        return this.node.volume
    }

    /**
     * @param {Boolean} muted
     */
    set muted(muted) {
        this.node.muted = muted
    }

    /**
     * @returns {Boolean}
     */
    get muted() {
        return this.node.muted
    }

    /**
     * @param {Boolean} defaultMuted
     */
    set defaultMuted(defaultMuted) {
        this.node.defaultMuted = defaultMuted
    }

    /**
     * @returns {Boolean}
     */
    get defaultMuted() {
        return this.node.defaultMuted
    }

    /**
     * @returns {AudioTrackList}
     */
    get audioTracks() {
        return this.node.audioTracks
    }

    /**
     * @returns {VideoTrackList}
     */
    get videoTracks() {
        return this.node.videoTracks
    }

    /**
     * @returns {TextTrackList}
     */
    get textTracks() {
        return this.node.textTracks
    }

    /**
     * @returns {Function} HTMLMediaAssembler
     */
    static get baseAssembler() {
        return HTMLMediaAssembler
    }

    /**
     * @returns {window.HTMLMediaElement}
     */
    static get interface() {
        return HTMLMediaElement
    }
}
