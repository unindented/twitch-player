import { navigator as detector } from ".";

describe("navigator", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "language", { value: "es-ES" });
  });

  describe(".lookup", () => {
    it("reads the language from the navigator", () => {
      expect(detector.lookup()).toBe("es-ES");
    });
  });
});
