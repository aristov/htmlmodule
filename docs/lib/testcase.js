import site from 'raw!./sitedata/replsite.rawjs';
import list from 'raw!./sitedata/testcase.rawjs';

const SPLIT_STR = '\n\n';

const chunks = list.split(SPLIT_STR).map(src => src.replace(/,$/, '') + '');

chunks.shift();
chunks.pop();

const replfn = new Function('return ' + site);

export const testcase = [
    { src : site, fn : replfn },
    ...chunks.map(src => {
        try {
            const fn = new Function('return ' + src);
            return { src, fn : fn() };
        } catch(error) {
            return { src : error }
        }
    })
];
