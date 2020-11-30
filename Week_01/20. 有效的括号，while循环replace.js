/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  while (s.length) {
    let temp = s
    s = s.replace(/(\(\))|(\[\])|(\{\})/, '')

    if (s === temp) {
      return false
    }
  }

  return !s.length
};