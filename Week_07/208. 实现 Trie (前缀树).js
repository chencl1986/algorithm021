/**
 * Initialize your data structure here.
 */
var Trie = function () {
  // 根节点使用一个空对象，单词的每个字母作为对象的一个key
  this.root = {};
  // 使用一个固定的标记，标记一个节点为字典树的根节点
  // 此处使用Symbol标记，避免重复
  this.endOfWord = Symbol('EOF');
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
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
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  // 单词的搜索从根节点开始
  let node = this.root;

  // 在字典树中查找单词的每个字母
  for (const char of word) {
    // 如果当前字母不存在于字典树，该单词也一定不存在
    if (!node[char]) {
      return false;
    }

    // 移动节点，向下查找
    node = node[char];
  }

  // 如果该单词的最后一个字母对应的节点，在字典树中被标记为单词结尾，才表示这个单词在字典树中存在
  return node[this.endOfWord] === this.endOfWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  // 从根节点开始判断单词是否存在
  let node = this.root;

  // 在字典树中查找单词的每个字母
  for (const char of prefix) {
    // 如果当前字母不存在于字典树，该单词也一定不存在
    if (!node[char]) {
      return false;
    }

    // 移动节点，向下查找
    node = node[char];
  }

  // 此处无需判断单词是否完整的在字典树中存在，只要字典树中存在单词所有字母即可
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
