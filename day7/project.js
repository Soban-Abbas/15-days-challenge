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