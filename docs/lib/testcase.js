import raw from 'raw!./test/test-testcase.rawjs';

const chunks = raw.split('\n\n');

chunks.shift();
chunks.pop();

export const testcase = chunks.map(src => {
    src = src.replace(/^\s{4}/gm, '').replace(/,$/, '') + '';
    const fn = new Function('return ' + src);
    return { src, fn : fn() };
});
