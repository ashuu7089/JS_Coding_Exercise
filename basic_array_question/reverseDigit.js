let n = 12345;
let count =0
while(n !=0){
    count = count *10 + n % 10;
    
    n = parseInt(n/10)
}
console.log(count);


