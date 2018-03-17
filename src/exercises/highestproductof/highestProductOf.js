const useEfficientSort = (arr) => {
    arr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    // Two biggest negative numbers may give a bigger prod than
    // two smaller ones of the biggest three positive numbers
    return Math.max(
        arr[0] * arr[1] * arr[arr.length - 1],
        arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1]
    );
};

const solveInOneGoWithFinding3MaxAnd2Min = (arr) => {
    const maxArray = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    const minArray = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

    arr.forEach(elem => {
        if (elem > maxArray[0]) {
            maxArray[2] = maxArray[1];
            maxArray[1] = maxArray[0];
            maxArray[0] = elem;
        } else if (elem > maxArray[1]) {
            maxArray[2] = maxArray[1];
            maxArray[1] = elem;
        } else if (elem > maxArray[2]) {
            maxArray[2] = elem;
        }

        if (elem < minArray[0]) {
            minArray[1] = minArray[0];
            minArray[0] = elem;
        } else if (elem < minArray[1]) {
            minArray[1] = elem;
        }
    });

    return Math.max(
        maxArray[0] * maxArray[1] * maxArray[2],
        maxArray[0] * minArray[0] * minArray[1]
    );
};


export default {
    useEfficientSort,
    solveInOneGoWithFinding3MaxAnd2Min
}