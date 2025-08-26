
    let text=document.getElementById("js");
let button = document.getElementById("btn");
button.onclick=function(){
    text.innerText="But with Consistancy";
}


let counter=document.getElementById("count");
counter.innerText=Number(counter.innerText);
let btndec=document.getElementById("dec");
btndec.onclick=function(){
    if( Number( counter.innerText)===1 || Number(counter.innerText)===0){
        counter.innerText=0;
    }else{
        counter.innerText--;
    }

    

}


let incbtn=document.getElementById("inc");
incbtn.onclick=function(){
    counter.innerText++;
}


let resetbtn=document.getElementById("res");
    
resetbtn.onclick=function(){
    counter.innerText=0;
}

let changeTheme=document.getElementById("btn1")
changeTheme.onclick=function(){
    document.body.classList.toggle("pink");
}

let img=document.getElementById("image");
let cat=document.getElementById("imgcat");
cat.onclick=function(){
img.setAttribute("src","cat.jpg");
}
let dog=document.getElementById("imgdog");
dog.onclick=function(){
img.setAttribute("src", "dog.jpg");
}
//live charater count 
 let cont=document.getElementById("h4");
    
let textinput=document.getElementById("inp");
textinput.oninput=function(){
cont.innerText=Number(textinput.value.length);
}