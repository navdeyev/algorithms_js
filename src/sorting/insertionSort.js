const insertionSort = (data) => {
    for (let which = 1; which < data.length; ++which) {
        const val = data[which];

        for (let i = 0; i < which; ++i) {
            if (data[i] > val) {
                //Copying section of the data, from the index of the number that is bigger than val and val index.
                const shiftSection = data.slice(i, which);

                //Shift the found section of the data to the right by 1 position
                Array.prototype.splice.apply(data, [i + 1, shiftSection.length].concat(shiftSection));

                //Move the val to it's proper position, hence doing the insert
                data[i] = val;

                //Move on to the next number
                break;
            }
        }
    }
    return data;
};

export default insertionSort;