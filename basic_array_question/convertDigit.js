let num = "1234";
let length;
for(let i =0; i< num.length; i++){
     length = num.length
}

switch(length){
    case "1" :
        console.log(`${length} : One`);
        break;
        case "2" : 
        console.log(`${length} : Two`);
        break;
        case "3" :
        console.log(`${length} : Three`);
        break;
        case "4" :
        console.log(`${length} : Four`);
        break;
        default :
        console.log("Number is not exists");
    } 