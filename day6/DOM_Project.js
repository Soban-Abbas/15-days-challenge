let counter=document.getElementById("count")
let heading=document.getElementById("h");
let btn=document.getElementsByClassName("btn");
counter.addEventListener("click",function(e){
if(e.target.tagName==="BUTTON"){
    e.stopPropagation();
    
    if(e.target.innerText==="Increase"){
       Number(heading.innerText++);
    }else if(e.target.innerText==="Reset" ){
        heading.innerText=0;
    }
}else
    return false;
});

//Change Background with dropdown
let clrs=document.getElementsByClassName("clr");
let select=document.getElementById("select").addEventListener("change",function(e){
    // if(e.target.tagName==="OPTION"){
    //     e.stopPropagation();
    //     if(e.target.innerText==="Black"){
    //         e.target.classList.toggle("Black");
    //     }else if(e.target.innerText==="Pink"){
    //         e.target.classList.toggle("Pink")
    //     }else if(e.target.innerText==="Yellow"){
    //         e.target.classList.toggle("Yellow")
    //     }
    // }else 
    //     return false;
    if(e.target.value==="Black"){
          document.body.classList.toggle("Black");
    }else if(e.target.value==="Pink"){
           document.body.classList.toggle("Pink")
    }else if(e.target.value==="Yellow"){
        document.body.classList.toggle("Yellow")
    }else {
        return false;
    }
})

//prevent form submitsion
let message=document.getElementById("message");
let form=document.getElementById("myform")
form.addEventListener("submit",function(event){
    event.preventDefault();
    let valid=true;
    
    if(message.value===""){
        let errorMessage=document.getElementById("emess");
        errorMessage.textContent="PLease write message ";
        valid=false;
    }else {   form.reset();
        alert("form submitted successfuly")}
      
    }
    
)

//todolist
let list=document.getElementById("list").addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
      e.target.classList.toggle("done");
    }
})
