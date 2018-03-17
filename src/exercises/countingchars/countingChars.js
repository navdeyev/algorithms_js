const transformFor = (input) => {
    if (input === '') {
        return '';
    }

    const chars = input.split('');
    let currentChar = chars[0];
    let counter = 1;
    let out = '';

    for (let i = 1; i <= chars.length; i++) {
        if (currentChar === chars[i]) {
            counter++;
        } else {
            out += currentChar + counter;
            currentChar = chars[i];
            counter = 1;
        }
    }
    return out;
};

const transformForEach = (input) => {
    if (input === '') {
        return '';
    }

    const chars = input.split('');
    let currentChar = chars[0];
    let counter = 0;
    let out = '';

    chars.forEach((char) => {
        if (currentChar === char) {
            counter++;
        } else {
            out += currentChar + counter;
            currentChar = char;
            counter = 1;
        }
    });
    out += currentChar + counter;
    return out;
};

const transformWhile = (input) => {
    if (input === '') {
        return '';
    }

    const chars = input.split('');
    let currentChar = chars[0];
    let numberOfChars = 1;
    let out = '';

    let i = 1;
    do {
        if (currentChar === chars[i]) {
            numberOfChars++;
        } else {
            out += currentChar + numberOfChars;
            currentChar = chars[i];
            numberOfChars = 1;
        }
        i++;
    }
    while (i <= chars.length);

    return out;
};

export default {
    transformFor,
    transformForEach,
    transformWhile
};
