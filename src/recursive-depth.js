const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let count = 1;
    let unpackArr = [...arr.map(() => 1)]
    while(unpackArr.length > 0) {
      let curr = unpackArr.pop();
      if (Array.isArray(curr)) {
        unpackArr.push(...curr.map(() => count + 1));
        count += 1;
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
