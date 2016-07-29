// polyfills
if(!Object.values) require('object.values').shim();
require('function.name');
require('dom4');

// styles
require('../styles/yandex.all');
require('./showcase.css');

// app
const showcase = require('./showcase').default;
showcase(document.body);
