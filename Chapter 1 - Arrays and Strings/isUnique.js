const eh = require('../helpers/executionHelper');

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?


// Time: O(n) where n is the length of the string
// Space: O(1) as it will only ever store up to 256 characters

// If additional data structures cannot be used then a comparison between every
// character must be made leading to a time complexity of O(n^2)
const isUnique = (string) => {
  // The character space of ASCII
  if(string.length > 256) return false;

  const map = new Map();

  for(let char of string) {
    if(map.get(char)) {
      return false;
    }
    map.set(char, true);
  }

  return true;
}

eh.execute(isUnique, 'abcdefg'); // true
eh.execute(isUnique, 'aaa'); // false
eh.execute(isUnique, 'abcda'); // false