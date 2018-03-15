import highestProductOf from './highestProductOf';

describe('highestProductOf', () => {

    const testCases = [
        {input: [0, 1, 2], output: 0},
        {input: [1, 2, 3], output: 6},
        {input: [-3, -2, -1], output: -6},
        {input: [-4, -3, -2, -1], output: -6},
        {input: [-5, -4, -3, -2, -1], output: -6},
        {input: [-3, -2, -1, 0], output: 0},
        {input: [1, 2, 3, 4], output: 24},
        {input: [1, 2, 3, 4, 3, 2, 1], output: 36},
        {input: [7, 6, 5, 4, 3, 2, 1], output: 210},
        {input: [-7, 6, 5, 4, 3, 2, 1], output: 120},
        {input: [-7, 6, -5, 4, 3, 2, 1], output: 210},
        {input: [-7, -6, 5, 4, 3, 2, 1], output: 210},
        {input: [-7, -6, -5, 4, 3, 2, 1], output: 168},
    ];

    testCases.forEach(testCase => {
        it(`sortArrayAndMultiplyLastNumbers given array of ${testCase.input} returns ${testCase.output}`, () => {
            // O(nlogn) Time, O(1) Space
            expect(highestProductOf.useEfficientSort(testCase.input)).toBe(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`solveInOneGoWithFinding3MaxAnd2Min given array of ${testCase.input} returns ${testCase.output}`, () => {
            // O(n) Time, O(1) Space
            expect(highestProductOf.solveInOneGoWithFinding3MaxAnd2Min(testCase.input)).toBe(testCase.output);
        });
    });

});