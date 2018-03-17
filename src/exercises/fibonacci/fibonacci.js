const simpleIteration = (number) => {
    if (number <= 1) return 0;

    let prevF = 0, prevS = 1, next = 1;

    for (let i = 2; i < number; i++) {
        next = prevF + prevS;
        prevF = prevS;
        prevS = next;
    }

    return next;
};

const fullCalculationArray = (number) => {
    if (number <= 1) return 0;
    const arr = [0, 1];
    for (let i = 2; i < number; i++) {
        arr[i] = arr[arr.length - 1] + arr[arr.length - 2];
    }
    return arr[arr.length - 1];
};

const threeElementArray = (number) => {
    if (number <= 1) return 0;
    const array = [0, 1, 1];
    for (let j = 2; j < number; j++) {
        array[2] = array[0] + array[1];
        array[0] = array[1];
        array[1] = array[2];
    }
    return array[2];
};

const simpleRecursion = (number) => {
    if (number <= 1) return 0;
    if (number === 2) return 1;
    return simpleRecursion(number - 1) + simpleRecursion(number - 2);
};

//Memoization is an optimization technique used if we know that our algorithm will call
// the same function with the same parameters multiple times.
const memoization = (num) => {
    const cache = {};

    const memoizationClosure = (number) => {
        if (number <= 1) return 0;
        if (number === 2) return 1;
        if (cache[number]) return cache[number];

        cache[number] = memoizationClosure(number - 1) + memoizationClosure(number - 2);

        return cache[number];
    };

    return memoizationClosure(num);
};

const binetsFormula = (num) => {
    let sqrtOf5 = Math.sqrt(5);
    let PHI = (1 + sqrtOf5) / 2;
    let phi = (1 - sqrtOf5) / 2;
    return Math.round((Math.pow(PHI, num) - Math.pow(phi, num)) / sqrtOf5);
};

export default {
    simpleIteration,
    fullCalculationArray,
    threeElementArray,
    simpleRecursion,
    memoization,
    binetsFormula
};
