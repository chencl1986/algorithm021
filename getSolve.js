let solutions = document.querySelectorAll(
  '.css-7dwjih-Content .css-1e9rbo3-Link:last-child',
);
let exercises = [
  'https://leetcode-cn.com/problems/unique-paths/',
  'https://leetcode-cn.com/problems/unique-paths-ii/',
  'https://leetcode-cn.com/problems/longest-common-subsequence/',
  'https://leetcode-cn.com/problems/climbing-stairs/',
  'https://leetcode-cn.com/problems/triangle/',
  'https://leetcode-cn.com/problems/maximum-subarray/',
  'https://leetcode-cn.com/problems/maximum-product-subarray/',
  'https://leetcode-cn.com/problems/coin-change/',
  'https://leetcode-cn.com/problems/house-robber/',
  'https://leetcode-cn.com/problems/house-robber-ii/',
  'https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/',
  'https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/',
  'https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/',
  'https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
  'https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/',
  'https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/',
  'https://leetcode-cn.com/problems/perfect-squares/',
  'https://leetcode-cn.com/problems/edit-distance/',
  'https://leetcode-cn.com/problems/jump-game/',
  'https://leetcode-cn.com/problems/jump-game-ii/',
  'https://leetcode-cn.com/problems/unique-paths-iii/',
  'https://leetcode-cn.com/problems/coin-change-2/',
  'https://leetcode-cn.com/problems/minimum-path-sum/',
  'https://leetcode-cn.com/problems/decode-ways/',
  'https://leetcode-cn.com/problems/maximal-square/',
  'https://leetcode-cn.com/problems/task-scheduler/',
  'https://leetcode-cn.com/problems/palindromic-substrings/',
  'https://leetcode-cn.com/problems/longest-valid-parentheses/',
  'https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/',
  'https://leetcode-cn.com/problems/frog-jump/',
  'https://leetcode-cn.com/problems/split-array-largest-sum/',
  'https://leetcode-cn.com/problems/student-attendance-record-ii/',
  'https://leetcode-cn.com/problems/minimum-window-substring/',
  'https://leetcode-cn.com/problems/burst-balloons/',
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
