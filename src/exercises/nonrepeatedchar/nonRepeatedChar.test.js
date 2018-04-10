import nonRepeatedChar from './nonRepeatedChar';

describe('finds first non-repeated char in the string', () => {

    const testCases = [
        { input: 'total', output: 'o'},
        { input: 'teeter', output: 'r'},
        { input: 'teeterr', output: ''},
    ];

    testCases.forEach((testCase) => {
        it(`bruteForce given '${testCase.input}' returns '${testCase.output}'`, () => {
            expect(nonRepeatedChar.bruteForceTwoForLoops(testCase.input)).toBe(testCase.output);
        });
    });

    testCases.forEach((testCase) => {
        it(`storingNumberOfAppearancesInAMap given '${testCase.input}' returns '${testCase.output}'`, () => {
            expect(nonRepeatedChar.storingNumberOfAppearancesInAMap(testCase.input)).toBe(testCase.output);
        });
    });

});