import rotation from './rotate';

describe('rotate an array by n elements', () => {

    const testCases = [
        {input: [1, 2, 3, 4, 5], by: 2, output: [3, 4, 5, 1, 2]},
        {input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], by: 3, output: [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3]},
        {input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], by: 9, output: [10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
    ];

    testCases.forEach(testCase => {
        it(`rotate given ${testCase.input} by ${ testCase.by } elements and returns ${testCase.output}`, () => {
            expect(rotation.rotateOneByOne([...testCase.input], testCase.by)).toEqual(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`rotateUsingSliceBy given ${testCase.input} by ${ testCase.by } elements and returns ${testCase.output}`, () => {
            expect(rotation.rotateUsingSliceBy([...testCase.input], testCase.by)).toEqual(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`rotateUsingSpliceAndConcat given ${testCase.input} by ${ testCase.by } elements and returns ${testCase.output}`, () => {
            expect(rotation.rotateUsingSpliceAndConcat([...testCase.input], testCase.by)).toEqual(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`rotateUsingArrayIndexes given ${testCase.input} by ${ testCase.by } elements and returns ${testCase.output}`, () => {
            expect(rotation.rotateUsingArrayIndexes([...testCase.input], testCase.by)).toEqual(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`rotateUsingReversal given ${testCase.input} by ${ testCase.by } elements and returns ${testCase.output}`, () => {
            expect(rotation.rotateUsingReversal([...testCase.input], testCase.by)).toEqual(testCase.output);
        });
    });

    testCases.forEach(testCase => {
        it(`jugglingAlgorithm given ${testCase.input} by ${ testCase.by } elements and returns ${testCase.output}`, () => {
            expect(rotation.jugglingAlgorithm([...testCase.input], testCase.by)).toEqual(testCase.output);
        });
    });

});
