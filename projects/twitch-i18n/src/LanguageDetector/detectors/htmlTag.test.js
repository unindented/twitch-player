import htmlTag from "./htmlTag";

describe("htmlTag", () => {
  beforeEach(() => {
    jest
      .spyOn(document.documentElement, "getAttribute")
      .mockReturnValue("es-ES");
  });

  describe(".lookup", () => {
    it("reads the language from the `<html>` tag", () => {
      expect(htmlTag.lookup()).toBe("es-ES");
    });
  });
});
