const mergeSort = (data) => {

    //Nothing to sort here
    if (data.length < 2) {
        return data;
    }

    //Selecting pivot index
    const pivotIndex = Math.floor(data.length / 2);

    //Splitting to two arrays
    const left = data.slice(0, pivotIndex);
    const right = data.slice(pivotIndex, data.length);

    //Combining back to one array with sorting in the array parts
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    let res = [];

    let leftIndex = 0;
    let rightIndex = 0;

    //Arrays might have different length, merging values until we run out of one of the array.
    while (leftIndex < left.length && rightIndex < right.length) {
        let item;
        if (left[leftIndex] <= right[rightIndex]) {
            item = left[leftIndex++];
        } else {
            item = right[rightIndex++];
        }

        res.push(item);
    }

    //We can just copy the tail of the longer array to the merged result
    let tail;
    if (leftIndex === left.length) {
        tail = right.slice(rightIndex);
    } else {
        tail = left.slice(leftIndex);
    }

    return res.concat(tail);
};

export default mergeSort;