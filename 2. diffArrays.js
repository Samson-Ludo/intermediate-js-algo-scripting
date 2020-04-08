// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

// My solution

const diffArray = (arr1, arr2) => {
  const mergedArray = arr1.concat(...arr2);

  const diff = mergedArray.filter((x) => {
    if (!arr1.includes(x) || !arr2.includes(x)) {
      return x;
    }
  });
  return diff;
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
