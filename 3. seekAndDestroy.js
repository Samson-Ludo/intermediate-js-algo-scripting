// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// My solution

const destroyer = (arr, ...num) => {
  const mergedArr = arr.concat(num);

  return mergedArr.filter((item) => {
    if (!num.includes(item)) {
      return item;
    }
  });
};

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
