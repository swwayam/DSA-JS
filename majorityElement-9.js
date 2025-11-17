
const data = {};
for (let e of nums) {
  data[e] = (data[e] || 0) + 1;
}

console.log(Object.keys(data).reduce((a,b) => data[a] > data[b] ? a : b));
