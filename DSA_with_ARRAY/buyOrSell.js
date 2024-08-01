
let arr = [0, 1, 5, 3, 6, 4]

let buy = arr[0];

let maxProfit = 0;


for(let i = 0; i < arr.length; i++){
    if(buy > arr[i]){
        buy = arr[i];
    }else if(arr[i] - buy > maxProfit){
        maxProfit = arr[i] - buy
    }
}console.log(maxProfit);