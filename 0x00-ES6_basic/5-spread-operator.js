const concatenateArraysAndString = (arr1, arr2, str) => [...arr1, ...arr2, ...str];

const result = concatenateArraysAndString([1, 2], ['a', 'b'], 'hello');
console.log(result); // Output: [1, 2, 'a', 'b', 'h', 'e', 'l', 'l', 'o']
