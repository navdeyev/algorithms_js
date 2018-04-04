const mergeRanges = (ranges) => {
    ranges.sort((a, b) => {
        if (a.start > b.start) return 1;
        if (a.start < b.start) return -1;
        return 0;
    });

    const merged = [];
    merged.push(ranges[0]);
    let n = 0; // Last item index in the merged array

    for (let i = 1; i < ranges.length; i++) {
        if (merged[n].end < ranges[i].start) {
            merged[++n] = ranges[i];
        } else if (merged[n].end < ranges[i].end) {
            merged[n].end = ranges[i].end;
        }
    }

    return merged;
};

export default mergeRanges;