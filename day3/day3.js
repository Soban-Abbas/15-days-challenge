let num=prompt("Enter Any number");
if(num%2===0){
    console.log("number is even ")
}else{
    console.log("Odd number ")
}

calculator 
let num1=prompt("Enter 1st number");
num1=Number(num1);
let num2=prompt("Enter 2st number");
num2=Number(num2);
let operation=prompt("Enter operation");
operation=String(operation)
switch(operation){
    case '+':
    let result=Number(num1+num2);
    console.log("The sum of number is" + result)
        break;
    case '-':
        if(num1<num2){
            let result=-(Number(num2-num1));
            console.log("The difference of number is " + result);
        }else
    console.log(`The difference  of number is ${num1-num2}`);
        break;    
    case '*':
    console.log(`The multiplication  of number is ${num1*num2}`);
        break;    
    case '/':
        if(num1===0){
            console.log("The answer is 0")
        }else if(num2===0){
            console.log("The answer is infinity");
        }else
    console.log(`The Sum of number is ${num1/num2}`);
        break;    
    default:
        console.log("wrong opertaion")    
    
}





// voting eligibility app




let age =prompt("Enter age")
age=Number(age)
function checkage(x){
    if(x>=18){
        console.log("You are eligible to vote")
    }else{
        console.log("Not Eligible")
    }
}
checkage(age)





// closure based counter 

function counter(){
    let count=0;
    return function(){
       
        count++;
        return count;
    }
}
let fun= counter();
console.log(fun());
console.log(fun());


function createAccount(){ 
     let balance=0;
     return function(){
        console.log(`your balance is ${balance}`);
       return function(amount){
        if(amount<=0){
            console.log(`amount should be greater than 0`);
            
        }else{
            balance=balance+amount;
            console.log(`successfully deposited RS ${amount}`)
            console.log(`your new balance is ${balance}`);
        }return function(withdrawAmount){
            if(withdrawAmount<=0){
                console.log(`withdraw amount should be greater than 0`);
            }else if(balance<withdrawAmount){
                console.log(`your available balance is less than to ${withdrawAmount}`)
            }else{
                balance=balance-withdrawAmount;
                console.log(`you successfully withdraw ${withdrawAmount} your new balance is ${balance}`)
            }
        }
       }
     }
  
}
let createaccount=createAccount();
let checkbalance=createaccount();
let depositeMoney= checkbalance(1000);
let withdrawMoney=depositeMoney(200);




// guess the number

function guessnumber(){
    let secretnumber=Math.floor(Math.random()*100)+1
    let guess;
    
    while(guess!==secretnumber){
 guess =prompt("guess the number")
guess=Number(guess);
         if(guess==secretnumber){
        console.log("You guess correctly  the secret number was" + secretnumber);
        
    }else if(guess>secretnumber){
        console.log("too big");
    }else if(isNaN(guess)){
        console.log("Enter valid number")
    }
    
    
    else{
        console.log("Too low")
    }
    }
   
}
guessnumber();


//todolist manager

let todolist=[];
function addtask(task){
    todolist.push(task);
    console.log(`${task} added successfully `);
}
function removetask(indextoremove){
    if(indextoremove>=0 && indextoremove<todolist.length ){
         todolist.splice(indextoremove,1)
    console.log("task remove successfully")
}else{
    console.log("Index not exits")
}
   
}
function showtask(){
    if(todolist.length===0){
        console.log("no task exits ");
    }
   for(let i=0;i<todolist.length;i++){
    console.log(`${i} : ${todolist[i]}`);
   }
}
addtask("grocery");
showtask();
removetask(0);
addtask("meal")
addtask("school");
addtask("grocery");
showtask();
removetask(1);
showtask();