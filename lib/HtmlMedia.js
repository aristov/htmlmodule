import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#htmlmediaelement
 * @abstract
 */
export class HtmlMedia extends HtmlElem
{
  /**
   * @see https://www.w3.org/TR/html/single-page.html#dom-htmlmediaelement-load
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
   * @param {number} time
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
   * @see https://www.w3.org/TR/html/single-page.html#dom-htmlmediaelement-play
   */
  play() {
    this.node.play()
  }

  /**
   * @see https://www.w3.org/TR/html/single-page.html#dom-htmlmediaelement-pause
   */
  pause() {
    this.node.pause()
  }

  /**
   * @param {TextTrackKind} kind
   * @param {string} [label='']
   * @param {string} [language='']
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
   * @param {string} src
   */
  set src(src) {
    this.node.src = src
  }

  /**
   * @returns {string}
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
   * @returns {string}
   */
  get currentSrc() {
    return this.node.currentSrc
  }

  /**
   * @param {string} crossOrigin
   */
  set crossOrigin(crossOrigin) {
    this.node.crossOrigin = crossOrigin
  }

  /**
   * @returns {string}
   */
  get crossOrigin() {
    return this.node.crossOrigin
  }

  /**
   * @returns {number}
   */
  get networkState() {
    return this.node.networkState
  }

  /**
   * @param {string} preload
   */
  set preload(preload) {
    this.node.preload = preload
  }

  /**
   * @returns {string}
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
   * @returns {number}
   */
  get readyState() {
    return this.node.readyState
  }

  /**
   * @returns {boolean}
   */
  get seeking() {
    return this.node.seeking
  }

  /**
   * @param {number} currentTime
   */
  set currentTime(currentTime) {
    this.node.currentTime = currentTime
  }

  /**
   * @returns {number}
   */
  get currentTime() {
    return this.node.currentTime
  }

  /**
   * @returns {number}
   */
  get duration() {
    return this.node.duration
  }

  /**
   * @returns {boolean}
   */
  get paused() {
    return this.node.paused
  }

  /**
   * @param {number} defaultPlaybackRate
   */
  set defaultPlaybackRate(defaultPlaybackRate) {
    this.node.defaultPlaybackRate = defaultPlaybackRate
  }

  /**
   * @returns {number}
   */
  get defaultPlaybackRate() {
    return this.node.defaultPlaybackRate
  }

  /**
   * @param {number} playbackRate
   */
  set playbackRate(playbackRate) {
    this.node.playbackRate = playbackRate
  }

  /**
   * @returns {number}
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
   * @returns {boolean}
   */
  get ended() {
    return this.node.ended
  }

  /**
   * @param {boolean} autoplay
   */
  set autoplay(autoplay) {
    this.node.autoplay = autoplay
  }

  /**
   * @returns {boolean}
   */
  get autoplay() {
    return this.node.autoplay
  }

  /**
   * @param {boolean} loop
   */
  set loop(loop) {
    this.node.loop = loop
  }

  /**
   * @returns {boolean}
   */
  get loop() {
    return this.node.loop
  }

  /**
   * @param {boolean} controls
   */
  set controls(controls) {
    this.node.controls = controls
  }

  /**
   * @returns {boolean}
   */
  get controls() {
    return this.node.controls
  }

  /**
   * @param {number} volume
   */
  set volume(volume) {
    this.node.volume
  }

  /**
   * @returns {number}
   */
  get volume() {
    return this.node.volume
  }

  /**
   * @param {boolean} muted
   */
  set muted(muted) {
    this.node.muted = muted
  }

  /**
   * @returns {boolean}
   */
  get muted() {
    return this.node.muted
  }

  /**
   * @param {boolean} defaultMuted
   */
  set defaultMuted(defaultMuted) {
    this.node.defaultMuted = defaultMuted
  }

  /**
   * @returns {boolean}
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
   * @returns {constructor} HtmlMedia
   */
  static get superAssembler() {
    return HtmlMedia
  }
}
