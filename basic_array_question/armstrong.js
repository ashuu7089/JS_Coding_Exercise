let num = 120
let take_num_str = num.toString()
let sum =0;
for(let i =0; i< take_num_str.length; i++){

    sum+= parseInt(take_num_str[i])** take_num_str.length;
}
if(sum == num){
    console.log(`${sum} is a Armstrong number`);
}else{
    console.log(`${sum} is not a Armstrong number`);
}