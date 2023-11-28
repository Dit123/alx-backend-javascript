const concatenateArraysAndString = (arr1, arr2, str) => `${arr1.join('')}${arr2.join('')}${str}`;

// Example usage:
const result = concatenateArraysAndString([1, 2], ['a', 'b'], 'hello');
console.log(result); // Output: '12abhello'

