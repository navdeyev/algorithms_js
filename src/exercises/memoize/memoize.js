export const memoizeWithKey = (keyFn, fn) => {
  const cache = {};

  return (...args) => {
    const key = keyFn(args);

    if (key in cache) {
      return cache[key];
    }

    cache[key] = fn(args);
    return cache[key];
  }

};

const keyFn = (...args) => {
  //This function is used to create a hash on the arguments of the memoized function.
  //Ideally we need a perfect hashing function
  return '' + args;
};

export const memoize = (fn) => memoizeWithKey(keyFn, fn);

