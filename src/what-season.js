const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * spring, summer, autumn (fall), winter
 */
function getSeason(date) {
  if(!arguments.length) {
    return 'Unable to determine the time of year!';
  };
  try {
    let res = date.getMonth()
    if(res === 11 || res === 0 || res === 1) {
      return 'winter';
    }
    if(res === 2 || res === 3 || res === 4) {
      return 'spring';
    }
    if(res === 5 || res === 6 || res === 7) {
      return 'summer';
    }
    if(res === 8 || res === 9 || res === 10) {
      return 'fall';
    }
  } catch(err) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
