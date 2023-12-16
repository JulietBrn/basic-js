const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // if(!str) { return ''}
  // let arr = []
  // let count = 1
  // for(let i = 1; i < str.length; i += 1) {
  //   if(str[i] !== str[i-1]) {
  //     arr.push(str[i-1])
  //   } else if (str[i] == str[i-1]) {
  //     count += 1
  //   }
  // }
}

module.exports = {
  encodeLine
};
