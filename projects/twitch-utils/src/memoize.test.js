import { memoize } from ".";

describe("memoize", () => {
  let func;
  let memoizedFunc;

  beforeEach(() => {
    func = val => new String(val);
    memoizedFunc = memoize(func);
  });

  it("returns the same result for the same arguments", () => {
    expect(memoizedFunc("foo")).toBe(memoizedFunc("foo"));
  });

  it("returns a different result for different arguments", () => {
    expect(memoizedFunc("bar")).not.toBe(memoizedFunc("foo"));
  });
});
