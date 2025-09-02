let sentenceArray = ["I", "am", "learning", "JavaScript", "every", "day"];


let heading=document.querySelector("h2");

let i=0;
let id=setInterval(function(){

heading.innerText=`${heading.innerText} ${sentenceArray[i]}`;
i++;
if(i>=sentenceArray.length){
  clearInterval(id);
}


},1000)