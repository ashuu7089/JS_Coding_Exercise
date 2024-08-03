let arr = [5, 3, 6, 7, 5, 3]
let sum = 0;
let count;

for(let i = 0; i< arr.length; i++){
    sum = sum +arr[i]
    count = arr.length
}

const avg_num = sum/count
console.log(avg_num);
