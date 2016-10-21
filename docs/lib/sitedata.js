import replsite from 'raw!./sitedata/replsite.rawjs';
import testcase from 'raw!./sitedata/testcase.rawjs';

const SPLIT_STR = '\n\n';

const chunks = testcase.split(SPLIT_STR).map(src => src.replace(/,$/, '') + '');

chunks.shift();
chunks.pop();

export const data = [replsite, ...chunks].map(src => {
    try {
        const fn = new Function('return ' + src);
        return { src, fn : fn() };
    } catch(error) {
        return { src : error }
    }
});
