let n = 10
let sum=0;
let sqr_root=0
let i=1;
let sqr_of_number;
while(i <= n){
   (sum +=i)*sum
   sqr_root +=i*i;
    i++
}
sqr_of_number = sum * sum;
let absolute_value =  sqr_of_number - sqr_root;
console.log(absolute_value);