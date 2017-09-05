const args = process.argv;
const nums = args.slice(2, args.length).map(num => parseInt(num));
console.log(nums.reduce((acc, curr) => acc + curr));