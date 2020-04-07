//Question here: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range


// My solution:

const sumAll = (arr) => {
  const startNum = arr[0];
  const endNum = arr[1];

  const numCount = Math.abs(startNum - endNum) + 1;
  const sum = ((startNum + endNum) * numCount) / 2;

  return sum;
};

console.log(sumAll([1, 4]));