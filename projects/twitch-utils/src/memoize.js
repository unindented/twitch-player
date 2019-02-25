const memoize = (resultFn, isEqual = (a, b) => a === b) => {
  let lastArgs = [];
  let lastResult;
  let calledOnce = false;

  const isNewArgEqualToLast = (newArg, index) =>
    isEqual(newArg, lastArgs[index]);

  return (...newArgs) => {
    if (
      calledOnce &&
      newArgs.length === lastArgs.length &&
      newArgs.every(isNewArgEqualToLast)
    ) {
      return lastResult;
    }

    lastArgs = newArgs;
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;

    return lastResult;
  };
};

export default memoize;
