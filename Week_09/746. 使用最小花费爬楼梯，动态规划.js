/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 *
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/description/
 *
 * algorithms
 * Easy (54.65%)
 * Likes:    504
 * Dislikes: 0
 * Total Accepted:    82.7K
 * Total Submissions: 151.3K
 * Testcase Example:  '[0,0,0,0]'
 *
 * 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
 *
 * 每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。
 *
 * 请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：cost = [10, 15, 20]
 * 输出：15
 * 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * 输出：6
 * 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * cost 的长度范围是 [2, 1000]。
 * cost[i] 将会是一个整型数据，范围为 [0, 999] 。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const target = cost.length; // 数组长度即为到达目标位置
  // 每次可以走两步，因此只需要保存两个结果
  // 起点可以是0或1，此时还没有开始爬楼梯，因此cost都为0
  let prev = 0;
  let curr = 0;

  // 从2开始递推到target
  for (let i = 2; i <= target; i++) {
    const temp = curr; // curr是下一次递推的prev，先缓存
    // 当前位置，可以从前两个位置支付一个cost走过来，并且取最小值
    curr = Math.min(prev + cost[i - 2], curr + cost[i - 1]);
    prev = temp; // 将缓存的curr作为prev
  }

  // 递推到target，curr的值就是走到目标的花费
  return curr;
};
// @lc code=end
