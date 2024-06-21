// let arr = [{s:10,u:20,m:30}];
let arr = [1,2,3,4,[5,4,1,2]]

// const sum = arr.reduce((acc, current)=>{
//     return acc + current ;
// },0)
//  console.log(sum);



const flattenedArr = arr.flat();
const sum = flattenedArr.reduce((acc, current) => acc + current, 0);

console.log(sum); // 22
