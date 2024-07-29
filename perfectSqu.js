// function perfectSquare(n){
//     const sqr = Math.floor(Math.sqrt(n));
//     return (sqr * sqr == n)
// }
// const findSqr = perfectSquare(2555)

// if(findSqr){
//     console.log("Number is a perfect square");
// }else{
//     console.log("No");
// }


// Binary search 
function findPerfectNo(n){
    if(n <= 1) {
        return true
    }
    let left = 1;
    let right = n;
    while(left <= right){
        let mid = Math.floor(left + ( right - left)/2)
        console.log(mid, "mid value");
        let square = mid * mid;
        console.log(square, "square");
        if(square ===n){
             return true
        }
        else if(square < n ){
            left = mid + 1;
        }
        else{
            right = mid -1
        }
    }
    return false;
}

const n =49;
if(findPerfectNo(n)){
    console.log(`${n} is a perfect square `);
}else {
    console.log(`${n} is not a perfect square`);
}