import { HTMLInstance } from './html.instance';

/**
 * Instant DOM
 * IDOM
 *
 * Instant HTML DOM
 * IHTMLDOM
 *
 * Instant SVG DOM
 * ISVGDOM
 *
 * Instant MathML DOM
 * IMathDOM
 *
 * Instant ARIA DOM
 * IARIADOM
 *
 * RoleType
 */


export const instant = new HTMLInstance;

export const a = init => instant.createElement('a', init);

export const abbr = init => instant.createElement('abbr', init);

export const address = init => instant.createElement('address', init);

export const area = init => instant.createElement('area', init);

export const article = init => instant.createElement('article', init);

export const aside = init => instant.createElement('aside', init);

export const audio = init => instant.createElement('audio', init);

export const b = init => instant.createElement('b', init);

export const base = init => instant.createElement('base', init);

export const bdi = init => instant.createElement('bdi', init);

export const bdo = init => instant.createElement('bdo', init);

export const blockquote = init => instant.createElement('blockquote', init);

export const body = init => instant.createElement('body', init);

export const br = init => instant.createElement('br', init);

export const button = init => instant.createElement('button', init);

export const canvas = init => instant.createElement('canvas', init);

export const caption = init => instant.createElement('caption', init);

export const cite = init => instant.createElement('cite', init);

export const code = init => instant.createElement('code', init);

export const col = init => instant.createElement('col', init);

export const colgroup = init => instant.createElement('colgroup', init);

export const data = init => instant.createElement('data', init);

export const datalist = init => instant.createElement('datalist', init);

export const dd = init => instant.createElement('dd', init);

export const del = init => instant.createElement('del', init);

export const details = init => instant.createElement('details', init);

export const dfn = init => instant.createElement('dfn', init);

export const dialog = init => instant.createElement('dialog', init);

export const div = init => instant.createElement('div', init);

export const dl = init => instant.createElement('dl', init);

export const dt = init => instant.createElement('dt', init);

export const em = init => instant.createElement('em', init);

export const embed = init => instant.createElement('embed', init);

export const fieldset = init => instant.createElement('fieldset', init);

export const figcaption = init => instant.createElement('figcaption', init);

export const figure = init => instant.createElement('figure', init);

export const footer = init => instant.createElement('footer', init);

export const form = init => instant.createElement('form', init);

export const h1 = init => instant.createElement('h1', init);

export const h2 = init => instant.createElement('h2', init);

export const h3 = init => instant.createElement('h3', init);

export const h4 = init => instant.createElement('h4', init);

export const h5 = init => instant.createElement('h5', init);

export const h6 = init => instant.createElement('h6', init);

export const head = init => instant.createElement('head', init);

export const header = init => instant.createElement('header', init);

export const hgroup = init => instant.createElement('hgroup', init);

export const hr = init => instant.createElement('hr', init);

export const html = init => instant.createElement('html', init);

export const i = init => instant.createElement('i', init);

export const iframe = init => instant.createElement('iframe', init);

export const img = init => instant.createElement('img', init);

export const input = init => instant.createElement('input', init);

export const ins = init => instant.createElement('ins', init);

export const kbd = init => instant.createElement('kbd', init);

export const keygen = init => instant.createElement('keygen', init);

export const label = init => instant.createElement('label', init);

export const legend = init => instant.createElement('legend', init);

export const li = init => instant.createElement('li', init);

export const link = init => instant.createElement('link', init);

export const main = init => instant.createElement('main', init);

export const map = init => instant.createElement('map', init);

export const mark = init => instant.createElement('mark', init);

// todo MathInstance
// export const math = init => instance.createElement('math', init);

export const menu = init => instant.createElement('menu', init);

export const menuitem = init => instant.createElement('menuitem', init);

export const meta = init => instant.createElement('meta', init);

export const meter = init => instant.createElement('meter', init);

export const nav = init => instant.createElement('nav', init);

export const noscript = init => instant.createElement('noscript', init);

export const object = init => instant.createElement('object', init);

export const ol = init => instant.createElement('ol', init);

export const optgroup = init => instant.createElement('optgroup', init);

export const option = init => instant.createElement('option', init);

export const output = init => instant.createElement('output', init);

export const p = init => instant.createElement('p', init);

export const param = init => instant.createElement('param', init);

export const picture = init => instant.createElement('picture', init);

export const pre = init => instant.createElement('pre', init);

export const progress = init => instant.createElement('progress', init);

export const q = init => instant.createElement('q', init);

export const rp = init => instant.createElement('rp', init);

export const rt = init => instant.createElement('rt', init);

export const ruby = init => instant.createElement('ruby', init);

export const s = init => instant.createElement('s', init);

export const samp = init => instant.createElement('samp', init);

export const script = init => instant.createElement('script', init);

export const section = init => instant.createElement('section', init);

export const select = init => instant.createElement('select', init);

export const slot = init => instant.createElement('slot', init);

export const small = init => instant.createElement('small', init);

export const source = init => instant.createElement('source', init);

export const span = init => instant.createElement('span', init);

export const strong = init => instant.createElement('strong', init);

export const style = init => instant.createElement('style', init);

export const sub = init => instant.createElement('sub', init);

export const summary = init => instant.createElement('summary', init);

export const sup = init => instant.createElement('sup', init);

// todo SVGInstance
// export const svg = init => instance.createElement('svg', init);

export const table = init => instant.createElement('table', init);

export const tbody = init => instant.createElement('tbody', init);

export const td = init => instant.createElement('td', init);

export const template = init => instant.createElement('template', init);

export const textarea = init => instant.createElement('textarea', init);

export const tfoot = init => instant.createElement('tfoot', init);

export const th = init => instant.createElement('th', init);

export const thead = init => instant.createElement('thead', init);

export const time = init => instant.createElement('time', init);

export const title = init => instant.createElement('title', init);

export const tr = init => instant.createElement('tr', init);

export const track = init => instant.createElement('track', init);

export const u = init => instant.createElement('u', init);

export const ul = init => instant.createElement('ul', init);

// `var` is JS-keyword
export const variable = init => instant.createElement('var', init);

export const video = init => instant.createElement('video', init);

export const wbr = init => instant.createElement('wbr', init);

