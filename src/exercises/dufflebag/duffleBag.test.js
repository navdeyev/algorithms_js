import {duffleBagValue} from './duffleBag';

describe('thief is trying to steal weighted items with the best value', () => {

    const testCases = [
        {
            input: [
                {weight: 7, value: 160},
                {weight: 3, value: 90},
                {weight: 2, value: 15}
            ],
            allowedWeight: 20,
            maxProfit: 555 // 6 * 90 + 1 * 15
        },
        {
            input: [
                {weight: 7, value: 160},
                {weight: 2, value: 15},
                {weight: 50, value: 15},
                {weight: 10, value: 1},
                {weight: 1, value: 10},
                {weight: 6, value: 140},
            ],
            allowedWeight: 20,
            maxProfit: 440 // 3 * 140 + 2 * 10
        }

    ];

    testCases.forEach(testCase => {
        it(`duffleBagValue given an object array gains ${ testCase.maxProfit }`, () => {
            expect(duffleBagValue([...testCase.input], testCase.allowedWeight)).toBe(testCase.maxProfit);
        });
    });

});