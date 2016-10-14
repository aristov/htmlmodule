import rawSrc from 'raw!./test/test-testcase.rawjs';

const srcChunks = rawSrc.split('\n\n');

srcChunks.shift();
srcChunks.pop();

export const testcase = srcChunks.map(src => {
    src = src.replace(/^\s{4}/gm, '').replace(/,$/, '');
    const fn = new Function('return ' + src);
    return { src, fn : fn() };
});