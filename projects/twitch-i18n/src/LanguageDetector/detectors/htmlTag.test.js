import { htmlTag as detector } from ".";

describe("htmlTag", () => {
  beforeEach(() => {
    jest
      .spyOn(document.documentElement, "getAttribute")
      .mockReturnValue("es-ES");
  });

  describe(".lookup", () => {
    it("reads the language from the `<html>` tag", () => {
      expect(detector.lookup()).toBe("es-ES");
    });
  });
});
