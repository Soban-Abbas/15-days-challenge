let timer=document.getElementById("timer");
let resetBtn=document.getElementById("reset");
let startBtn=document.getElementById("start");
let stopBtn=document.getElementById("stop");
let chnageBrt = document.getElementById("theme")


let retstring = localStorage.getItem("timer");
let remainingTime = retstring ? JSON.parse(retstring) : 1500;
remaingtime();
// total time in sec 1500=25min
let id;
function remaingtime(){
    let min=Math.floor( remainingTime/60); //finding mints 
    let sec = remainingTime%60; //finding sec
    timer.innerText=`${String(min).padStart(2,"0")} : ${String(sec).padStart(2,"0")}`;

let makestring =JSON.stringify(remainingTime);
localStorage.setItem("timer",makestring);


}


function start(){
    if(id) return;
id=    setInterval(function(){

    if(remainingTime===0){
    clearInterval(id);//stop interval
id=null;
    remaingtime();
    alert("time up!")

}


remainingTime--;
remaingtime();





    },1000)





}


function stop(){
    clearInterval(id);//stop interval
    remaingtime();//showing time
}
function reset(){
clearInterval(id);//stooping interval
remainingTime=25*60; //reeset timer 
remaingtime();//showing time;
}



startBtn.addEventListener("click",start);
stopBtn.addEventListener("click",stop);
resetBtn.addEventListener("click",reset);


function changeTheme(){

    let value=localStorage.getItem("theme");
if(value==="dark"){
    document.body.classList.add("dark");
}else
{
    document.body.classList.remove("dark");
}


}

changeTheme();


let themeBtn=document.getElementById("theme");
themeBtn.addEventListener("click",function(e){
    let value=document.body.classList.toggle("dark");
    localStorage.setItem("theme",value?"dark":"light");
})