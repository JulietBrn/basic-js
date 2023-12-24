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
  let counter = 1
  if(str === '') {
    return str;
  };
  let arr = []
  for(let i = 1; i < str.length; i+= 1) {
    if(str[i] === str[i - 1]) {
      counter += 1;
    }
    if(str[i] !== str[i - 1] ) {
      if(counter > 1) {
        arr.push(counter);
        arr.push(str[i - 1]);
        counter = 1
      } else {
        arr.push(str[i - 1]);
      }
    }
  }
  if (counter > 1) {
    arr.push(counter);
    arr.push(str[str.length - 1]);
  } else {
    arr.push(str[str.length - 1]);
  }
  return arr.join('')
}

module.exports = {
  encodeLine
};
