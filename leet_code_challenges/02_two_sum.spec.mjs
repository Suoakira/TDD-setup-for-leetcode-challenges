
const twoSum = require('./02_two_sum.mjs')


describe("twoSum", () => {
  it('twoSum returns indices that add up to a given target integer from a passed array', () => {
    expect(JSON.stringify(twoSum([2,7,11,15], 9))).toBe(JSON.stringify([0, 1]));
    expect(JSON.stringify(twoSum([3,2,4], 6))).toBe(JSON.stringify([1, 2]));
    expect(JSON.stringify(twoSum([3,3], 6))).toBe(JSON.stringify([0, 1]));
  });
})

