/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 *
 * https://leetcode-cn.com/problems/word-search-ii/description/
 *
 * algorithms
 * Hard (44.53%)
 * Likes:    310
 * Dislikes: 0
 * Total Accepted:    27.3K
 * Total Submissions: 61.3K
 * Testcase Example:  '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n' +
  '["oath","pea","eat","rain"]'
 *
 * 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。
 * 
 * 单词必须按照字母顺序，通过 相邻的单元格
 * 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board =
 * [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
 * words = ["oath","pea","eat","rain"]
 * 输出：["eat","oath"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["a","b"],["c","d"]], words = ["abcb"]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n == board[i].length
 * 1 
 * board[i][j] 是一个小写英文字母
 * 1 
 * 1 
 * words[i] 由小写英文字母组成
 * words 中的所有字符串互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let trie = new Trie(); // 创建一个字典树
  let result = new Set(); // 使用Set存储查找到的单词，避免重复
  const dx = [1, -1, 0, 0]; // x轴的4个方向
  const dy = [0, 0, 1, -1]; // y轴的4个方向
  const m = board.length; // 缓存行数
  const n = board[0].length; // 缓存列数

  // 将单词表中的单词都插入字典树
  for (const word of words) {
    trie.insert(word);
  }

  // 查找当前位置的字母是否能够组合成单词
  // 使用DFS在矩阵中向四周查找能组成单词的字母
  function dfs(
    // 当前查询字母的坐标
    i,
    j,
    prevWord, // 之前已经生成的单词
    prevDict, // 上一个字母在字典树中的节点
  ) {
    const currChar = board[i][j]; // 当前坐标的字母
    const currDict = prevDict[currChar]; // 当前坐标在字典树中的节点
    const currWord = prevWord + currChar; // 当前字母组成的新单词

    // 查看新单词在字典树中是否有结束标记，有的话表示找到一个单词
    if (currDict[trie.endOfWord] === trie.endOfWord) {
      // 将单词存储到结果中，这里不需要退出，因为字典树可能还有后续节点
      result.add(currWord);
    }

    // 缓存当前的字母
    const temp = board[i][j];
    // 将当前字母用其他字符标记，避免重复选取
    board[i][j] = '@';

    // 查找当前坐标四周的字母
    for (let k = 0; k < 4; k++) {
      // 计算四周点的坐标
      const x = i + dx[k];
      const y = j + dy[k];

      // 如果新坐标超出矩阵，则跳过
      if (x < 0 || y < 0 || x >= m || y >= n) {
        continue;
      }

      // 如果新坐标已被使用过，或者当前字母不在字典树中，无需继续查找
      if (board[x][y] !== '@' && currDict[board[x][y]]) {
        // 继续查找新字母是否能组成所需单词
        dfs(x, y, currWord, currDict);
      }
    }

    // 恢复当前状态，清除选中标记
    board[i][j] = temp;
  }

  // 遍历整个矩阵，从每个字母查找单词表中的单词
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (trie.root[board[i][j]]) {
        dfs(i, j, '', trie.root);
      }
    }
  }

  // 将Set转换为数组返回结果
  return [...result];
};

// 字典树
class Trie {
  constructor() {
    // 根节点使用一个空对象，单词的每个字母作为对象的一个key
    this.root = {};
    // 使用一个固定的标记，标记一个节点为字典树的根节点
    // 此处使用Symbol标记，避免重复
    this.endOfWord = Symbol('EOF');
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    // 当一个单词插入字典树时，都从根节点开始插入
    let node = this.root;

    // 逐个字母遍历单词
    for (const char of word) {
      // 如果字母未在字典树中川建国节点，则创建一个新节点
      node[char] = node[char] || {};
      // 移动节点，向下遍历
      node = node[char];
    }

    // 标记当前节点是一个单词的结束位置
    node[this.endOfWord] = this.endOfWord;
  }
}
// @lc code=end
