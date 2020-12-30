/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let result = [];
  let queue = [[beginWord]];
  let set = new Set();

  while (queue.length) {
    let queueLength = queue.length;
    let found = false;
    const levelSet = new Set();

    while (--queueLength >= 0) {
      let subRes = queue.shift();
      const last = subRes.length - 1;

      for (let i = 0; i < wordList.length; i++) {
        if (set.has(wordList[i])) {
          continue;
        }

        let diff = 0;

        for (let j = 0; j < wordList[i].length; j++) {
          if (subRes[last][j] !== wordList[i][j]) {
            diff++;
            if (diff > 1) {
              break;
            }
          }
        }

        if (diff === 1) {
          if (wordList[i] === endWord) {
            found = true;
            result.push([...subRes, wordList[i]]);
          } else {
            queue.push([...subRes, wordList[i]]);
            levelSet.add(wordList[i]);
          }
        }
      }
    }
    for (const word of levelSet) {
      set.add(word);
    }

    if (found) {
      break;
    }
  }

  return result;
};
// @lc code=end
