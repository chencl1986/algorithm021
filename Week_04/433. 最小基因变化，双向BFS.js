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
  let set = new Set(bank);

  if (!set.has(end)) {
    return -1;
  }

  let queue = [[start, 0]];
  let map = new Map([[end, 0]]);
  const geneBank = ['A', 'T', 'C', 'G'];

  while (queue.length && map.size) {
    if (queue.length > map.size) {
      [queue, map] = [Array.from(map), new Map(queue)];
    }

    const [gene, level] = queue.shift();

    for (let i = 0; i < gene.length; i++) {
      for (let j = 0; j < geneBank.length; j++) {
        const newGene = `${gene.slice(0, i)}${geneBank[j]}${gene.slice(i + 1)}`;

        if (map.has(newGene)) {
          return map.get(newGene) + level + 1;
        }

        if (set.has(newGene)) {
          set.delete(newGene);
          queue.push([newGene, level + 1]);
        }
      }
    }
  }

  return -1;
};
// @lc code=end
