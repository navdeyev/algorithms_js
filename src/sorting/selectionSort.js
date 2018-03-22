//In-place algorithm, typical implementation is not stable
//O(n^2) in the best, average and worst case
const selectionSort = (data) => {
    return selectionSortRecursive(data, 0);
};

// Sort a subset of the array starting at the given index.
const selectionSortRecursive = (data, start) => {
    if (start < data.length - 1) {
        swap(data, start, findMinimumIndex(data, start));
        selectionSortRecursive(data, start + 1);
    }
    return data;
};

// Find the position of the minimum value starting at the given index.
const findMinimumIndex = (data, start) => {
    let minPos = start;

    for (let i = start + 1; i < data.length; ++i) {
        if (data[i] < data[minPos]) {
            minPos = i;
        }
    }

    return minPos;
};

// Swap two elements in an array.
const swap = (data, index1, index2) => {
    if (index1 !== index2) {
        const tmp = data[index1];
        data[index1] = data[index2];
        data[index2] = tmp;
    }
};


export default selectionSort;