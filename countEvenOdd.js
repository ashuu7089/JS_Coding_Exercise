let arr = [22, 32, 42, 52, 62]
let even= 0;
let odd = 0;
for(let i = 0 ; i< arr.length; i++){
    if(arr[i]%2 ==0){
        even++
    }else{
        odd++
    }
}
console.log(`Even Number is ${even}`);
console.log(`Odd Number is ${odd}`);