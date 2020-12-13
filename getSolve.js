let solutions = document.querySelectorAll(
  '.css-7dwjih-Content .css-1e9rbo3-Link:last-child',
);
let exercises = [
  'https://leetcode-cn.com/problems/valid-anagram/',
  'https://leetcode-cn.com/problems/group-anagrams/',
  'https://leetcode-cn.com/problems/two-sum/',
  'https://leetcode-cn.com/problems/binary-tree-inorder-traversal/',
  'https://leetcode-cn.com/problems/binary-tree-preorder-traversal/',
  'https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/',
  'https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/',
  'https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/',
  'https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/',
  'https://leetcode-cn.com/problems/sliding-window-maximum/',
  'https://leetcode-cn.com/problems/chou-shu-lcof/',
  'https://leetcode-cn.com/problems/top-k-frequent-elements/',
];
let exerciseMap = new Map(
  exercises.map((exercise, index) => {
    const arr = exercise.split('/');
    console.log(arr);
    return [arr[arr.length - 2], index];
  }),
);
let resultArr = new Array(exerciseMap.size);
let result = '';
let count = 1;
let test = 0;

console.log(solutions);
console.log(exerciseMap);
console.log(resultArr);
Array.from(solutions).forEach((solution) => {
  for (const [exercise, index] of exerciseMap) {
    if (solution.getAttribute('href').match(exercise)) {
      /* console.log(
        solution.innerHTML,
        exercise,
        solution.innerHTML.match(exercise),
        index,
      ); */
      const str = `[${solution.innerHTML}](${
        window.origin + solution.getAttribute('href')
      })\n`;
      if (resultArr[index]) {
        resultArr[index].push(str);
      } else {
        resultArr[index] = [str];
      }
    }
  }
});

console.log(test);
console.log(resultArr);
for (let i = 0; i < resultArr.length; i++) {
  if (resultArr[i]) {
    for (let j = 0; j < resultArr[i].length; j++) {
      result += `${count++}. ${resultArr[i][j]}`;
    }
  }
}

copy(result);
console.log(result);
