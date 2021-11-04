const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present Horizontal", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present Vertical", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'F', 'F', 'F', 'F', 'E', 'L', 'D'],
      ['E', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['F', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['L', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present Backwards Horizontal", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['E', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['F', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['L', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present Backwards Vertical", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'F', 'F', 'F', 'F', 'E', 'L', 'D'],
      ['L', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['N', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['I', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['E', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['S', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
});