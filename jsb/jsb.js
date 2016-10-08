import beautify from 'js-beautify';

const jsb = beautify.js_beautify;
const jsbConfig = { indent_size: 4, wrap_line_length: 150 };

export default (code, config) => jsb(code, Object.assign(jsbConfig, config));
