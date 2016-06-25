export const mix = (...mix) => mix.filter(mix => typeof mix === 'string' && mix).join(' ');
