const getMaxProfit = (data) => {
    if (!Array.isArray(data) || data.length < 2) {
        return 0;
    }

    const maxDiffPerPosition = [];

    for (let i = 1; i < data.length; i++) {
        //Taking all elements that come before the current index
        const arrBeforeIndex = data.slice(0, i);
        //Finding the mim element among them
        const min = Math.min(...arrBeforeIndex);
        //Finding the max diff for the current element
        maxDiffPerPosition.push(data[i] - min);
    }

    return Math.max(...maxDiffPerPosition);
};

const getMaxProfitNoMaxDiffArray = (data) => {
    if (!Array.isArray(data) || data.length < 2) {
        return 0;
    }

    let maxDiff = data[1] - data[0];

    for (let i = 0; i < data.length; i++) {
        for (let j = data.length; j > i; j--) {
            const curDiff = data[j] - data[i];
            if (curDiff > maxDiff) {
                maxDiff = curDiff;
            }
        }
    }

    return maxDiff;
};

const getMaxProfitStoringMaxAndMin = (data) => {
    if (!Array.isArray(data) || data.length < 2) {
        return 0;
    }

    let maxDiff = data[1] - data[0];
    let min = data[0];

    for (let i = 1; i < data.length; i++) {
        const curDiff = data[i] - min;
        if (curDiff > maxDiff) {
            maxDiff = curDiff;
        }

        if (min > data[i]) {
            min = data[i];
        }
    }

    return maxDiff;
};

export default {
    getMaxProfit,
    getMaxProfitNoMaxDiffArray,
    getMaxProfitStoringMaxAndMin
}