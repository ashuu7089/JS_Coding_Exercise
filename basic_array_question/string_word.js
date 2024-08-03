let text = "Hello";

let Output = {};


for(let i of text){  
   
    if(Output[i]){
        
        Output[i]++
    }else{
        Output[i] =1
    }
}
console.log(Output);

/*  
i= 0    i< text.length  if(output[i])   output[i]++     else { Outpout[i] =1}
i=0         0<5                                            { H: 1 }
i=1         1<5                                            {e : 1 }  
i=2         2<5                                            {l: 1}      
i=3         3<5         { l:1 }(true)    {l:1+1} l=2     
i=4         4<5                                             {o : 1}                                                            
*/