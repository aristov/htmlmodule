import jsdomify from 'jsdomify';

jsdomify.create();

require('../dom/dom.spec');

jsdomify.destroy();
