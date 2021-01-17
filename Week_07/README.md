# 学习笔记

双向BFS模板，从[LeetCode题解：127. 单词接龙，双向BFS，JavaScript，详细注释](https://leetcode-cn.com/problems/word-ladder/solution/leetcodeti-jie-127-dan-ci-jie-long-shuang-xiang-bf)的代码提取而来。

``` javascript
var ladderLength = function (start, end, list) {
  // 每次都遍历队列，初始时存入start，对应层级为1
  let queue = [[start, 1]];
  // 虽然两端的遍历都需要使用队列，实际操作时可以用Map来加速判断是否相遇的过程
  // 每次遍历时，只需要取queue和map中长度较小的一个，将其转换为一个队列进行遍历即可
  let map = new Map([[end, 1]]);
  // 使用Set判断list中的单词是否被使用过
  let set = new Set(list);

  // 由于双向BFS即使end不存在于list中，也有可能会相遇
  // 因此要先判断list中是否有end，若不存在则表示不存在从start到end的路径
  if (!set.has(end)) {
    return 0;
  }

  // 如果queue和map中任意一个被清空，表示双向BFS不会相遇，即不存在从start到end的路径
  while (queue.length && map.size) {
    // 选取queue和map中较短的一个进行遍历，优化搜索速度
    if (queue.length > map.size) {
      // 将queue和map对调，保证每次遍历的都是queue
      [queue, map] = [Array.from(map), new Map(queue)];
    }

    // 将queue中元素出队，搜索下一个层节点
    const [now, level] = queue.shift();

    const next = /* 生成下一层节点 */;

    // 如果next在map中存在，表示双向BFS相遇，即为找到了最短路径
    if (map.has(next)) {
      // 将两端的level想加，即为总长度
      return map.get(next) + level;
    }

    // 如果next存在于list中，表示next可作为下一层节点
    if (set.has(next)) {
      // 将next从list中删除，避免重复使用
      set.delete(next);
      // 将next入队，进行下一层搜索，同时层级加一
      queue.push([next, level + 1]);
    }
  }

  // 如果退出循环，表示未找到转换序列，返回0
  return 0;
};
```

我为部分题目写了题解，如下：

其余没写题解的题目，都在作业中写了详细注释，有空时补上。

1. [LeetCode题解：200. 岛屿数量，DFS，JavaScript，详细注释](https://leetcode-cn.com/problems/number-of-islands/solution/leetcodeti-jie-200-dao-yu-shu-liang-dfsj-w48p)
2. [LeetCode题解：70. 爬楼梯，DP遍历，变量缓存结果，JavaScript，详细注释](https://leetcode-cn.com/problems/climbing-stairs/solution/70-pa-lou-ti-dpbian-li-bian-liang-huan-cun-jie-guo)
3. [LeetCode题解：70. 爬楼梯，DP遍历数组，JavaScript，详细注释](https://leetcode-cn.com/problems/climbing-stairs/solution/70-pa-lou-ti-dpbian-li-shu-zu-javascriptxiang-xi-z)
4. [LeetCode题解：70. 爬楼梯，递归+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/climbing-stairs/solution/70-pa-lou-ti-di-gui-ha-xi-biao-javascriptxiang-xi-)
5. [LeetCode题解：22. 括号生成，BFS，JavaScript，详细注释](https://leetcode-cn.com/problems/generate-parentheses/solution/leetcodeti-jie-22-gua-hao-sheng-cheng-bfsjia-fa-ja)
6. [LeetCode题解：22. 括号生成，递归生成同时过滤，JavaScript，详细注释](https://leetcode-cn.com/problems/generate-parentheses/solution/leetcodeti-jie-22-gua-hao-sheng-cheng-di-gui-sheng)
7. [LeetCode题解：22. 括号生成，递归先生成再过滤，JavaScript，详细注释](https://leetcode-cn.com/problems/generate-parentheses/solution/leetcodeti-jie-22-gua-hao-sheng-cheng-xian-sheng-c)
8. [LeetCode题解：52. N皇后 II，回溯+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/n-queens-ii/solution/leetcodeti-jie-52-nhuang-hou-iihui-su-ha-xi-biao-j)
9. [LeetCode题解：51. N 皇后，回溯+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/n-queens/solution/leetcodeti-jie-51-n-huang-hou-hui-su-ha-xi-biao-ja)
10. [LeetCode题解：126. 单词接龙 II，BFS，JavaScript，详细注释](https://leetcode-cn.com/problems/word-ladder-ii/solution/leetcodeti-jie-126-dan-ci-jie-long-iibfs-tm9m)
11. [LeetCode题解：127. 单词接龙，双向BFS，JavaScript，详细注释](https://leetcode-cn.com/problems/word-ladder/solution/leetcodeti-jie-127-dan-ci-jie-long-shuang-xiang-bf)
12. [LeetCode题解：127. 单词接龙，BFS+生成所有可能新单词再匹配，JavaScript，详细注释](https://leetcode-cn.com/problems/word-ladder/solution/leetcodeti-jie-127-dan-ci-jie-long-bfssheng-cheng-)
13. [LeetCode题解：127. 单词接龙，BFS+统计单词变化次数，JavaScript，详细注释](https://leetcode-cn.com/problems/word-ladder/solution/leetcodeti-jie-127-dan-ci-jie-long-bfsjavascriptxi)
14. [LeetCode题解：433. 最小基因变化，双向BFS（beats 99%），JavaScript，详细注释](https://leetcode-cn.com/problems/minimum-genetic-mutation/solution/leetcodeti-jie-433-zui-xiao-ji-yin-bian-pwwwg)
15. [LeetCode题解：433. 最小基因变化，BFS+生成所有可能新基因再匹配，JavaScript，详细注释](https://leetcode-cn.com/problems/minimum-genetic-mutation/solution/leetcodeti-jie-433-zui-xiao-ji-yin-bian-0hd8n)
16. [LeetCode题解：433. 最小基因变化，BFS+统计基因变化次数，JavaScript，详细注释](https://leetcode-cn.com/problems/minimum-genetic-mutation/solution/leetcodeti-jie-433-zui-xiao-ji-yin-bian-hua-bfsjav)
17. [LeetCode题解：433. 最小基因变化，DFS，JavaScript，详细注释](https://leetcode-cn.com/problems/minimum-genetic-mutation/solution/leetcodeti-jie-433-zui-xiao-ji-yin-bian-hua-dfsjav)

