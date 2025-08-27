    let heading=document.getElementById("a");

let btn=document.getElementById("b");
btn.addEventListener("click",function(){

    heading.innerText="button is clicked";
})
btn.addEventListener("click",function(){
let para=document.getElementsByTagName("p")
    para[0].innerText="Js is interestion by with consistancy";
})
//Learn about event obj
let c=document.querySelector("input");
c.addEventListener("focus",function(event){
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    console.log(event.target.value)
    console.log(event.clientX)

})
document.body.addEventListener("mouseover", function(e){
    console.log(e.type)
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY)
})
//Event Deligation

let allBtn=document.getElementsByClassName("btn");
let button=document.getElementById("div");
button.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        if(e.target===allBtn[0]){
            document.body.classList.toggle("black");
        }else if(e.target===allBtn[1]){
             document.body.classList.toggle("pink");
        }else if (e.target===allBtn[2]){
             document.body.classList.toggle("yeelow");
        }
    }else{
        return false;
    }
})
    
