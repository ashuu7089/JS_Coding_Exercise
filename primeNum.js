let flag = false
function prime(num){
    if(num == 1 || num == 0){
        console.log("number is not composite");
    }
    for(let i =2; i<= num; i++){
        if(num%i == 0){
            flag = true
        }else{
            flag = false
        }
    }
}
prime(10)
if(flag == true){
    console.log("Prime Number ");
}else{
    console.log("Not a Prime Number ");
}
