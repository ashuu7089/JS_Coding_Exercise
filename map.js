// const numbers = [1, 2, 3, 4];
// const two = [5,20,1]
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); // [2, 4, 6, 8]

const numbers = [1, 2, 3, 4];
const two = [5, 20, 1];

const multiplied = numbers.map((item, index) => item * two[index]);

// console.log(multiplied); // [5, 40, 3, 4]

const evenNumber = numbers.filter(mul => mul % 2 == 0 )

console.log(evenNumber);

const multi = evenNumber.map(div => div * 2)
console.log(multi);