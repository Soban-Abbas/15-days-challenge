// //mini-proejcts 
// //1. Student Grades Tracker

// const Students=[
//     {
//         name:"Ali",
//         marks:75
//     },
//     {
//         name:"Ahmad",
//         marks:85
//     },
//     {
//         name:"Arham",
//         marks:65
//     },
//     {
//         name:"Ahsan",
//         marks:45
//     },

// ]

// Students.forEach(function(s){
//     console.log(s)
// })
// let newStudent={
//     name:"Arsalan",
//     marks:45
// }
// Students.push(newStudent);

// Students.forEach(function(s){
//     console.log(s)
// })
// let removeStudet=prompt("Enter name you want to remove")
// // // let remove=Students.filter(function(r){
// // //     return removeStudet!==r.name;
// // // })
// // // console.log(remove);

// let index1=Students.findIndex(function(remove){

//     return removeStudet===remove.name;


// })
// Students.splice(index1,1)
// console.log(Students);


// let avg=Students.map(function(add){
//     return add.marks
// }).reduce(function(acc,nv){
//      let result=acc+nv;
//      return result/Students.length;
// })
// console.log("The averag is" + avg);





// //2. To-Do List Manager

// let tasks=[];
// let task1={
//     id :1,
//     title: "Offer Namaz",
//     done:true
// }
// tasks.push(task1);
// let task2={
//     id :2,
//     title: "study JS",
//     done:false



// }
// let task3={
//     id :3,
//     title: "sports",
//     done:false


// }
// tasks.push(task2);
// tasks.push(task3)

// console.log(tasks);

// let markDone=prompt("Mark Tasks as done by id");

// markDone=Number(markDone);
// let done=tasks.filter(function(dn){
//     if(markDone===dn.id){
//         return dn.done=true;
//     }else{
//         return dn;
//     }
// })

// console.log(done);

// let deleteTask=prompt("Delete task by ID");
// deleteTask=Number(deleteTask);
// let index=tasks.findIndex(function(ind){
//     return deleteTask===ind.id;
// })

// console.log(index);
// tasks.splice(index,1);
// console.log(tasks);



//3. Bank Account Simulator
// let bankAccount={
//  name : "Sara",
//  balance: 0,
// deposit: function(money){
// if(money<=0){
//     console.log("Money must be greater than 0")
    
// }else{
//     this.balance=this.balance+money;
//     return  this.balance;
// }
// },
// withdraw:function(money){
//     if(money<=0 || money>this.balance){
//         console.log("Wrong Amount Entered")
//     }
// else{
//     console.log(money + "withdraw successfully")
//     return this.balance=this.balance-money;
// }

// },
// checkBalance:function(){
//     return this.balance;
// }

// }

// console.log(bankAccount.name);
// console.log(bankAccount.balance);
// console.log(bankAccount.deposit(500) +" "+ "deposited successfully");

// console.log(bankAccount.balance);
// console.log(bankAccount.withdraw(100));






//4=. Simple Library System

let books=[
    {
        title:"Harry Potter",
        author:"Rowling",
        available:true,
        borrowHP:function(){
          if(this.available===true){
            console.log("You borrowed Harry Potter")
            return this.available=false;
          }else{
             console.log("Not Available Herry Potter");
          }
        },
        returnHP:function(){
            
            console.log("Book Herry Potter return successfully");
            return this.available=true;
            
        }



    },
    {
       
        title:"Automic Habits",
        author:"Soban Abbas",
        available:false,
        borrowAH:function(){
          if(this.available===true){
            console.log("You borrowed Atomic Habits")
            return this.available=false;
          }else{
             console.log("Not Available Atomic Habits");
          }
        },
        returnAH:function(){
            
            console.log("Book Atomic Habit return successfully");
            return this.available=true;
            
        }

    },
       {
       
        title:"Rich Dad Poor Dad",
        author:"Soban",
        available:false,
        borrowRDPD:function(){
          if(this.available===true){
            console.log("You borrowed Rich Dad Poor Dad")
            return this.available=false;
          }else{
             console.log("Not Available Rich Dad Poor Dad");
          }
        },
        returnRDPD:function(){
            
            console.log("Book Rich Dad Poor Dad return successfully");
            return this.available=true;
            
        }

    },
       {
       
        title:"JavaScript",
        author:" Abbas",
        available:true,
        borrowJS:function(){
          if(this.available===true){
            console.log("You borrowed JS")
            return this.available=false;
          }else{
             console.log("Not Available JS");
          }
        },
        returnJS:function(){
            
            console.log("Book JS return successfully");
            return this.available=true;
            
        }

    }
]


for(let book of books){
    console.log(book);
}

let availabletrue=books.filter(function(a){
    return  a.available===true;
})
for(let bok of availabletrue){
    console.log(bok);
}
books[3].borrowJS();
books[2].borrowRDPD();
books[2].returnRDPD();

books[2].borrowRDPD();
