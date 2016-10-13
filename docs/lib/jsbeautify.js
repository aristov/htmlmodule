import jsbeautify from 'js-beautify';

const beautify = jsbeautify.js_beautify;
const defConfig = { indent_size: 4, wrap_line_length: 150 };

export default (code, config) => beautify(code, Object.assign(defConfig, config));
