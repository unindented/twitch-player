import { fireEvent } from "@twitch-player/testing/dist/unit";
import { isHoverEnabled } from ".";

describe("isHoverEnabled", () => {
  describe("if there is no mouse movement", () => {
    it("returns false", () => {
      expect(isHoverEnabled()).toBe(false);
    });
  });

  describe("if there is mouse movement", () => {
    beforeEach(() => {
      jest.spyOn(Date, "now").mockReturnValueOnce(1000);
      fireEvent.mouseMove(document.body);
    });

    it("returns true", () => {
      expect(isHoverEnabled()).toBe(true);
    });
  });

  describe("if there is mouse movement shortly after touch movement", () => {
    beforeEach(() => {
      jest.spyOn(Date, "now").mockReturnValueOnce(1000);
      fireEvent.touchMove(document.body);
      jest.spyOn(Date, "now").mockReturnValueOnce(1200);
      fireEvent.mouseMove(document.body);
    });

    it("returns false", () => {
      expect(isHoverEnabled()).toBe(false);
    });
  });

  describe("if there is mouse movement long after touch movement", () => {
    beforeEach(() => {
      jest.spyOn(Date, "now").mockReturnValueOnce(1000);
      fireEvent.touchMove(document.body);
      jest.spyOn(Date, "now").mockReturnValueOnce(3000);
      fireEvent.mouseMove(document.body);
    });

    it("returns true", () => {
      expect(isHoverEnabled()).toBe(true);
    });
  });
});
