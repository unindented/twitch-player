import { localStorage as detector } from ".";

describe("localStorage", () => {
  beforeEach(() => {
    localStorage.setItem("lng", "es-ES");
  });

  describe(".lookup", () => {
    it("reads the language from localStorage", () => {
      expect(detector.lookup({ lookupLocalStorage: "lng" })).toBe("es-ES");
    });
  });

  describe(".cacheUserLanguage", () => {
    it("writes the language to localStorage", () => {
      detector.cacheUserLanguage("es-MX", { lookupLocalStorage: "lng" });
      expect(localStorage.getItem("lng")).toBe("es-MX");
    });
  });
});
