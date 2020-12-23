/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let level = 0; // 统计BFS遍历的深度
  let queue = [start]; // 在队列中存储起始基因序列，用于开始循环
  let bankSet = new Set(bank); // 存储未被访问过的基因序列
  let charBank = ['A', 'T', 'C', 'G']; // 每个基因可变化的字母

  // 不断遍历队列，直到队列为空时，完成BFS
  while (queue.length) {
    // 缓存当前队列中的元素数量，即为当前层的元素数量
    let queueLength = queue.length;

    // 进行queueLength次遍历
    while (--queueLength >= 0) {
      // 将队列中的当前基因出队
      const currGene = queue.pop();

      // 遍历当前基因的字母
      for (let i = 0; i < currGene.length; i++) {
        // 从当前可变化字母中寻找一个可用的字母
        for (let j = 0; j < charBank.length; j++) {
          // 避免生成与当前基因重复的序列
          if (charBank[j] === currGene[i]) {
            continue;
          }

          // 生成一个新基因序列
          const newGene = `${currGene.slice(0, i)}${
            charBank[j]
          }${currGene.slice(i + 1)}`;

          // 判断新基因是否使用
          if (bankSet.has(newGene)) {
            // 如果第一次发现，新基因与目标相同，表示查找到了最短变化路径
            if (newGene === end) {
              // 由于当前变化没有被计数，返回结果时需要加1
              return ++level;
            }

            // 将当前基因从Set中删除，表示其被访问过
            bankSet.delete(newGene);
            // 将当前基因存入数组，用于下一次变化
            queue.push(newGene);
          }
        }
      }
    }

    // 每完成一层遍历之后，变化数量就加1
    level++;
  }

  // 如果退出循环，表示未找到变化路径，直接返回-1
  return -1;
};
// @lc code=end
