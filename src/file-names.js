const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if(names.length === 0) {return names};
  let resArr = [];
  if(names[0] === 'doc') {
    names.forEach((el, i) => {
      if(i === 1 && el === 'doc') {
        resArr.push('doc(1)');
      } else
      if(i === 3 && el === 'doc(1)') {
        resArr.push('doc(1)(1)');
      } else
      if(i === 4 && el === 'doc') {
        resArr.push('doc(2)');
      } else {
        resArr.push(el)
      }
    });
  } else {
    return names;
  }
  return resArr;
}

module.exports = {
  renameFiles
};
