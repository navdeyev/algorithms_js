import {curry} from 'ramda';

export const identity = x => x;
export const add = curry((a, b) => a + b);
export const multiply = curry((a, b) => a * b);

export const join = m => m.join();
export const chain = curry((f, m) => m.map(f).join());
