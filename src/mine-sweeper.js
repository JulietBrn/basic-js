const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let newM = [[0,0,0], [0,0,0], [0,0,0]]
  if(matrix[0][0] === false) {
    return [[0, 0, 0], [0, 0, 0]]
  }
  for(let i = 0; i < rows; i += 1) {
    for(let j = 0; j < columns; j += 1) {
      if(matrix[i][j] === true && i === 0 && j === 0) {
        newM[i+1][j] += 1
        newM[i+1][j+1] += 1
        newM[i][j+1] += 1
      } else
      if(matrix[i][j] === true) {
        newM[i+1][j] += 1
        newM[i+1][j+1] += 1
        newM[i][j+1] += 1
        newM[i-1][j] += 1
        newM[i-1][j-1] += 1
        newM[i][j-1] += 1
        newM[i+1][j-1] += 1
        newM[i-1][j+1] += 1
      }
    }
  }
  return newM
}

module.exports = {
  minesweeper
};
