const eh = require('../helpers/executionHelper');

/**
 * 
 * Keep tracking of the characters count with a map data structure,
 * 
 * a = |aString| && b = |bString|
 * Time: O(a + b)
 * Space: O(a)
 * 
 * @param {String} aString 
 * @param {String} bString 
 * @returns {boolean}
 */
const checkPermutationMap = (aString, bString) => {
  if(aString.length !== bString.length) return false;

  const map = new Map();

  for(let aChar of aString) {
    map.set(aChar, (map.get(aChar) ?? 0) + 1);
  }

  for(let bChar of bString) {
    map.set(bChar, (map.get(bChar) ?? 0) - 1);
    if(map.get(bChar) < 0) {
      return false;
    }
  }

  return true;

};

/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 * 
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 * 
 * @param {String} aString 
 * @param {String} bString 
 * @returns {boolean}
 */
const checkPermutationSorted = (aString, bString) => {
  if(aString.length !== bString.length) return false;

  const aCharArr = aString.split('');
  const bCharArr = bString.split('');

  aCharArr.sort();
  bCharArr.sort();

  return aCharArr.every((v, i) => v === bCharArr[i]);
}



eh.execute(checkPermutationMap, 'apple', 'apple'); // true
eh.execute(checkPermutationSorted, 'apple', 'apple'); // false

