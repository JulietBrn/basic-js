const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * `--discard-next`
    `--discard-prev`
    `--double-next`
    `--double-prev`
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let indexes = []
  arr.forEach((val, i) => {
    if (typeof val === 'string') {indexes.push(i)}
  })
  let newArr = arr.slice(0)
  indexes.forEach((ind) => {
    if (indexes[ind] === `--double-next`) {
      doubleNext();
    }
    if (indexes[ind] === `--double-prev`) {
      doublePrev();
    }
    if (indexes[ind] === `--discard-prev`) {
      discardPrev();
    }
    if (indexes[ind] === `--discard-next`) {
      discardNext();
    }
  })
  
  function doubleNext() {
    return newArr[indexes[ind]] = newArr[indexes[ind] + 1];
  }
  function doublePrev() {
    return newArr[indexes[ind]] = newArr[indexes[ind] - 1];
  }
  function discardPrev() {
    return newArr.splice(indexes[ind - 1], 2)
  }
  function discardNext() {
    return newArr.splice(indexes[ind], 2)
  }
  const filteredArr = newArr.filter((val) => {
    return val !== `--double-next` && val !== `--double-prev` && val !== `--discard-prev` && val !== `--discard-next`;
  })
  return filteredArr
  throw new NotImplementedError('Not implemented');
  //.filter((el) => {return typeof el !== 'string'})
}

module.exports = {
  transform
};
