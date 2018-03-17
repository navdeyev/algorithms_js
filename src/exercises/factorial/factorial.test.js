import factorial from './factorial';

describe('factorial', () => {

    const testCases = [
        {input: 0, output: 0},
        {input: 1, output: 1},
        {input: 2, output: 2},
        {input: 3, output: 6},
        {input: 4, output: 24},
        {input: 5, output: 120},
        {input: 10, output: 3628800},
        {input: 15, output: 1307674368000}
    ];

    testCases.forEach(testCase => {
        it(`iterative given ${testCase.input} returns ${testCase.output}`, () => {
            // Bad time complexity: O(n), memory complexity O(1)
            expect(factorial.iterative(testCase.input)).toBe(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`simpleRecursion given ${testCase.input} returns ${testCase.output}`, () => {
            // Bad time complexity: O(n), memory complexity O(n) because of recursive stack
            expect(factorial.simpleRecursion(testCase.input)).toBe(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`memoization given ${testCase.input} returns ${testCase.output}`, () => {
            // Bad time complexity on the initial run: O(n), memory complexity O(n)
            // Way better complexity when cache is built.
            expect(factorial.memoization(testCase.input)).toBe(testCase.output);
        });
    });

});