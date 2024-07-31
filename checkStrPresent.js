
let word = "eeks";
let str = "Geeks for Geeks";
let flag = false
let sep = str.split(' ')

for(let i =0 ; i< sep.length; i++){
    console.log(sep[i]);
    if(sep[i] == word){
        flag = true
    }else{
        flag = false
    }
    
}
if(flag == true){
    console.log("Word is present in string");
}else{
    console.log("Word is not present");
}