let  n = 867;

let count =0
while(n !=0){
    count = count + n % 10;
    
    n = parseInt(n/10)
}
console.log(count);


