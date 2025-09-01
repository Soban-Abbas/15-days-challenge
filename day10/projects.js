let darkLightbtn=document.getElementById("darklightmode");
darkLightbtn.addEventListener("click",function(e){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light")
    }
})


if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}else if (localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");
}