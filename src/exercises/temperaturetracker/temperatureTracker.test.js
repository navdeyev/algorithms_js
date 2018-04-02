import createTemperatureTracker from './temperatureTracker';

describe('Temperature tracker', () => {

    const testCases = [
        {
            temperatures: [0],
            max: 0, min: 0, mean: 0, mode: 0
        },
        {
            temperatures: [1, 2, 2, 3],
            max: 3, min: 1, mean: 2, mode: 2
        },
        {
            temperatures: [1, 2, 3, 4, 5, 6, 6, 6, 5, 4, 3, 2, 1, 0],
            max: 6, min: 0, mean: 3.4285714285714284, mode: 6
        },
        {
            temperatures: [0, 0, 0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 0, 0],
            max: 5, min: 0, mean: 1.875, mode: 0
        }
    ];

    testCases.forEach(testCase => {
        it('runs the testCase', () => {
            const tracker = createTemperatureTracker();
            testCase.temperatures.forEach(temp => {
                tracker.insert(temp);
            });

            expect(tracker.getMax()).toBe(testCase.max);
            expect(tracker.getMin()).toBe(testCase.min);
            expect(tracker.getMean()).toBe(testCase.mean);
            expect(tracker.getMode()).toBe(testCase.mode);
        });
    })

});