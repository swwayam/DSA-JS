// Improved Code 

const nums = [1, 1, 1, 2, 1, 1, 3, 7];
const freq = {};
let count = 0;

// Build frequency map
for (const num of nums) {
  freq[num] = (freq[num] || 0) + 1;
}

// Check for harmonious subsequence
for (const key in freq) {
  const num = parseInt(key);
  if (freq.hasOwnProperty(num + 1)) {
    const total = freq[num] + freq[num + 1];
    if (total > count) {
      count = total;
    }
  }
}

console.log(count);  // Output: 5





/*******************My Code **********

const nums = [1, 1, 1, 2, 1, 1, 3, 7];
const set = {};
count = 0;

for (const num of nums) {
  if (set.hasOwnProperty(num.toString())) {
    set[num] += 1;
  } else {
    set[num] = 1;
  }
}

for (const s in set) {
  let min = s;
  let max;


  for (const j in set) {
    let newCount;

    if (s - j == 1 || s - j == -1) {
      max = j;
    }

    if (max) {
       newCount= set[min] + set[max];
    }

    if (newCount > count) {
      count = newCount;
    }
  }
}

console.log(count);

*/