let arr = [1, 2, 3, 4 ,3]
let bag = '';
let flag = false
for(let i = 0; i< arr.length; i++){
    for(let j = i+1; j< arr.length; j++){
        if(arr[i]== arr[j]){
            if(flag){
                bag+=","
            }
            bag+=arr[j]
            flag = true
        }
          
    }
}
console.log(bag);