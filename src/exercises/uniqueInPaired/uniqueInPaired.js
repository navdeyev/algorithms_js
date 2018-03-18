//Depends on the efficiency of sort.
const usingSortedArray = (arr) => {
    const sorted = arr.sort();

    if (sorted[0] !== sorted[1]) {
        return sorted[0];
    }

    if (sorted[sorted.length - 1] !== sorted[sorted.length - 2]) {
        return sorted[sorted.length - 1];
    }

    for (let i = 1; i <= sorted.length - 1; i++) {
        const current = sorted[i];
        if (current !== sorted[i - 1] && current !== sorted[i + 1]) {
            return current;
        }
    }
};

const usingSortedArrayComparingPairs = (arr) => {
    const sorted = arr.sort();
    for (let i = 0; i <= sorted.length - 1; i += 2) {
        const pair = sorted.slice(i, i + 2);
        if (pair[0] !== pair[1]) {
            return pair[0];
        }
    }
};

//Allows to find all unique integers, Time complexity: O(n);
const usingMapWithNumberOfAppearances = (arr) => {
    const map = {};

    arr.forEach((elem) => {
        map[elem] = map[elem] ? map[elem] + 1 : 1;
    });

    for (let key in map) {
        if (map[key] === 1) {
            return Number(key);
        }
    }
};

export default {
    usingSortedArray,
    usingSortedArrayComparingPairs,
    usingMapWithNumberOfAppearances
};
