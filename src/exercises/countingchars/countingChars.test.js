import countingChars from './countingChars';

describe('counts chars as we go', () => {

    const testCases = [
        {input: '', output: ''},
        {input: 'aaa', output: 'a3'},
        {input: 'aabbbc', output: 'a2b3c1'},
        {input: 'aabbbaccc', output: 'a2b3a1c3'},
    ];

    testCases.forEach((testCase) => {
        it(`transformFor given ${testCase.input} returns ${testCase.output}`, () => {
            expect(countingChars.transformFor(testCase.input)).toBe(testCase.output);
        });
    });

    testCases.forEach((testCase) => {
        it(`transformFor given ${testCase.input} returns ${testCase.output}`, () => {
            expect(countingChars.transformForEach(testCase.input)).toBe(testCase.output);
        });
    });

    testCases.forEach((testCase) => {
        it(`transformWhile given ${testCase.input} returns ${testCase.output}`, () => {
            expect(countingChars.transformWhile(testCase.input)).toBe(testCase.output);
        });
    });

});

