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
  let queue = [beginWord];
  let level = 1;
  let set = new Set(wordList);

  while (queue.length) {
    let len = queue.length;

    while (--len >= 0) {
      const word = queue.shift();

      for (const next of set) {
        let diff = 0;

        for (let i = 0; i < next.length; i++) {
          if (word[i] !== next[i]) {
            diff++;
          }
        }

        if (diff === 1) {
          if (next === endWord) {
            return ++level;
          }

          set.delete(next);
          queue.push(next);
        }
      }
    }

    level++;
  }

  return 0;
};
// @lc code=end
