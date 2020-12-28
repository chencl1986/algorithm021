/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  // 使用Set判断bank中的单词是否被使用过
  let bankSet = new Set(bank);

  // 如果end不存在于bank，一定无法变化，直接返回-1
  if (!bankSet.has(end)) {
    return -1;
  }

  // 每次都遍历队列，初始时存入start，对应层级为0
  let queue = [[start, 0]];
  // 虽然两端的遍历都需要使用队列，实际操作时可以用Map来加速判断是否相遇的过程
  // 每次遍历时，只需要取queue和map中长度较小的一个，将其转换为一个队列进行遍历即可
  let map = new Map([[end, 0]]);
  // 每个基因可变化的字母
  const geneBank = ['A', 'T', 'C', 'G'];

  // 如果queue和map中任意一个被清空，表示双向BFS不会相遇，即为无法进行转换
  while (queue.length && map.size) {
    // 选取queue和map中较短的一个进行遍历，优化搜索速度
    if (queue.length > map.size) {
      // 将queue和map对调，保证每次遍历的都是queue
      [queue, map] = [Array.from(map), new Map(queue)];
    }

    // 将queue中元素出队，搜索下一个转换的基因
    const [gene, level] = queue.shift();

    // 遍历当前基因的每个字符
    for (let i = 0; i < gene.length; i++) {
      // 选择一个可变化的字母，生成
      for (let j = 0; j < geneBank.length; j++) {
        // 如果新字母与当前的相同，一定不是下一个可变的基因，直接跳过
        if (geneBank[j] === gene[i]) {
          continue;
        }

        // 将每一位字母都用新字母替换，生成新基因
        const newGene = `${gene.slice(0, i)}${geneBank[j]}${gene.slice(i + 1)}`;

        // 如果新基因在Map中存在，表示双向BFS相遇，即为找到了最短变化路径
        if (map.has(newGene)) {
          // 将两端的变化次数想加，加上当次移动的变化，即为总的变化次数
          return map.get(newGene) + level + 1;
        }

        // 如果新基因在Set中，表示它是下一个可变化的基因
        if (bankSet.has(newGene)) {
          // 将其从Set中删除，避免重复选择
          bankSet.delete(newGene);
          // 将其插入到队列中，进行下一次变化
          queue.push([newGene, level + 1]);
        }
      }
    }
  }

  // 如果推出循环，表示没有找到可变化的路径，返回-1
  return -1;
};
