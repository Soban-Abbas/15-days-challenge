let p=3, q=7;
[p,q]=[q,p];
console.log([p,q]);

let student={
    name : "ali",
    marks:{
        phy:50,
        che:49,
        eng:45,
        urdu:43
    },
    age:20
};
//drstructing with rest

const {marks:m,...rest}=student;
console.log(m);
console.log(rest);


//get element by id
let data= document.getElementById("date")
    console.log(data)
    console.log(data.textContent);
//get elemt by classname
let b=document.getElementsByClassName("text");
console.log(b);
console.log(b.length)  ;
console.log(b[0].textContent); 
console.log(b[1].textContent);
//get eleemnt by tag name
let c= document.getElementsByTagName("p");
console.log(c);
console.log(c.length);
console.log(c[1].textContent);


//get elemeny y query sleelcter
//Selects the first matching element (CSS selector style).
//Example: #id, .class, tag.



let d=document.querySelector(".text");
console.log(d);
console.log(d.textContent);


//queryseletorall
//select all elemts 
//Returns a NodeList (similar to array, supports forEach).

let e=document.querySelectorAll("p");
console.log(e);
console.log(e[1].textContent);