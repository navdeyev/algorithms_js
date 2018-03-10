import binarySearch from './binarySearch';

describe('binary search', () => {

  const testCases = [
    {arr: [], target: 0, output: 'Empty array' },
    {arr: [0], target: 0, output: 0},
    {arr: [0, 1], target: 1, output: 1},
    {arr: [0, 1, 2], target: 2, output: 2},
    {arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], target: 3, output: 3},
    {arr: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], target: 80, output: 8},

    {arr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], target: 8, output: 'Array not sorted ascending'},
    {arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], target: 25, output: 'Element not present in the array'}
  ];

  testCases.forEach(testCase => {
    it(`findRecursive given ${testCase.arr} and ${testCase.target} returns ${ testCase.output }`, () => {
      expect(binarySearch.findRecursive(testCase.arr, testCase.target)).toBe(testCase.output);
    });
  });

  testCases.forEach(testCase => {
    it(`findIterative given ${testCase.arr} and ${testCase.target} returns ${ testCase.output }`, () => {
      expect(binarySearch.findIterative(testCase.arr, testCase.target)).toBe(testCase.output);
    });
  });

});