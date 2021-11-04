const transpose = function(matrix) {
    let outerMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let innerMatrix = [];
      for (let column of matrix) {
        innerMatrix.push(column[i]);
      }
      outerMatrix.push(innerMatrix);
    }
    return outerMatrix;
  };
     
  const wordSearch = (letters, word) => {
    // Horizontal search
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
  
    // Vertical Search
    const transposeLetters = transpose(letters);
    const horizontalJoin2 = transposeLetters.map(ls => ls.join(''));
    for (let l of horizontalJoin2) {
      if (l.includes(word)) {
        return true;
      }
    }
  
    // Backwards Horizontal
    for (let l of horizontalJoin) {
      const backWordsWord = l.split('').reverse().join('');
      if (backWordsWord.includes(word)) {
        return true;
      }
    }
  
  
    //Backwards Vertical
    for (let l of horizontalJoin2) {
      const backWordsWord2 = l.split('').reverse().join('');
      if (backWordsWord2.includes(word)) {
        return true;
      }
    }
    // right down
    // left down
    //right up
    // left up
  
    return false;
  };
  
  
  
  module.exports = wordSearch;