

const nums = [2,7,11,15]

// notes this solution could of been greatly improved by using a hash table or maping the values first (avoid doing two loops)
const twoSum = (numbers, target) => {
    let indices
    numbers.forEach((outerNum, outerIndex) => {
        numbers.forEach((innerNum, innerIndex) => {
            if (outerNum + innerNum == target && outerIndex != innerIndex) {
                indices = outerIndex < innerIndex ? [outerIndex, innerIndex] : [innerIndex, outerIndex] 
            }
        })
    })
     
    console.log(indices)
    return indices;
}

module.exports = twoSum