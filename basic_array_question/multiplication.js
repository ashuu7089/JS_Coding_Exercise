// function multiply(num){
//     for(let i =1; i <=10; i++){
//         const data = num * i;
//         console.log(data);
//       //  console.log(num, "*", i, "=", num * i);
//     }
// }
// multiply(5)
let value=[];
for(let i =1; i<=10; i++){
    value.push(i)
    
}
const data = value.map(item => item * 5)
console.log(data);