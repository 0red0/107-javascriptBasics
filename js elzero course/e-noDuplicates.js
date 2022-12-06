// noDupicats

let arr = [];

let uniq = [...new Set(arr)];

console.log(uniq);


// removeUnWanted

let arr1 = [];
let arr2 = [];

let arr3 = arr1.filter((n) => !arr2.includes(n));
console.log(arr3);