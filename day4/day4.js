//mini-proejcts 
//1. Student Grades Tracker

const Students=[
    {
        name:"Ali",
        marks:75
    },
    {
        name:"Ahmad",
        marks:85
    },
    {
        name:"Arham",
        marks:65
    },
    {
        name:"Ahsan",
        marks:45
    },

]

Students.forEach(function(s){
    console.log(s)
})
let newStudent={
    name:"Arsalan",
    marks:45
}
Students.push(newStudent);

Students.forEach(function(s){
    console.log(s)
})
let removeStudet=prompt("Enter name you want to remove")
// // let remove=Students.filter(function(r){
// //     return removeStudet!==r.name;
// // })
// // console.log(remove);

let index1=Students.findIndex(function(remove){

    return removeStudet===remove.name;


})
Students.splice(index1,1)
console.log(Students);


let avg=Students.map(function(add){
    return add.marks
}).reduce(function(acc,nv){
     let result=acc+nv;
     return result/Students.length;
})
console.log("The averag is" + avg);





//2. To-Do List Manager

let tasks=[];
let task1={
    id :1,
    title: "Offer Namaz",
    done:true
}
tasks.push(task1);
let task2={
    id :2,
    title: "study JS",
    done:false



}
let task3={
    id :3,
    title: "sports",
    done:false


}
tasks.push(task2);
tasks.push(task3)

console.log(tasks);

let markDone=prompt("Mark Tasks as done by id");

markDone=Number(markDone);
let done=tasks.filter(function(dn){
    if(markDone===dn.id){
        return dn.done=true;
    }else{
        return dn;
    }
})

console.log(done);

let deleteTask=prompt("Delete task by ID");
deleteTask=Number(deleteTask);
let index=tasks.findIndex(function(ind){
    return deleteTask===ind.id;
})

console.log(index);
tasks.splice(index,1);
console.log(tasks);