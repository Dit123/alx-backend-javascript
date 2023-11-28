const appendToEachArrayValue = (arrays, appendString) => {
  const result = [];

  for (let array of arrays) {
    const newArray = [];

    for (let value of array) {
      newArray.push(value + appendString);
    }

    result.push(newArray);
  }

  return result;
};

const originalArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const newArray = appendToEachArrayValue(originalArrays, '_appended');
console.log(newArray);

