let usernumber=prompt("Enter Number");
let count=document.getElementById("count");
let number = Number(usernumber);
let id=setInterval(function(
){

  
  count.innerText=number;
  number--;
  if(number===0){
     count.innerText="";
    clearInterval(id);
   
  }




},1000)