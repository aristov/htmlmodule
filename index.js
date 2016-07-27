require('./polyfills/Object.js');
require('./showcase.js');

require('./index.css');

const ua = navigator.userAgent.toLowerCase();
if(ua.includes('firefox')) require('./styles/yandex/grid.moz.css');
if(ua.includes('webkit')) require('./styles/yandex/grid.webkit.css');
