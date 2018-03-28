import insertionSort from './insertionSort';
import selectionSort from './selectionSort';
import quickSort from './quickSort';

describe('Different sorting algorithms', () => {

    const testCases = [
        {input: [1, 2, 3, 4, 1, 2, 4], output: [1, 1, 2, 2, 3, 4, 4]},
        {input: [100, 33, 27, 89, 27, 99, 33, 99, 100], output: [27, 27, 33, 33, 89, 99, 99, 100, 100]},
        {input: [9, 1, 5, 3, 4, 2, 8, 6, 7, 0], output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
    ];

    testCases.forEach((testCase) => {
        it(`selectionSort given ${testCase.input} returns ${testCase.output}`, () => {
            expect(selectionSort([...testCase.input])).toEqual(testCase.output);
        });
    });

    testCases.forEach((testCase) => {
        it(`insertionSort given ${testCase.input} returns ${testCase.output}`, () => {
            expect(insertionSort([...testCase.input])).toEqual(testCase.output);
        });
    });

    testCases.forEach((testCase) => {
        it(`quickSort given ${testCase.input} returns ${testCase.output}`, () => {
            expect(quickSort([...testCase.input])).toEqual(testCase.output);
        });
    });

});
