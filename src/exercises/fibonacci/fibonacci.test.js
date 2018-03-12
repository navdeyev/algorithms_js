import fibonacci from './fibonacci';

describe('fibonacci', () => {
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
  const testCases = [
    {input: 1, output: 0},
    {input: 2, output: 1},
    {input: 3, output: 1},
    {input: 4, output: 2},
    {input: 5, output: 3},
    {input: 6, output: 5},
    {input: 7, output: 8},
    {input: 8, output: 13},
    {input: 9, output: 21},
    {input: 10, output: 34},
    {input: 40, output: 63245986},
    {input: 60, output: 956722026041},
    {input: 100, output: 218922995834555200000},
  ];

  testCases.forEach(testCase => {
    it(`simpleIteration given ${testCase.input} returns ${testCase.output}`, () => {
      // Bad time complexity: O(n), memory complexity O(1)
      expect(fibonacci.simpleIteration(testCase.input)).toBe(testCase.output);
    });
  });

  testCases.forEach(testCase => {
    it(`fullCalculationArray given ${testCase.input} returns ${testCase.output}`, () => {
      // Bad time complexity: O(n), Memory usage also increased by O(n)
      expect(fibonacci.fullCalculationArray(testCase.input)).toBe(testCase.output);
    });
  });

  testCases.forEach(testCase => {
    it(`threeElementArray given ${testCase.input} returns ${testCase.output}`, () => {
      // Bad time complexity: O(n)
      expect(fibonacci.threeElementArray(testCase.input)).toBe(testCase.output);
    });
  });

  const simpleRecursionTestCases = testCases.slice(0, testCases.length - 3);
  simpleRecursionTestCases.forEach(testCase => {
    it(`simpleRecursion given ${testCase.input} returns ${testCase.output}`, () => {
      //Very time consuming on bigger numbers O(2^n) - hence running tests for smaller numbers
      //Might get out of control fast - stack overflow;
      expect(fibonacci.simpleRecursion(testCase.input)).toBe(testCase.output);
    });
  });

  testCases.forEach(testCase => {
    it(`memoization given ${testCase.input} returns ${testCase.output}`, () => {
      // Bad time complexity: O(n) for the first run, Memory usage also increased by O(n)
      // Subsequent runs, when cache is built - O(M + q) where M is the max of all input n and q is the number of queries.
      // Subsequent runs memory complexity becomes O(n)
      expect(fibonacci.memoization(testCase.input)).toBe(testCase.output);
    });
  });

  //Binet's formula expects the sequence to start with 1;
  const binetFormulaTestcases = testCases.slice(0, testCases.length - 1);
  binetFormulaTestcases.forEach(testCase => {
    it(`Binet's formula given ${testCase.input} returns ${testCase.output}`, () => {
      // If we are discounting all mathematical operations, complexity is O(1)
      expect(fibonacci.binetsFormula(testCase.input - 1)).toBe(testCase.output);
    });
  });

});