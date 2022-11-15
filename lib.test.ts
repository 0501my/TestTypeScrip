import {fizzBuzz} from "./lib";
describe('tui test hàm fizzBuzz()',()=>{
    test("phải trả về giá trị fizz or buzz",()=>{
      let result =  fizzBuzz(15)
        expect(result).toBe("FizzBuzz")
    });
    test("phải trả về Fizz",()=>{
        let x = fizzBuzz(21)
        expect(x).toBe("Fizz")
    });
    test("phải trả về Buzz",()=>{
        let y = fizzBuzz(20)
        expect(y).toBe("Buzz")
    });
});