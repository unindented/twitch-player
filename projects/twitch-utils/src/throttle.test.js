import { throttle } from ".";

describe("throttle", () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func);
  });

  it("calls the function immediately", () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("throttles consecutive calls", () => {
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("defers the function call", () => {
    throttledFunc();
    throttledFunc();
    jest.advanceTimersByTime(250);
    expect(func).toHaveBeenCalledTimes(2);
  });
});
