import getFormattedWord from "./getFormattedWord.js";

test("capitalizes first letter", () => {
  expect(getFormattedWord("boy")).toBe("Boy");
});

test("returns empty string if input is falsy", () => {
  expect(getFormattedWord("")).toBe("");
  expect(getFormattedWord(null)).toBe("");
});




