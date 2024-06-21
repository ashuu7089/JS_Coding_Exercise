let arr = [10,20,6,15,25,0];
let minValue = Infinity;
let maxValue = -Infinity;

for(i of arr){
    if(i < minValue){
        minValue = i
    }else{
        maxValue = i
    }
}
console.log(minValue, maxValue);