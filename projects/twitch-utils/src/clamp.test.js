import { clamp } from ".";

describe("clamp", () => {
  it("rounds value", () => {
    expect(clamp(2.5, 2, 4)).toBe(3);
  });

  it("does not clamp value in-between", () => {
    expect(clamp(3, 2, 4)).toBe(3);
  });

  it("does not clamp lower limit", () => {
    expect(clamp(2, 2, 4)).toBe(2);
  });

  it("does not clamp upper limit", () => {
    expect(clamp(4, 2, 4)).toBe(4);
  });

  it("clamps value below", () => {
    expect(clamp(1, 2, 4)).toBe(2);
  });

  it("clamps value above", () => {
    expect(clamp(5, 2, 4)).toBe(4);
  });
});
