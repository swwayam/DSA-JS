// Mistake : My solution was in n^2 but if I had used frequency map I would have solved in o(n)

// Optimised Solution (AI)
const s = "acaabbcceffdgi";
const count = {};

// Count frequency of each character
for (let char of s) {
    count[char] = (count[char] || 0) + 1;
}   

// Find the first character with frequency 1
for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
        console.log(i);
        break;
    }
}





// My Solution

// const s = "acaabbcceffdgi";
// let unique = "";
// // const len = s.length
// for (let i = 0; i < s.length; i++) {
//     unique = s[i];
//     let flag = false;
//     for (let j = 0; j < s.length; j++) {
//         if (s[i] == s[j] && j != i) {
//             flag = true;
//             break;
//         }
//     }

//     if (!flag) {
//         console.log(unique);
//         break;
//     }
// }
