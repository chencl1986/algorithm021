/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2) {
    return false
  }

  let halfLen = s.length / 2

  for (let i = 0; i < halfLen; i++) {
    let lastStr = s
    s = s.replace(/(\(\))|(\[\])|(\{\})/, '')

    if (lastStr === s) {
      return false
    }
  }
  
  return !s.length
};
