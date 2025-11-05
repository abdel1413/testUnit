import { getFormattedWord } from "./getFormattedWord.js";

test("Capitalize the first letter of a word ",()=>{
    expect(getFormattedWord('hello')).toBe("Hello")
})

