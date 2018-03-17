const copyingToResIfCharIsNotFoundInRemoveUsingFunction = (str, removeStr) => {
    const res = [];

    const strChars = str.split('');
    const removeChars = removeStr.split('');

    const toBeRemoved = (char) => {
        for (let i = 0; i < removeChars.length; i++) {
            if (removeChars[i] === char) {
                return true;
            }
        }
        return false;
    };

    for (let i = 0; i < strChars.length; i++) {
        const currentChar = strChars[i];
        if (!toBeRemoved(currentChar)) {
            res.push(currentChar);
        }
    }

    return res.join('');
};

const copyingToResIfCharIsNotFoundInRemoveUsingMap = (str, removeStr) => {
    const res = [];

    const strChars = str.split('');
    const removeChars = removeStr.split('');

    const removeMap = {};
    removeChars.forEach((char) => {
        removeMap[char] = true;
    });

    strChars.forEach((char) => {
        if (removeMap[char] === undefined) {
            res.push(char);
        }
    });

    return res.join('');
};

// Create remove map for simpler lookup of the chars to remove
// Iterate through str with a source and destination index,
// copying each character only if its corresponding value in the lookup array is false.
const replacingCharsInTheOriginalArray = (str, removeStr) => {
    const strChars = str.split('');
    const removeChars = removeStr.split('');

    const removeMap = {};
    removeChars.forEach((char) => {
        removeMap[char] = true;
    });

    let dst = 0;

    for (let i = 0; i < strChars.length; i++) {
        const currentChar = strChars[i];
        if (removeMap[currentChar] === undefined) {
            strChars[dst++] = currentChar;
        }
    }

    return strChars.splice(0, dst).join('');
};

export default {
    copyingToResIfCharIsNotFoundInRemoveUsingFunction,
    copyingToResIfCharIsNotFoundInRemoveUsingMap,
    replacingCharsInTheOriginalArray
}
