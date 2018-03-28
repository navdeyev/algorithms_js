const quickSort = (data) =>  {

    //Nothing to sort here
    if (data.length < 2) {
        return data;
    }

    //Selecting pivot value
    const pivotIndex = Math.floor(data.length / 2);
    const pivotValue = data[pivotIndex];

    let left = [];
    let right = [];

    //Splitting the data to two arrays
    data.forEach((item, index) => {
        if (index !== pivotIndex) {
            const val = data[index];
            if (val < pivotValue) {
                left.push(val);
            } else {
                right.push(val);
            }
        }
    });

    //Applying sorting on split arrays
    left = quickSort(left);
    right = quickSort(right);

    //Combining the data back together.
    return left.concat(pivotValue).concat(right);
};

export default quickSort;