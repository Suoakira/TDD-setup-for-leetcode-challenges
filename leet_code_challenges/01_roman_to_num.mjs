const romanNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const romanToInt = romanNumeral => {
  const romanLetters = romanNumeral.split('')

  return romanLetters.reduce(
    (acc, curr, index) =>
      romanNums[curr] < romanNums[romanLetters[index + 1]]
        ? acc - romanNums[curr]
        : acc + romanNums[curr],
    0
  )
}

module.exports = romanToInt

