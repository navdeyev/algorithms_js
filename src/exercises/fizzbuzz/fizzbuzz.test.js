import fizzBuzz from './fizzbuzz';

describe('fizzbuzz replaces multiples of 3 with fizz, multiples of 5 with buzz, multiples of both 3 and 5 with fizzbuzz', () => {

    const expectedResult15 = '1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz';
    const expectedResult35 = '1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, buzz, fizz, 22, 23, fizz, buzz, 26, fizz, 28, 29, fizzbuzz, 31, 32, fizz, 34, buzz';

    it('uses no repeated modulus checks, numbers hardcoded', () => {
        expect(fizzBuzz.noRepeatedModuleChecks(15)).toBe(expectedResult15);
        expect(fizzBuzz.noRepeatedModuleChecks(35)).toBe(expectedResult35);
    });

    it('uses an array.apply to generate a cycle, map to get index, numbers hardcoded', () => {
        expect(fizzBuzz.usingArrayApplyToGenerateCycle(15)).toBe(expectedResult15);
        expect(fizzBuzz.usingArrayApplyToGenerateCycle(35)).toBe(expectedResult35);
    });

    const markers = [
        {number: 3, text: 'fizz'},
        {number: 5, text: 'buzz'}
    ];

    it('uses two cycles', () => {
        expect(fizzBuzz.usingTwoCyclesToIterateOverNumbersAndOverMarkers(15, markers)).toBe(expectedResult15);
        expect(fizzBuzz.usingTwoCyclesToIterateOverNumbersAndOverMarkers(35, markers)).toBe(expectedResult35);
    });

    it('uses an array.appy to generate a cycle, markers reduce to get iteration output', () => {
        expect(fizzBuzz.usingArrayApplyToGenerateCycleAndMarkersReduce(15, markers)).toBe(expectedResult15);
        expect(fizzBuzz.usingArrayApplyToGenerateCycleAndMarkersReduce(35, markers)).toBe(expectedResult35);
    });

    it('uses generated array to reduce on output of markers reduce', () => {
        expect(fizzBuzz.usingGeneratedArrayToRunReduceOnOutputOfMarkersReduce(15, markers)).toBe(expectedResult15);
        expect(fizzBuzz.usingGeneratedArrayToRunReduceOnOutputOfMarkersReduce(35, markers)).toBe(expectedResult35);
    });

});


