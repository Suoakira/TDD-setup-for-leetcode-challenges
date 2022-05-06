
const romanToNum = require('./01_roman_to_num.mjs')

describe("romanToNum tests", () => {
  it('romanToNum returns correct value when using a roman numneral', () => {
    expect(romanToNum("I")).toBe(1);
    expect(romanToNum("LVIII")).toBe(58);
    expect(romanToNum("MCMXCIV")).toBe(1994);
  });
})

