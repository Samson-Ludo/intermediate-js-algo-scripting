// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// My solution

const whatIsInAName = (collection, source) => {
  let srcKeys = Object.keys(source);
  return collection.filter((obj) => {
    return srcKeys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
};

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
