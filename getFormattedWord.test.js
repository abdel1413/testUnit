import getFormattedWord from "./getFormattedWord.js";
import makeToUpper from "./makeToUpper.js";

test("capitalizes first letter", () => {
  expect(getFormattedWord("boy")).toBe("Boy");
});

test("returns empty string if input is falsy", () => {
  expect(getFormattedWord("")).toBe("");
  expect(getFormattedWord(null)).toBe("");
});


describe("convert the whole word to upper case",()=>{
    test("word Capable to equal CAPABLE",()=>{
        expect(makeToUpper("Capable")).toBe('CAPABLE')
    })
})




