require('./yandex.all.css');

const ua = navigator.userAgent.toLowerCase();
if(ua.includes('firefox')) require('./yandex/grid.moz.css');
if(ua.includes('webkit')) require('./yandex/grid.webkit.css');
