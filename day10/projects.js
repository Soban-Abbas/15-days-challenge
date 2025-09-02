let search=document.getElementById("search");
let list=document.getElementsByTagName("li");
let message=document.getElementById("notFound");
search.addEventListener("input",function(e){
  let found=false;
  let userInput=search.value.toLowerCase();

  for(let i=0;i<list.length;i++)
{
  let listContent=list[i].innerText.toLowerCase();
  if(listContent.includes(userInput)){
    list[i].style.display="";
    found =true;

  }else{
list[i].style.display="none";
  }
  if(!found){
    message.style.display="";
  }else{
    message.style.display="none";
  }
















}










})