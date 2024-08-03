let arr = [10,20,5,1,7,3]
let minValue = Infinity;
let maxValue = -Infinity;

for(i of arr){
    if(i < minValue){

        minValue = i
    }else if(i > maxValue){
        maxValue = i
    }
}
console.log(minValue, maxValue);