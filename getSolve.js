let solutions = document.querySelectorAll(
  '.css-7dwjih-Content .css-1e9rbo3-Link:last-child',
);
let exercises = [
  'https://leetcode.com/problems/climbing-stairs/',
  'https://leetcode-cn.com/problems/generate-parentheses/',
  'https://leetcode-cn.com/problems/invert-binary-tree/description/',
  'https://leetcode-cn.com/problems/validate-binary-search-tree/',
  'https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/',
  'https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/',
  'https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/',
  'https://leetcode-cn.com/problems/powx-n/',
  'https://leetcode-cn.com/problems/subsets/',
  'https://leetcode-cn.com/problems/majority-element/',
  'https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/',
  'https://leetcode-cn.com/problems/n-queens/',
  'https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/',
  'https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
  'https://leetcode-cn.com/problems/combinations/',
  'https://leetcode-cn.com/problems/permutations/',
  'https://leetcode-cn.com/problems/permutations-ii/',
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
