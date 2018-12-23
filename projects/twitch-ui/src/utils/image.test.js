import { Dimensions } from "react-native";
import { processImageTemplate } from ".";

describe("processImageTemplate", () => {
  describe("when scale is 1", () => {
    beforeEach(() => {
      jest.spyOn(Dimensions, "get").mockReturnValue({ scale: 1 });
    });

    it("returns the processed template", () => {
      expect(
        processImageTemplate(
          "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-{width}x{height}.jpg",
          188,
          250
        )
      ).toBe("https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-188x250.jpg");
    });
  });

  describe("when scale is greater than 1", () => {
    beforeEach(() => {
      jest.spyOn(Dimensions, "get").mockReturnValue({ scale: 1.25 });
    });

    it("returns the processed template", () => {
      expect(
        processImageTemplate(
          "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-{width}x{height}.jpg",
          188,
          250
        )
      ).toBe("https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-235x313.jpg");
    });
  });
});
