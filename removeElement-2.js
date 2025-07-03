// My mistake is I didn't read the question properly nor did the input and the expected output properly.

// Correct Solution (AI)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // Count of elements not equal to val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Place the valid element at the front
            k++;
        }
    }

    return k;
};




/************************* My Solution */


/*

let nums = [3,2,2,3]
const newNums = []
const val = 3


for(let i = 0; i < nums.length; i++){
    if (nums[i] !== 3) {
        newNums.push(nums[i])
    }
}

nums = [...newNums]


console.log(nums);

*/