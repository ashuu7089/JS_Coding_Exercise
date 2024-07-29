let arr = [1,1,1,1]
let smallest=1;
for(let i =0; i<arr.length; i++){
    if(arr[i]<= smallest){
        smallest+= arr[i]
    }else{
        break;
    }
}
console.log(smallest);