import {filter, map, reduce, split, test} from 'ramda';

describe('Chapter 4: Currying exercise 1 and 1a', () => {

    const str = 'one two three';
    const splitArray = ['one', 'two', 'three'];

    const words = str => split(' ', str);

    it('Refactor words function to remove all arguments by partially applying the function.', () => {
        expect(words(str)).toEqual(splitArray);

        const curriedWords = split(' ');
        expect(curriedWords(str)).toEqual(splitArray);
    });

    it('Use map to make a new words fn that works on an array of strings.', () => {
        const wordsFromArray = map(split(' '));
        expect(wordsFromArray([str])).toEqual([splitArray]);
        expect(wordsFromArray(['one two', 'three four'])).toEqual([['one', 'two'], ['three', 'four']]);
    });

});

describe('Chapter 4: Currying exercise 2', () => {

    const filterQs = xs => filter(x => x.match(/q/i), xs);

    const testArray = ['apple', 'pear', 'quince'];
    const filtered = ['quince'];

    it('Refactor to remove all arguments by partially applying the functions.', () => {
        expect(filterQs(testArray)).toEqual(filtered);
        // const curriedFilterQs = filter(match(/q/i));
        const curriedFilterQs = filter(test(/q/i));
        expect(curriedFilterQs(testArray)).toEqual(filtered);
    });

});

describe('Chapter 4: Currying exercise 3', () => {

    const _keepHighest = (x, y) => x >= y ? x : y;
    const max = xs => reduce((acc, x) => _keepHighest(acc, x), -Infinity, xs);

    const testArray = [1, 2, 3, 10, 4, 5];
    const expectedMax = 10;

    it('Use the helper function _keepHighest to refactor max to not reference any arguments', () => {
        expect(max(testArray)).toBe(expectedMax);

        const curriedMax = reduce(_keepHighest, -Infinity);
        expect(curriedMax(testArray)).toBe(expectedMax);
    });

});

describe('Chapter 4: Currying bonus exercise 1', () => {

    const testArray = [1, 2, 3];

    it('Wrap array\'s slice to be functional and curried.', () => {
        expect(testArray.slice(0, 2)).toEqual([1, 2]);

        const slice = (start) => (stop) => (xs) => xs.slice(start, stop);
        expect(slice(0)(2)(testArray)).toEqual([1, 2]);
    });

});

describe('Chapter 4: Currying bonus exercise 2', () => {

    const testArray = ['a', 'b', 'c'];
    const expected = ['a', 'b'];

    it('Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.', () => {
        const slice = (start) => (stop) => (xs) => xs.slice(start, stop);
        const take = slice(0);
        expect(take(2)(testArray)).toEqual(expected);
    });

});
