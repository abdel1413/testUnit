import divide from "./divide.js";
import multiply from "./multiply.js";
import sum from "./sum.js";

describe('sum function', ()=>{
test("add 1 + 4 to equal 5",()=>{
    expect(sum(1,4)).toBe(5)
})
if('should handle negative numbers ',()=>{
    expect(sum(-2,-6)).toBe(-8)
})
  test('should add zero correctly', ()=>{
    expect(sum(-2,0)).toBe(-2)
  })
})

describe("multiplication",()=>{

    test('2*5 to equal 10',()=>{
        expect(multiply(2,5)).toBe(10)
    })
     
})


describe('division',()=>{
    test("6/2 to equal 3", ()=>{
        expect(divide(6,2)).toBe(3)
    })

     test('1/1 to equal 1',()=>{
        expect(divide(1,1)).toBe(1)
     })
})