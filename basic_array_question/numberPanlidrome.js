const number = 1234;
let numStr = number.toString()

for(let i = 0; i < numStr.length / 2; i++){
        if(numStr[i] !== numStr[numStr.length - 1 - i]){
                console.log(numStr[numStr.length - 1 - i]);
            console.log(false);
            break;
        }else{
            console.log(true);
            break
        }
    }