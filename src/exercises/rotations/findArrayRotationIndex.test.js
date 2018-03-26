import {findArrayRotationIndex} from './findArrayRotationIndex';

describe('find rotation index in an array', () => {

    const testCases = [
        {input: [5, 6, 7, 1, 2, 3], output: 3},
        {input: [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3], output: 9},
        {input: ['g', 'h', 'i', 'j', 'k', 'a', 'b', 'c', 'd', 'e', 'f'], output: 5},
    ];

    testCases.forEach(testCase => {
        it(`findRotationIndex given ${testCase.input} returns ${testCase.output}`, () => {
            expect(findArrayRotationIndex(testCase.input)).toBe(testCase.output);
        });
    });

});