export const BACKSPACE = 8;
export const TAB = 9;
export const ENTER = 13;
export const ESCAPE = 27;
export const SPACE = 32;
export const ARROWS = { LEFT : 37, UP : 38, RIGHT : 39, DOWN : 40 };
export const DIGITS = Array.from(new Array(10)).map((v, i) => i + 48);
export const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((res, letter, i) => (res[letter] = i + 65, res), {});
