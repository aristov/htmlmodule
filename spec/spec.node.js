import jsdomify from 'jsdomify';

jsdomify.create();

require('./spec');

jsdomify.destroy();
