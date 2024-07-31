let arr = [ 20, 20, 78, 98, 99, 97];
let hold_arr = false


for(let i =0; i< arr.length; i++){
    if(arr[i+1]=== undefined){
        hold_arr = false
    }
    if(arr[i]<= arr[i+1]){
       
       hold_arr = true
    }
}
if(hold_arr == true){
    console.log("Yes");
}else{
    console.log("No");
}
