let myForm=document.getElementById("myform");
let details=document.getElementById("details");
myForm.addEventListener("submit",function(e){
  e.preventDefault();

  let name=document.getElementById("name").value ;
  let email=document.getElementById("email").value;


let detObj={
  id:Date.now(),
  Name:name,
  Email:email
}




let makeString=JSON.stringify(detObj);
localStorage.setItem("details",makeString);
details.innerText=`Name: ${detObj.Name} Email: ${detObj.Email}`;


myForm.reset();

})



let retstring =localStorage.getItem("details");
let retobj=JSON.parse(retstring);


details.innerText=`Name: ${retobj.Name} Email: ${retobj.Email}`;



