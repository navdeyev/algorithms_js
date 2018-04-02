const createTemperatureTracker = () => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    let mean;
    let numberOfReadings = 0;

    let sightings = {};
    let mode;

    return {
        insert: (tempReading) => {
            if (tempReading < min) min = tempReading;
            if (tempReading > max) max = tempReading;

            if (numberOfReadings === 0) {
                mean = tempReading;
                numberOfReadings++;
            } else {
                mean = (mean * numberOfReadings + tempReading) / (++numberOfReadings)
            }

            if (sightings[tempReading]) {
                sightings[tempReading]++;
            } else {
                sightings[tempReading] = 1;
            }

            let maxSightings = 0;
            for (let index in sightings) {
                if (sightings[index] > maxSightings) {
                    maxSightings = sightings[index];
                    mode = Number(index)
                }
            }
        },
        getMin: () => min,
        getMax: () => max,
        getMean: () => mean,
        getMode: () => mode
    }
};

export default createTemperatureTracker;
