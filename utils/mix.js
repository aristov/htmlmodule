/**
 * Filters and merges given mixes to string for `class` HTML-attribute
 * @param {String|*,String|*,...} mix
 */
const mix = (...mix) => mix.filter(Boolean).join(' ');

export default mix;
