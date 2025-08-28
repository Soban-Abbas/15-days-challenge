let value=document.getElementById("value");
let main=document.getElementById("div1").addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){


if(e.target.innerText==="Decrease"){
    if(value.innerText>1){
        value.innerText=Number(value.innerText)-1;
    }else{
        (value.innerText)=Number(0);
    }
}


else if(e.target.innerText==="Reset"){
    value.innerText=Number(0);
}


else if(e.target.innerText==="Increase"){
      if(Number(value.innerText)===10){
        alert("MAX Value Reached");
    }else
    value.innerText=Number(value.innerText)+1;
  
    
}












    }
})
//Multiplication Table Generator
  let inputValue=document.getElementById("number");
   let message1=document.getElementById("message");
let button=document.getElementById("btn1");
button.addEventListener("click",function(e){
 
    if(inputValue.value==="" || inputValue.value==="0" || Number(inputValue.value)>10){
       message1.innerText="Please Enter correct b/w 0 and 11 ";
    }else if(Number(inputValue.value)>0 || Number(inputValue.value)<=10){

        for(let i=1;i<=10;i++){
           
           message1.innerHTML+=`<br>${inputValue.value} * ${i}=${inputValue.value*i}<br>`
        }

    }

})
