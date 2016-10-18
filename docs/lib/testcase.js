import test from 'raw!./test/test-testcase.rawjs';
import replsite from 'raw!./replsite.rawjs';

const chunks = test.split('\n\n').map(src =>
    src.replace(/^\s{4}/gm, '').replace(/,$/, '') + '');

chunks.shift();
chunks.pop();

const replfn = new Function('return ' + replsite);

export const testcase = [
    { src : replsite, fn : replfn },
    ...chunks.map(src => {
        const fn = new Function('return ' + src);
        return { src, fn : fn() };
    })
];
