let str = 'Madam';
let flag = true;

for(let i = 0; i < str.length / 2; i++){
    if(str[i] !== str[str.length - 1 - i]){
        console.log(false);
        break;
    }else{
        console.log(true);
        break
    }
}
