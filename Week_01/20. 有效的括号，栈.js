/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (const char of s) {
    if (map[char]) {
      stack.push(map[char])
    } else {
      const pop = stack.pop()

      if (pop !== char) {
        return false
      }
    }
  }

  return !stack.length
};