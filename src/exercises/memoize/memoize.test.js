import {memoize} from './memoize';

describe('memoize', () => {

    it('stores the execution result based on passed down arguments', () => {
        const fn = jest.fn((number) => '' + number);
        const memoizedFn = memoize(fn);

        // The first time we execute memoizedFn with a specific parameter,
        // a passed down function is executed and a cached value is created
        expect(memoizedFn(1)).toBe('1');

        // The second time we execute memoizedFn with the same parameters,
        // the value is already pre-calculated and the passed down function is not executed
        expect(memoizedFn(1)).toBe('1');

        // Hence we can verify that the passed down function was executed only once
        expect(fn.mock.calls.length).toBe(1);
    });

});