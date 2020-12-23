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
  let map = new Map([[endWord, 1]]);
  let set = new Set(wordList);

  if (!set.has(endWord)) {
    return 0;
  }

  while (queue.length && map.size) {
    if (queue.length > map.size) {
      [queue, map] = [Array.from(map), new Map(queue)];
    }

    const [word, level] = queue.shift();

    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j < 123; j++) {
        const newWord = `${word.slice(0, i)}${String.fromCodePoint(
          j,
        )}${word.slice(i + 1)}`;

        if (map.has(newWord)) {
          return map.get(newWord) + level;
        }

        if (set.has(newWord)) {
          set.delete(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }

  return 0;
};
// @lc code=end
