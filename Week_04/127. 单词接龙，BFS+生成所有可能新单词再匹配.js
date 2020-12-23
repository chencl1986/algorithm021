/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let queue = [[beginWord, 1]];
  let set = new Set(wordList);

  while (queue.length) {
    const [word, level] = queue.shift();

    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j < 123; j++) {
        const newWord = `${word.slice(0, i)}${String.fromCharCode(
          j,
        )}${word.slice(i + 1)}`;

        if (set.has(newWord)) {
          if (endWord === newWord) {
            return level + 1;
          }
          queue.push([newWord, level + 1]);
          set.delete(newWord);
        }
      }
    }
  }

  return 0;
};
// @lc code=end
