// Optimised Solution took 0ms to run
function twoSum(nums, target) {
  const numToIndex = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(nums[i], i);
  }
  return []; // No solution found!
}

// My Solution - this took 6ms to run.

/*
const nums = [2, 7, 11, 15];
const target = 9;

const numToIndex = {};

// First pass: Populate the object
for (let i = 0; i < nums.length; i++) {
  numToIndex[nums[i]] = i;
}

// Second pass: Check for the complement
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (complement in numToIndex && numToIndex[complement] !== i) {
    return [i, numToIndex[complement]];
  }
}

return [];
*/
