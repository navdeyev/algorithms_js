import {compose, map, prop, split} from 'ramda';
import {chain, join} from './common';
import {Maybe} from './maybe';
import {Either, either, left} from './either';
import {IO} from './io';

describe('Chapter 11: Exercise 1', () => {

    it('Write a natural transformation that converts `Either b a` to `Maybe a`', () => {
        const eitherToMaybe = either(() => Maybe.of(null), Maybe.of);
        expect(eitherToMaybe(left(''))).toEqual(Maybe.of(null));
        expect(eitherToMaybe(Either.of(''))).toEqual(Maybe.of(''));
    });

});

describe('Chapter 11: Exercise 2', () => {

    const eitherToTask = either('not found', IO.of);
    const user = {id: 1, name: 'Albert'};
    const findUserById = () => IO.of(Either.of(user));

    it('Using `eitherToTask`, simplify `findNameById` to remove the nested `Either`.', () => {
        const findNameById = compose(
            join,
            join,
            map(map(prop('name'))),
            findUserById
        );
        expect(findNameById(1)).toBe('Albert');

        const findNameByIdWithEither = compose(
            join,
            map(prop('name')),
            chain(eitherToTask),
            findUserById
        );
        expect(findNameByIdWithEither(1)).toEqual('Albert');
    });

});


describe('Chapter 11: Exercise 3', () => {

    it('Write the isomorphisms between String and [Char].', () => {
        const str = 'abc';
        const arr = ['a', 'b', 'c'];
        const strToList = split('');
        expect(strToList(str)).toEqual(arr);

        const listToStr = (xs) => xs.join('');
        expect(listToStr(arr)).toBe(str);
    });

});