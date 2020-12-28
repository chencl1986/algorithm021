/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let level = 0;
  let set = new Set(bank);
  let queue = [start];

  while (queue.length) {
    let queueLen = queue.length;

    while (--queueLen >= 0) {
      const gene = queue.shift();

      for (const newGene of set) {
        let diff = 0;

        for (let i = 0; i < gene.length; i++) {
          if (gene[i] !== newGene[i]) {
            diff++;
          }
        }

        if (diff === 1) {
          if (newGene === end) {
            return level + 1;
          }

          set.delete(newGene);
          queue.push(newGene);
        }
      }
    }

    level++;
  }

  return -1;
};
