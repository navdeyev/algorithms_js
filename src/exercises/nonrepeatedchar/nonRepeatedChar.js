//Worst case gives O(n^2)
const bruteForceTwoForLoops = (str) => {
    const chars = str.split('');

    for (let i = 0; i < chars.length; i++) {

        let repeated = false;
        for (let j = 0; j < chars.length; j++) {
            if (i !== j && chars[i] === chars[j]) {
                repeated = true;
            }
        }
        if (repeated === false) {
            return chars[i];
        }
    }
    return '';
};

const storingNumberOfAppearancesInAMap = (str) => {
    const chars = str.split('');
    const charMap = {};

    for (let i = 0; i < chars.length; i++) {
        if (charMap[chars[i]]) {
            charMap[chars[i]]++;
        } else {
            charMap[chars[i]] = 1;
        }
    }

    for (let key in charMap) {
      if (charMap.hasOwnProperty(key)) { //We can actually avoid this check, because we are creating this map on the fly
        if (charMap[key] === 1) {
          return key;
        }
      }
    }
    return '';
};

export default {
    bruteForceTwoForLoops,
    storingNumberOfAppearancesInAMap
}
