const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString()
  for(let i = 1; i < str.length; i += 1) {
    if(str[0] < str[1]) {
      let res = +str.replace(`${str[0]}`, '')
      return res
    }
    if(str[i-1] > str[i]) {
      let res = +str.replace(`${str[i]}`, '')
      return res
    }
  }
}

module.exports = {
  deleteDigit
};
