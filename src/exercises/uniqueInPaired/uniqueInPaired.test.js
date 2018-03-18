import impl from './uniqueInPaired';

describe('Find unique integer in an array of paired integers', () => {

    const testCases = [
        {input: [1, 2, 3, 4, 1, 2, 4], output: 3},
        {input: [1, 2, 3, 4, 3, 2, 4], output: 1},
        {input: [1, 2, 3, 1, 2, 3, 4], output: 4},
        {input: [100, 33, 27, 89, 27, 99, 33, 99, 100], output: 89},
        {input: [100, 33, 27, 89, 27, 99, 33, 99, 89], output: 100},
        {input: [100, 33, 27, 89, 27, 99, 33, 100, 89], output: 99}
    ];

    testCases.forEach((testCase) => {
        it(`usingSortedArray given ${testCase.input} returns ${testCase.output}`, () => {
            expect(impl.usingSortedArray(testCase.input)).toEqual(testCase.output);
        });
    });

    testCases.forEach((testCase) => {
        it(`usingSortedArrayComparingPairs given ${testCase.input} returns ${testCase.output}`, () => {
            expect(impl.usingSortedArrayComparingPairs(testCase.input)).toEqual(testCase.output);
        });
    });

    testCases.forEach((testCase) => {
        it(`usingMapWithNumberOfAppearances given ${testCase.input} returns ${testCase.output}`, () => {
            expect(impl.usingMapWithNumberOfAppearances(testCase.input)).toEqual(testCase.output);
        });
    });

});
