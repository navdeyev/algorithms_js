//This splits the array to two parts very similarly to binary search.
// O(logN) time complexity

export const findArrayRotationIndex = (arr) => {

    const recursiveImpl = (lower, upper) => {
        const center = Math.floor((upper - lower) / 2) + lower;

        const el = arr[center];
        const leftEl = arr[center - 1];
        const rightEl = arr[center + 1];

        if (el < leftEl && el < rightEl) {
            return center;
        }

        if (el > leftEl) {
            return recursiveImpl(center, upper);
        }

        if (el < rightEl) {
            return recursiveImpl(lower, center);
        }

        return center;
    };

    return recursiveImpl(0, arr.length - 1);
};
