const noRepeatedModuleChecks = (length) => {
    let out = '';
    for (let i = 1; i <= length; i++) {
        let currOut = '';
        if (i % 3 === 0) currOut += 'fizz';
        if (i % 5 === 0) currOut += 'buzz';
        if (currOut === '') currOut += i;

        out += currOut;
        if (i !== length) out += ', ';
    }
    return out;
};

const usingArrayApplyToGenerateCycle = (length) => {
    return Array.apply(null, {length}).map((item, index) => {
        index++;
        if (index % 15 === 0) return 'fizzbuzz';
        if (index % 5 === 0) return 'buzz';
        if (index % 3 === 0) return 'fizz';
        return index;
    }).join(', ');
};

const usingTwoCyclesToIterateOverNumbersAndOverMarkers = (length, markers) => {
    let out = '';
    for (let i = 1; i <= length; i++) {
        let currOut = '';

        markers.forEach(marker => {
            if (i % marker.number === 0) currOut += marker.text;
        });

        out += currOut ? currOut : i;
        if (i !== length) out += ', ';
    }
    return out;
};

const reduceMarkersForNumber = (markers, number) => {
    const markerOut = markers.reduce((acc, marker) => {
        if (number % marker.number === 0) {
            acc += marker.text;
        }
        return acc;
    }, '');
    return markerOut ? markerOut : number;
};

const usingArrayApplyToGenerateCycleAndMarkersReduce = (length, markers) => {
    return Array.apply(null, {length}).map((item, index) => {
        return reduceMarkersForNumber(markers, index + 1);
    }).join(', ');
};

const usingGeneratedArrayToRunReduceOnOutputOfMarkersReduce = (length, markers) => {
    const range = [];
    for (let i = 1; i <= length; i++) {
        range.push(i);
    }

    return range.reduce((rangeAcc, number) => {
        rangeAcc += reduceMarkersForNumber(markers, number);
        if (number !== range[range.length - 1]) {
            rangeAcc += ', ';
        }
        return rangeAcc;
    }, '');
};


export default {
    noRepeatedModuleChecks,
    usingArrayApplyToGenerateCycle,
    usingTwoCyclesToIterateOverNumbersAndOverMarkers,
    usingArrayApplyToGenerateCycleAndMarkersReduce,
    usingGeneratedArrayToRunReduceOnOutputOfMarkersReduce
}