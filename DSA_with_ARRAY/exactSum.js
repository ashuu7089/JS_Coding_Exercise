let arr = [1, -2, 1, 0, 5]
let x = 0;
let flag = false;
for(let i = 0; i< arr.length; i++){

   if(arr[i+1] == undefined){
    flag = false;
   }
    if(arr[i]+ arr[i+1] == x){
        flag = true;
        break;
    }
}
if(flag == true){
    console.log("Yes");
}else{
    console.log("No");
}