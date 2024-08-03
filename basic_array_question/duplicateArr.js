const array=[1,3,2,4,1,3]
const duplicateArray=[]
for(let i=0;i<array.length;i++){
    let flag = false
    for(let j=i+1;j<array.length;j++){
        if(j!==i && array[j]===array[i]){
            flag = true
            break
        }
    }
    if(flag === true){
        duplicateArray.push(array[i])
    }
    
}
console.log(duplicateArray)