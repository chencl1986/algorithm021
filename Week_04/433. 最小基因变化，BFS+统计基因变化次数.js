/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let count = 0; // 统计BFS遍历的深度
  let queue = [start]; // 在队列中存储起始基因序列，用于开始循环
  let visited = new Set(); // 使用Set标识访问过的bank中基因

  // 不断遍历队列，直到队列为空时，完成BFS
  while (queue.length) {
    // 缓存当前队列中的元素数量，即为当前层的元素数量
    let queueLength = queue.length;

    // 进行queueLength次遍历
    while (--queueLength >= 0) {
      // 将队列元素出队
      const str = queue.shift();

      // 遍历bank，查找只变化一次的基因序列
      for (let i = 0; i < bank.length; i++) {
        // 如果当前序列已被使用过，则跳过
        if (visited.has(bank[i])) {
          continue;
        }

        let diff = 0; // 统计基因变化的数量

        // 对比str和bank[i]的每个字符
        for (let j = 0; j < bank[i].length; j++) {
          // 当str与bank[i]的字符不一致时，记录基因变化次数
          if (str[j] !== bank[i][j]) {
            diff++;
            // 如果差异大于1，表示变化了2次，bank[i]不是可能的变化，退出循环
            if (diff > 1) {
              break;
            }
          }
        }

        // 由于题目要求基因每次只能变化一个字符，因此只有diff为1才可进入下一层递归
        if (diff === 1) {
          // 如果bank[i]等于目标序列，那么此时一定是第一次到达目标，且此时的变化数量一定是最小值
          // 如果bank中存在从起始序列到目标序列的变化方案，一定会从此处退出循环，并返回结果
          if (bank[i] === end) {
            return count + 1;
          }
          // 标识bank[i]已被使用过
          visited.add(bank[i]);
          // bank[i]即为新的基因序列，将其入队，作为下一层基因序列使用
          queue.push(bank[i]);
        }
      }
    }

    // 每完成一层遍历之后，变化数量就加1
    count++;
  }

  // 如果正常退出循环，说明bank中不存在从其实序列到目标序列的变化方案
  return -1;
};
