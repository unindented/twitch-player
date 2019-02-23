const memoize = func => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const value = func(...args);
    cache[key] = value;
    return value;
  };
};

export default memoize;
