let arr = ["GeeksforGeeks", "FreeCodeCamp", "StackOverFlow",  "MyCodeSchool"]
let output = []

let max = output.push(arr[0].length)
console.log(max);
let res =[]
res.push(arr[0])
for(let i =1 ; i< arr.length; i++){
    
    if(arr[i]> max){
        max = arr[i].length
        res = []
        res.push(arr[i])
    }else if(arr[i].length == max){
        res.push(arr[i])
    }
}
console.log(res);