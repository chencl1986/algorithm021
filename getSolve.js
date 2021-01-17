let solutions = document.querySelectorAll(
  '.css-7dwjih-Content .css-1e9rbo3-Link:last-child',
);
let exercises = [
  'https://leetcode-cn.com/problems/implement-trie-prefix-tree/',
  'https://leetcode-cn.com/problems/word-search-ii/',
  'https://leetcode-cn.com/problems/number-of-provinces/',
  'https://leetcode-cn.com/problems/number-of-islands/',
  'https://leetcode-cn.com/problems/surrounded-regions/',
  'https://leetcode-cn.com/problems/climbing-stairs/',
  'https://leetcode-cn.com/problems/generate-parentheses/',
  'https://leetcode-cn.com/problems/n-queens/',
  'https://leetcode-cn.com/problems/valid-sudoku/',
  'https://leetcode-cn.com/problems/sudoku-solver/',
  'https://leetcode-cn.com/problems/word-ladder/',
  'https://leetcode-cn.com/problems/minimum-genetic-mutation/',
  'https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/',
  'https://leetcode-cn.com/problems/sliding-puzzle/',
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
