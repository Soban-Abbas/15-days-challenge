let subjectName=document.getElementById("inputSubject");

let marksArray=[];
let subjectMarks=document.getElementById("inputSubjectMarks");

let calculatebtn=document.getElementById("calculateBtn");

let unOrderList=document.getElementById("unorderlist");


let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    if(subjectName.value==="" || subjectMarks.value==="" || subjectMarks.value>100){
        document.querySelector("span").innerText="Enter Correct Input";
    }
    else{

let subject={
id:Date.now(),
sub_Name:subjectName.value,
sub_Marks:subjectMarks.value,
}

marksArray.push(subject);
console.log(marksArray);

subjectName.value="";
subjectMarks.value="";



let createList=document.createElement("li");
createList.innerText=`${subject.sub_Name} marks = ${subject.sub_Marks}`;
createList.dataset.id=subject.id;

unOrderList.appendChild(createList);

let deleteBtn=document.createElement("button");
deleteBtn.innerText="Delete";
createList.appendChild(deleteBtn);

deleteBtn.addEventListener("click",function(e){
    let id=Number(createList.dataset.id);
    let index=marksArray.findIndex(function(t){
        return t.id===id;
        
    })
console.log(marksArray);
    marksArray.splice(index,1);
    createList.remove();

    


})

calculatebtn.addEventListener("click",function(e){
let newmarks=marksArray.map(function(n){
    return n.sub_Marks;
})
let sum=newmarks.reduce(function(acc , nv){
    return acc+nv;
},0);


let heading=document.createElement("h5");
let average=sum/marksArray.length;
if(average>80){
    heading.innerHTML=` Total Number=${marksArray.length*100} <br> Average of Number are ${average} <br> Grade is A`

}else{
    heading.innerHTML=`FAil`
}


})


    }
})