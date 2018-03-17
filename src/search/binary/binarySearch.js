// O(logN)
const findRecursive = (array, targetElement) => {

    const recursiveImpl = (arr, target, lower, upper) => {
        const range = upper - lower;

        if (range < 0) {
            return 'Limits reversed';
        }

        if (range === 0 && array[lower] !== target) {
            return 'Element not present in the array';
        }

        if (arr[lower] > arr[upper]) {
            return 'Array not sorted ascending';
        }

        const center = Math.floor(range / 2) + lower;
        if (arr[center] === target) {
            return center;
        }

        if (arr[center] > target) {
            return recursiveImpl(arr, target, lower, center - 1);
        }

        if (arr[center] < target) {
            return recursiveImpl(arr, target, center + 1, upper);
        }
    };

    if (array.length === 0) {
        return 'Empty array';
    }

    return recursiveImpl(array, targetElement, 0, array.length - 1);
};

// O(logN)
const findIterative = (array, targetElement) => {
    if (array.length === 0) {
        return 'Empty array';
    }

    let lower = 0, upper = array.length - 1;
    let center, range;
    if (lower > upper) {
        return 'Limits reversed';
    }

    while (true) {
        range = upper - lower;
        if (range === 0 && array[lower] !== targetElement) {
            return 'Element not present in the array';
        }
        if (array[lower] > array[upper]) {
            return 'Array not sorted ascending';
        }

        center = Math.floor(range / 2) + lower;
        if (array[center] === targetElement) {
            return center;
        }

        if (array[center] > targetElement) {
            upper = center - 1;
        }

        if (array[center] < targetElement) {
            lower = center + 1;
        }
    }
};

export default {
    findRecursive,
    findIterative
}
