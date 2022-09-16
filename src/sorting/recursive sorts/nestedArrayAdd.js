/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

const nestedAdd = (array) => {
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (Array.isArray(element)) {
      sum += nestedAdd(element);
    } else {
      sum += element;
    }
  }

  return sum;
};

const nestedArray = [10, [12, 14, [1], [16, [20]]], 10, 11];

const sum = nestedAdd(nestedArray);

console.log(sum); // 94
