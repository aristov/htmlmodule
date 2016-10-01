import { HTMLInstance } from './html.instance';

export const instance = new HTMLInstance;

export const a = propset => instance.createElement('a', propset);

export const abbr = propset => instance.createElement('abbr', propset);

export const address = propset => instance.createElement('address', propset);

export const area = propset => instance.createElement('area', propset);

export const article = propset => instance.createElement('article', propset);

export const aside = propset => instance.createElement('aside', propset);

export const audio = propset => instance.createElement('audio', propset);

export const b = propset => instance.createElement('b', propset);

export const base = propset => instance.createElement('base', propset);

export const bdi = propset => instance.createElement('bdi', propset);

export const bdo = propset => instance.createElement('bdo', propset);

export const blockquote = propset => instance.createElement('blockquote', propset);

export const body = propset => instance.createElement('body', propset);

export const br = propset => instance.createElement('br', propset);

export const button = propset => instance.createElement('button', propset);

export const canvas = propset => instance.createElement('canvas', propset);

export const caption = propset => instance.createElement('caption', propset);

export const cite = propset => instance.createElement('cite', propset);

export const code = propset => instance.createElement('code', propset);

export const col = propset => instance.createElement('col', propset);

export const colgroup = propset => instance.createElement('colgroup', propset);

export const data = propset => instance.createElement('data', propset);

export const datalist = propset => instance.createElement('datalist', propset);

export const dd = propset => instance.createElement('dd', propset);

export const del = propset => instance.createElement('del', propset);

export const details = propset => instance.createElement('details', propset);

export const dfn = propset => instance.createElement('dfn', propset);

export const dialog = propset => instance.createElement('dialog', propset);

export const div = propset => instance.createElement('div', propset);

export const dl = propset => instance.createElement('dl', propset);

export const dt = propset => instance.createElement('dt', propset);

export const em = propset => instance.createElement('em', propset);

export const embed = propset => instance.createElement('embed', propset);

export const fieldset = propset => instance.createElement('fieldset', propset);

export const figcaption = propset => instance.createElement('figcaption', propset);

export const figure = propset => instance.createElement('figure', propset);

export const footer = propset => instance.createElement('footer', propset);

export const form = propset => instance.createElement('form', propset);

export const h1 = propset => instance.createElement('h1', propset);

export const h2 = propset => instance.createElement('h2', propset);

export const h3 = propset => instance.createElement('h3', propset);

export const h4 = propset => instance.createElement('h4', propset);

export const h5 = propset => instance.createElement('h5', propset);

export const h6 = propset => instance.createElement('h6', propset);

export const head = propset => instance.createElement('head', propset);

export const header = propset => instance.createElement('header', propset);

export const hgroup = propset => instance.createElement('hgroup', propset);

export const hr = propset => instance.createElement('hr', propset);

export const html = propset => instance.createElement('html', propset);

export const i = propset => instance.createElement('i', propset);

export const iframe = propset => instance.createElement('iframe', propset);

export const img = propset => instance.createElement('img', propset);

export const input = propset => instance.createElement('input', propset);

export const ins = propset => instance.createElement('ins', propset);

export const kbd = propset => instance.createElement('kbd', propset);

export const keygen = propset => instance.createElement('keygen', propset);

export const label = propset => instance.createElement('label', propset);

export const legend = propset => instance.createElement('legend', propset);

export const li = propset => instance.createElement('li', propset);

export const link = propset => instance.createElement('link', propset);

export const main = propset => instance.createElement('main', propset);

export const map = propset => instance.createElement('map', propset);

export const mark = propset => instance.createElement('mark', propset);

// todo MathInstance
// export const math = propset => instance.createElement('math', propset);

export const menu = propset => instance.createElement('menu', propset);

export const menuitem = propset => instance.createElement('menuitem', propset);

export const meta = propset => instance.createElement('meta', propset);

export const meter = propset => instance.createElement('meter', propset);

export const nav = propset => instance.createElement('nav', propset);

export const noscript = propset => instance.createElement('noscript', propset);

export const object = propset => instance.createElement('object', propset);

export const ol = propset => instance.createElement('ol', propset);

export const optgroup = propset => instance.createElement('optgroup', propset);

export const option = propset => instance.createElement('option', propset);

export const output = propset => instance.createElement('output', propset);

export const p = propset => instance.createElement('p', propset);

export const param = propset => instance.createElement('param', propset);

export const picture = propset => instance.createElement('picture', propset);

export const pre = propset => instance.createElement('pre', propset);

export const progress = propset => instance.createElement('progress', propset);

export const q = propset => instance.createElement('q', propset);

export const rp = propset => instance.createElement('rp', propset);

export const rt = propset => instance.createElement('rt', propset);

export const ruby = propset => instance.createElement('ruby', propset);

export const s = propset => instance.createElement('s', propset);

export const samp = propset => instance.createElement('samp', propset);

export const script = propset => instance.createElement('script', propset);

export const section = propset => instance.createElement('section', propset);

export const select = propset => instance.createElement('select', propset);

export const slot = propset => instance.createElement('slot', propset);

export const small = propset => instance.createElement('small', propset);

export const source = propset => instance.createElement('source', propset);

export const span = propset => instance.createElement('span', propset);

export const strong = propset => instance.createElement('strong', propset);

export const style = propset => instance.createElement('style', propset);

export const sub = propset => instance.createElement('sub', propset);

export const summary = propset => instance.createElement('summary', propset);

export const sup = propset => instance.createElement('sup', propset);

// todo SVGInstance
// export const svg = propset => instance.createElement('svg', propset);

export const table = propset => instance.createElement('table', propset);

export const tbody = propset => instance.createElement('tbody', propset);

export const td = propset => instance.createElement('td', propset);

export const template = propset => instance.createElement('template', propset);

export const textarea = propset => instance.createElement('textarea', propset);

export const tfoot = propset => instance.createElement('tfoot', propset);

export const th = propset => instance.createElement('th', propset);

export const thead = propset => instance.createElement('thead', propset);

export const time = propset => instance.createElement('time', propset);

export const title = propset => instance.createElement('title', propset);

export const tr = propset => instance.createElement('tr', propset);

export const track = propset => instance.createElement('track', propset);

export const u = propset => instance.createElement('u', propset);

export const ul = propset => instance.createElement('ul', propset);

// `var` is JS-keyword
export const variable = propset => instance.createElement('var', propset);

export const video = propset => instance.createElement('video', propset);

export const wbr = propset => instance.createElement('wbr', propset);

