import {curry} from 'ramda';
import {add} from './common';
import {Maybe} from './maybe';
import {IO} from './io';

describe('Chapter 10: Exercise 1', () => {

    it('Write a function that adds two possibly null numbers together using `Maybe` and `ap`.', () => {
        const safeAdd = curry((a, b) => a.map(add).ap(b));
        expect(safeAdd(Maybe.of(2), Maybe.of(3))).toEqual({$value: 5});
    });

    it('Write a function that adds two possibly null numbers together using `Maybe` and `ap`.', () => {
        const safeAdd = curry((a, b) => Maybe.of(add).ap(a).ap(b));
        expect(safeAdd(Maybe.of(2), Maybe.of(3))).toEqual({$value: 5});
    });

});

describe('Chapter 10: Exercise 2', () => {

    const liftA2 = curry((g, f1, f2) => f1.map(g).ap(f2));

    it('Rewrite `safeAdd` from exercise_b to use `liftA2` instead of `ap`.', () => {
        const safeAdd = liftA2(add);
        expect(safeAdd(Maybe.of(2), Maybe.of(3))).toEqual({$value: 5});
    });

});

describe('Chapter 10: Exercise 3', () => {

    const localStorage = {
        player1: {id: 1, name: 'Albert'},
        player2: {id: 2, name: 'Theresa'},
    };
    const getFromCache = x => new IO(() => localStorage[x]);
    const game = curry((p1, p2) => `${p1.name} vs ${p2.name}`);

    it('Write an IO that gets both player1 and player2 from the cache and starts the game.', () => {
        const startGame = IO.of(game).ap(getFromCache('player1')).ap(getFromCache('player2'));
        expect(startGame.join()).toEqual('Albert vs Theresa');
    });

});