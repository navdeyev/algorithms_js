import mergeRanges from './mergeRanges';

describe('merge ranges', () => {

    const testCases = [
        {
            input: [
                {start: 0, end: 1}, {start: 3, end: 5},
                {start: 4, end: 8}, {start: 4, end: 7},
                {start: 10, end: 12}, {start: 9, end: 10}
            ],
            output: [{start: 0, end: 1}, {start: 3, end: 8}, {start: 9, end: 12}]
        },
        {
            input: [{start: 1, end: 3}, {start: 2, end: 6}, {start: 8, end: 10}, {start: 15, end: 18}],
            output: [{start: 1, end: 6}, {start: 8, end: 10}, {start: 15, end: 18}]
        },
        {
            input: [{start: 6, end: 8}, {start: 1, end: 9}, {start: 2, end: 4}, {start: 4, end: 7}],
            output: [{start: 1, end: 9}]
        }
    ];

    testCases.forEach(testCase => {
        it(`usingStackAndSort given an array of ranges returns merged ranges`, () => {
            expect(mergeRanges(testCase.input)).toEqual(testCase.output);
        });
    })
});