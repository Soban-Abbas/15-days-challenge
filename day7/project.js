// let value=document.getElementById("value");
// let main=document.getElementById("div1").addEventListener("click",function(e){
//     if(e.target.tagName==="BUTTON"){


// if(e.target.innerText==="Decrease"){
//     if(value.innerText>1){
//         value.innerText=Number(value.innerText)-1;
//     }else{
//         (value.innerText)=Number(0);
//     }
// }


// else if(e.target.innerText==="Reset"){
//     value.innerText=Number(0);
// }


// else if(e.target.innerText==="Increase"){
//       if(Number(value.innerText)===10){
//         alert("MAX Value Reached");
//     }else
//     value.innerText=Number(value.innerText)+1;
  
    
// }












//     }
// })
// //Multiplication Table Generator
//   let inputValue=document.getElementById("number");
//    let message1=document.getElementById("message");
// let button=document.getElementById("btn1");
// button.addEventListener("click",function(e){
 
//     if(inputValue.value==="" || inputValue.value==="0" || Number(inputValue.value)>10){
//        message1.innerText="Please Enter correct b/w 0 and 11 ";
//     }else if(Number(inputValue.value)>0 || Number(inputValue.value)<=10){

//         for(let i=1;i<=10;i++){
           
//            message1.innerHTML+=`<br>${inputValue.value} * ${i}=${inputValue.value*i}<br>`
//         }

//     }

// })

//grocery list
// let mainlist=document.getElementById("mainList");
// let task=document.getElementById("task");
// let message=document.getElementById("errormessage");
// let btn=document.getElementById("btn");
// btn.addEventListener("click",function(e){
//      if(task.value===""){
//         message.innerHTML=`<br> please add task`;
//      }else {
//         message.innerText="";
//         task.value.trim();
//         let newItem=document.createElement("li");
//         let deletebtn=document.createElement("button");
//         deletebtn.innerText="Delete";
        
//         deletebtn.addEventListener("click",function(e){
            
//            mainlist.removeChild(e.target.parent)

//         })
//         newItem.innerText=task.value;
//         mainlist.appendChild(newItem);
//        newItem.appendChild(deletebtn);
//         task.value="";

//      }
// })


let mainArray=[];

let inputValue=document.getElementById("task");

let addButton=document.getElementById("btn");


let message=document.querySelector("span");

let mainList=document.getElementById("main");


addButton.addEventListener("click",function(e){

if(inputValue.value===""){
    message.innerHTML=`<br> Enter Task`;

}else{

let task={
    id: Date.now(),
    texk: inputValue.value
};
mainArray.push(task);

let list=document.createElement("li");
list.innerText=task.texk;

list.dataset.id=task.id;

mainList.appendChild(list)
console.log(mainArray);
let deleteBtn=document.createElement("button");
deleteBtn.innerText="Delete";
list.appendChild(deleteBtn);
deleteBtn.addEventListener("click",function(e){
    let id=Number(list.dataset.id);
    let indx=mainArray.findIndex(function(t){
        t.id===id;
    })
    if(indx>-1){
        mainArray.splice(indx,1)
    }
    list.remove();
})
message.innerText="";
inputValue.value="";












}







































})