let arr =[ 10,52,20,15,9]
let firstMax = -Infinity;
let secondMax = -Infinity;
for(let i of arr){
    if(i > firstMax){
        secondMax = firstMax;
        firstMax = i
    }else if(i > secondMax && i < firstMax){
        secondMax = i
    }
}
console.log(secondMax);