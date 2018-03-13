const iterative = (n) => {
  if (n === 0) return 0;
  let val = 1;
  for (let i = n; i > 1; i--) {
    val *= i;
  }
  return val;
};

const simpleRecursion = (n) => {
  if (n === 0 || n === 1) return n;
  return n * simpleRecursion(n - 1);
};

const memoization = (num) => {
  const cache = {};

  const memoizationClosure = (n) => {
    if (n === 0 || n === 1) {
      return n;
    }

    if (n in cache) {
      return cache[n];
    }

    cache[n] = n * memoizationClosure(n - 1);
    return cache[n];
  };

  return memoizationClosure(num);
};

export default {
  iterative,
  simpleRecursion,
  memoization
}