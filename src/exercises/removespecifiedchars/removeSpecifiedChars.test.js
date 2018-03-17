import removeSpecifiedChars from './removeSpecifiedChars';

describe('any chars from remove string must be deleted from str string', () => {

    const testCases = [
        {
            str: 'Dough & nut!',
            remove: ' &',
            output: 'Doughnut!'
        },
        {
            str: 'Fortune favors the bold.',
            remove: 'fot',
            output: 'Frune avrs he bld.'
        },
        {
            str: 'Better to remain silent and be thought a fool that to speak and remove all doubt',
            remove: 'Btelr',
            output: ' o main sin and b hough a foo ha o spak and mov a doub'
        }
    ];

    testCases.forEach((test) => {
        it(`copyingToResIfCharIsNotFoundInRemoveUsingFunction removes '${test.remove}' chars from '${test.str}' returning '${test.output}'`, () => {
            expect(removeSpecifiedChars.copyingToResIfCharIsNotFoundInRemoveUsingFunction(test.str, test.remove)).toBe(test.output);
        });
    });

    testCases.forEach((test) => {
        it(`copyingToResIfCharIsNotFoundInRemoveUsingMap removes '${test.remove}' chars from '${test.str}' returning '${test.output}'`, () => {
            expect(removeSpecifiedChars.copyingToResIfCharIsNotFoundInRemoveUsingMap(test.str, test.remove)).toBe(test.output);
        });
    });

    testCases.forEach((test) => {
        it(`replacingCharsInTheOriginalArray removes '${test.remove}' chars from '${test.str}' returning '${test.output}'`, () => {
            expect(removeSpecifiedChars.replacingCharsInTheOriginalArray(test.str, test.remove)).toBe(test.output);
        });
    });

});