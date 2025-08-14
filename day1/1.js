let students=[
    {
    name :"Ali",
    marks : 90,},
    {
        name: "soban",
        marks:80,
    },
      {
        name: "ahmad",
        marks:70,
    },
      {
        name: "bilal",
        marks:60,
    },
      {
        name: "kamran",
        marks:50,
    }
];
function marks(marks ){
    if(marks>=90){
        return 'A';
    }
      else if (marks>=80){
        return 'B';
    }
      else if(marks>=70){
        return 'C';
    }
      else if(marks>=60){
        return 'D';
    }
    else{
        return 'F';
    }
}

students.forEach(function(student){
let grade =marks(student.marks);
let  status =(grade!== 'F'? "pass":"Fail")
console.log(student.name)
console.log(student.marks) 
console.log(grade)
console.log("status : "+ status)
}
)


