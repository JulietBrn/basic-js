const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = [];
  arr.forEach((el, i) => {
    if(el === -1) {
      indexes.push(i);
    };
  });
  let newArr = arr
    .filter((el) => {return el > 0})
    .sort((a, b) => {return a - b});
  indexes.forEach((val) => {
    newArr.splice(val, 0, -1);
  });
  return newArr;
}

module.exports = {
  sortByHeight
};
