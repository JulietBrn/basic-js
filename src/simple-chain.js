const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    this.length;
  },
  addLink(value) {
    return this.concat(`( ${value} )`);
  },
  removeLink(position) {
    if(!this[position]) {
      throw new Error('You can\'t remove incorrect link!');
    };
    // remove line with error and write your code here
  },
  reverseChain() {
    return this.split('').reverse().join('')
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
