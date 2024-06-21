// let text = "Hello I am User"
// const reverseString = str => str.split(' ').reverse().join(' ');
// console.log(reverseString(text));


function reverseString(str){
    let emptyString = ''
    for(let i = str.length -1; i>=0; i--){
        emptyString +=str[i];
    }
    return emptyString;
}
console.log(reverseString("Hello"));
 