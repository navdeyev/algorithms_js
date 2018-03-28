const rotateOneByOne = (arr, by) => {
    for (let i = 0; i < by; i++) {
        const el = arr.shift();
        arr.push(el);
    }
    return arr;
};

const rotateUsingSliceBy = (arr, by) => {
    for (let i = 0; i < by; i++) {
        arr.push(arr[i]);
    }
    return arr.slice(by);
};

const rotateUsingSpliceAndConcat = (arr, by) => {
    const head = arr.splice(0, by);
    return arr.concat(head);
};

//What if we are not allowed to use array api

//Time complexity: O(n*by);
//Space: O(1)
const rotateUsingArrayIndexes = (arr, by) => {
    const rotateLeft = () => {
        //Storing the first element
        const temp = arr[0];

        //Shifting indexes for all the elements
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }

        //Putting the former first element at the end of the array.
        arr[arr.length - 1] = temp;
    };

    for (let i = 0; i < by; i++) {
        rotateLeft();
    }

    return arr;
};

const rotateUsingReversal = (arr, by) => {
    // Reversing the order of the elements in the part of the array
    const reverse = (start, end) => {
        let temp;

        while (start < end) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };

    //Reversing the order of the elements in the head
    reverse(0, by - 1);
    //Reversing the order of the elements in the tail
    reverse(by, arr.length - 1);
    //Reversing the order of the elements in the whole array.
    reverse(0, arr.length - 1);

    return arr;
};

const gcd = (a, b) => {
    if (b === 0)
        return a;
    else
        return gcd(b, a % b);
};
const jugglingAlgorithm = (arr, by) => {
    const commonDenominator = gcd(by, arr.length);

    for (let i = 0; i < commonDenominator; i++) {
        /* move i-th values of blocks */
        let temp = arr[i];
        let j = i;
        while (true) {
            let k = j + by;
            if (k >= arr.length)
                k = k - arr.length;
            if (k === i)
                break;
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }
    return arr;
};


export default {
    rotateOneByOne,
    rotateUsingSliceBy,
    rotateUsingSpliceAndConcat,
    rotateUsingArrayIndexes,
    rotateUsingReversal,
    jugglingAlgorithm
}
