const throttle = (func, threshold = 250) => {
  let last;
  let timer;

  return (...args) => {
    const now = Date.now();

    if (last && now < last + threshold) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        func(...args);
      }, threshold);
    } else {
      last = now;
      func(...args);
    }
  };
};

export default throttle;
