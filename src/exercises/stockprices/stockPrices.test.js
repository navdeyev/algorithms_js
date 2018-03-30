import stockPrices from './stockPrices';

describe('calculates the max possible profit', () => {

    const testCases = [
        {output: 0, input: undefined},
        {output: 0, input: [1]},
        {output: 0, input: [1, 1, 1]},
        {output: 2, input: [1, 3]},
        {output: 9, input: [2, 11, 7, 9, 8, 9]},
        {output: 6, input: [10, 7, 5, 8, 11, 9]},
        {output: 4, input: [10, 7, 9, 8, 11, 5]},
        {output: 4, input: [7, 11, 9, 4, 7, 2]},
        {output: 7, input: [7, 11, 2, 6, 8, 9]},
        {output: 6, input: [6, 11, 2, 8, 6, 5]},
        {output: 2, input: [7, 9, 5, 6, 3, 2]},
        {output: 8, input: [2, 3, 10, 6, 4, 8, 1]},
    ];

    testCases.forEach(testCase => {
        it(`getMaxProfitPerShare and when given ${ testCase.input } returns ${ testCase.output } `, () => {
            expect(stockPrices.getMaxProfit(testCase.input)).toBe(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`getMaxProfitNoMaxDiffArray and when given ${ testCase.input } returns ${ testCase.output }`, () => {
            expect(stockPrices.getMaxProfitNoMaxDiffArray(testCase.input)).toBe(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`getMaxProfitStoringMaxAndMin and when given ${ testCase.input } returns ${ testCase.output }`, () => {
            expect(stockPrices.getMaxProfitStoringMaxAndMin(testCase.input)).toBe(testCase.output);
        });
    });

});