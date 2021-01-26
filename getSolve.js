let solutions = document.querySelectorAll(
  '.css-7dwjih-Content .css-1e9rbo3-Link:last-child',
);
let exercises = [
  'https://leetcode-cn.com/problems/number-of-1-bits/',
  'https://leetcode-cn.com/problems/power-of-two/',
  'https://leetcode-cn.com/problems/reverse-bits/',
  'https://leetcode-cn.com/problems/n-queens/',
  'https://leetcode-cn.com/problems/n-queens-ii/',
  'https://leetcode-cn.com/problems/counting-bits/',
  'https://leetcode-cn.com/problems/lru-cache/',
  'https://leetcode-cn.com/problems/relative-sort-array/',
  'https://leetcode-cn.com/problems/valid-anagram/',
  'https://leetcode-cn.com/problems/design-a-leaderboard/',
  'https://leetcode-cn.com/problems/merge-intervals/',
  'https://leetcode-cn.com/problems/reverse-pairs/',
  'https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/',
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
