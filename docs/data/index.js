import index from 'raw!./index.rawjs';
import testcase from 'raw!././testcase.rawjs';

const SPLIT_STR = '\n\n';

const chunks = testcase.split(SPLIT_STR).map(src => src.replace(/,$/, ''));

chunks.shift();
chunks.pop();

export const data = [index, ...chunks];
