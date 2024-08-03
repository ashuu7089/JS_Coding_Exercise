let max = [[9, 8, 7, 6],
[5, 4, 3, 2],
[1, 0, 12, 45]]

let row = 3;
let col = 4;
let maxElement = Number.MIN_VALUE
for(let i = 0 ; i<row; i++){
   
    for(let j =0 ; j< col ; j++){
        if(max[i][j]> maxElement){
            maxElement = max[i][j]
        }
    }
    
}
console.log(maxElement);