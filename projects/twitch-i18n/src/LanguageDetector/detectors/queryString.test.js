import { queryString as detector } from ".";

describe("queryString", () => {
  beforeEach(() => {
    history.replaceState(null, null, "?lng=es-ES");
  });

  describe(".lookup", () => {
    it("reads the language from the query string", () => {
      expect(detector.lookup({ lookupQueryString: "lng" })).toBe("es-ES");
    });
  });
});
