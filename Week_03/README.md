# 学习总结

希望能在直播的时候讲解一下[90. 子集 II](https://leetcode-cn.com/problems/subsets-ii/)和[47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/)。
对这种去重的题目，感觉有点无从下手，虽然看了题解能做出来，但换一题可能就不会了。
目前能总结出的规律是：
1. 需要进行排序，排序后相同值都排列在一起
2. 只在相同值中选取第一个或最后一个值，用其生成所有可能情况，其他的值都排除掉

我为部分题目写了题解，如下：

> 从本周之后的题目我大都没做过，之后的题解会减少。我会尽量多写一些题解，虽然很影响刷题速度，但我觉得这是很好的学习方式。

1. [LeetCode题解：70. 爬楼梯，DP遍历，变量缓存结果，JavaScript，详细注释](https://leetcode-cn.com/problems/climbing-stairs/solution/70-pa-lou-ti-dpbian-li-bian-liang-huan-cun-jie-guo)
2. [LeetCode题解：70. 爬楼梯，DP遍历数组，JavaScript，详细注释](https://leetcode-cn.com/problems/climbing-stairs/solution/70-pa-lou-ti-dpbian-li-shu-zu-javascriptxiang-xi-z)
3. [LeetCode题解：70. 爬楼梯，递归+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/climbing-stairs/solution/70-pa-lou-ti-di-gui-ha-xi-biao-javascriptxiang-xi-)
4. [LeetCode题解：22. 括号生成，BFS，JavaScript，详细注释](https://leetcode-cn.com/problems/generate-parentheses/solution/leetcodeti-jie-22-gua-hao-sheng-cheng-bfsjia-fa-ja)
5. [LeetCode题解：22. 括号生成，递归生成同时过滤，JavaScript，详细注释](https://leetcode-cn.com/problems/generate-parentheses/solution/leetcodeti-jie-22-gua-hao-sheng-cheng-di-gui-sheng)
6. [LeetCode题解：22. 括号生成，递归先生成再过滤，JavaScript，详细注释](https://leetcode-cn.com/problems/generate-parentheses/solution/leetcodeti-jie-22-gua-hao-sheng-cheng-xian-sheng-c)
7. [LeetCode题解：98. 验证二叉搜索树，递归中序遍历过程中判断，JavaScript，详细注释](https://leetcode-cn.com/problems/validate-binary-search-tree/solution/leetcodeti-jie-98-yan-zheng-er-cha-sou-suo-shu-d-3)
8. [LeetCode题解：98. 验证二叉搜索树，递归中序遍历完成后再判断，JavaScript，详细注释](https://leetcode-cn.com/problems/validate-binary-search-tree/solution/leetcodeti-jie-98-yan-zheng-er-cha-sou-suo-shu-d-2)
9. [LeetCode题解：98. 验证二叉搜索树，使用栈中序遍历，JavaScript，详细注释](https://leetcode-cn.com/problems/validate-binary-search-tree/solution/leetcodeti-jie-98-yan-zheng-er-cha-sou-suo-shu-zho)
10. [LeetCode题解：98. 验证二叉搜索树，递归，JavaScript，详细注释](https://leetcode-cn.com/problems/validate-binary-search-tree/solution/leetcodeti-jie-98-yan-zheng-er-cha-sou-suo-shu-di-)
11. [LeetCode题解：104. 二叉树的最大深度，BFS，JavaScript，详细注释](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/leetcodeti-jie-104-er-cha-shu-de-zui-da-c1do9)
12. [LeetCode题解：104. 二叉树的最大深度，递归，JavaScript，详细注释](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/leetcodeti-jie-104-er-cha-shu-de-zui-da-shen-du-di)
13. [ LeetCode题解：111. 二叉树的最小深度，BFS，JavaScript，详细注释](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/solution/leetcodeti-jie-111-er-cha-shu-de-zui-xia-9qxk)
14. [LeetCode题解：111. 二叉树的最小深度，递归，JavaScript，详细注释](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/solution/leetcodeti-jie-111-er-cha-shu-de-zui-xiao-shen-du-)
15. [LeetCode题解：50. Pow(x, n)，迭代分治，JavaScript，详细注释](https://leetcode-cn.com/problems/powx-n/solution/leetcodeti-jie-50-powx-ndie-dai-fen-zhi-javascript)
16. [LeetCode题解：50. Pow(x, n)，递归分治，JavaScript，详细注释](https://leetcode-cn.com/problems/powx-n/solution/leetcodeti-jie-50-powx-nfen-zhi-javascriptxiang-xi)
17. [LeetCode题解：50. Pow(x, n)，暴力法，JavaScript，详细注释](https://leetcode-cn.com/problems/powx-n/solution/leetcodeti-jie-50-powx-nbao-li-fa-javascriptxiang-)
18. [LeetCode题解：90. 子集 II，迭代，JavaScript，详细注释](https://leetcode-cn.com/problems/subsets-ii/solution/leetcodeti-jie-90-zi-ji-iidie-dai-javascriptxiang-)
19. [LeetCode题解：90. 子集 II，迭代+位运算，JavaScript，详细注释](https://leetcode-cn.com/problems/subsets-ii/solution/leetcodeti-jie-90-zi-ji-iidie-dai-wei-yun-suan-jav)
20. [LeetCode题解：90. 子集 II，递归+for循环+回溯，JavaScript，详细注释](https://leetcode-cn.com/problems/subsets-ii/solution/leetcodeti-jie-90-zi-ji-iidi-gui-forxun-huan-hui-s)
21. [LeetCode题解：90. 子集 II，回溯+哈希表去重，JavaScript，详细注释](https://leetcode-cn.com/problems/subsets-ii/solution/leetcodeti-jie-90-zi-ji-iihui-su-ha-xi-biao-qu-zho)
22. [LeetCode题解：78. 子集，迭代，JavaScript，详细注释](https://leetcode-cn.com/problems/subsets/solution/leetcodeti-jie-78-zi-ji-die-dai-javascriptxiang-2)
23. [LeetCode题解：78. 子集，递归+for循环+回溯，JavaScript，详细注释](https://leetcode-cn.com/problems/subsets/solution/leetcodeti-jie-78-zi-ji-di-gui-forxun-huan-hui-su-)
24. [LeetCode题解：78. 子集，迭代+位运算，JavaScript，详细注释](https://leetcode-cn.com/problems/subsets/solution/leetcodeti-jie-78-zi-ji-die-dai-javascriptxiang-xi)
25. [LeetCode题解：78. 子集，递归回溯，JavaScript，详细注释](https://leetcode-cn.com/problems/subsets/solution/leetcodeti-jie-78-zi-ji-di-gui-hui-su-javascriptxi)
26. [LeetCode题解：169. 多数元素，分治，JavaScript，详细注释](https://leetcode-cn.com/problems/majority-element/solution/leetcodeti-jie-169-duo-shu-yuan-su-fen-zhi-javascr)
27. [LeetCode题解：169. 多数元素，排序，JavaScript，详细注释](https://leetcode-cn.com/problems/majority-element/solution/leetcodeti-jie-169-duo-shu-yuan-su-pai-xu-javascri)
28. [LeetCode题解：169. 多数元素，哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/majority-element/solution/leetcodeti-jie-169-duo-shu-yuan-su-ha-xi-biao-java)
29. [LeetCode题解：17. 电话号码的字母组合，BFS，JavaScript，详细注释](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/leetcodeti-jie-17-dian-hua-hao-ma-de-zi-fjmys)
30. [LeetCode题解：17. 电话号码的字母组合，队列，JavaScript，详细注释](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/leetcodeti-jie-17-dian-hua-hao-ma-de-zi-mu-zu-he-d)
31. [LeetCode题解：17. 电话号码的字母组合，回溯，JavaScript，详细注释](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/leetcodeti-jie-17-dian-hua-hao-ma-de-zi-mu-zu-he-h)
32. [LeetCode题解：52. N皇后 II，回溯+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/n-queens-ii/solution/leetcodeti-jie-52-nhuang-hou-iihui-su-ha-xi-biao-j)
33. [LeetCode题解：51. N 皇后，回溯+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/n-queens/solution/leetcodeti-jie-51-n-huang-hou-hui-su-ha-xi-biao-ja)
34. [LeetCode题解：236. 二叉树的最近公共祖先，存储父节点，JavaScript，详细注释](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/leetcodeti-jie-236-er-cha-shu-de-zui-jin-p8zb)
35. [LeetCode题解：236. 二叉树的最近公共祖先，递归，JavaScript，详细注释](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/leetcodeti-jie-236-er-cha-shu-de-zui-jin-4llp)
36. [LeetCode题解：105. 从前序与中序遍历序列构造二叉树，Simple O(n) without map，JavaScript，详细注释](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/leetcodeti-jie-105-cong-qian-xu-yu-zhong-rozn)
37. [LeetCode题解：105. 从前序与中序遍历序列构造二叉树，递归+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/leetcodeti-jie-105-cong-qian-xu-yu-zhong-ns9q)
38. [LeetCode题解：105. 从前序与中序遍历序列构造二叉树，递归+使用索引，JavaScript，详细注释](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/leetcodeti-jie-105-cong-qian-xu-yu-zhong-jasc)
39. [LeetCode题解：105. 从前序与中序遍历序列构造二叉树，递归+数组切割，JavaScript，详细注释](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/leetcodeti-jie-105-cong-qian-xu-yu-zhong-r52p)
40. [LeetCode题解：17. 电话号码的字母组合，BFS，JavaScript，详细注释](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/leetcodeti-jie-17-dian-hua-hao-ma-de-zi-fjmys)
41. [LeetCode题解：17. 电话号码的字母组合，队列，JavaScript，详细注释](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/leetcodeti-jie-17-dian-hua-hao-ma-de-zi-mu-zu-he-d)
42. [LeetCode题解：17. 电话号码的字母组合，回溯，JavaScript，详细注释](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/leetcodeti-jie-17-dian-hua-hao-ma-de-zi-mu-zu-he-h)
43. [LeetCode题解：77. 组合，递归回溯，JavaScript，详细注释](https://leetcode-cn.com/problems/combinations/solution/leetcodeti-jie-77-zu-he-di-gui-hui-su-javascriptxi)
44. [LeetCode题解：77. 组合，回溯+for循环，JavaScript，详细注释](https://leetcode-cn.com/problems/combinations/solution/leetcodeti-jie-77-zu-he-hui-su-javascriptxiang-xi-)
45. [LeetCode题解：47. 全排列 II，回溯，JavaScript，详细注释](https://leetcode-cn.com/problems/permutations-ii/solution/leetcodeti-jie-47-quan-pai-lie-iihui-su-javascript)
46. [LeetCode题解：46. 全排列，回溯，JavaScript，详细注释](https://leetcode-cn.com/problems/permutations/solution/leetcodeti-jie-46-quan-pai-lie-hui-su-javascriptxi)
47. [LeetCode题解：47. 全排列 II，回溯，JavaScript，详细注释](https://leetcode-cn.com/problems/permutations-ii/solution/leetcodeti-jie-47-quan-pai-lie-iihui-su-javascript)

