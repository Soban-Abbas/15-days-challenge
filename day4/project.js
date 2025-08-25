//1. Student Grades Tracker
marks=[45, 70, 90, 35, 88];
function checkMarks(){
    marks.forEach(function(numbers) {
    console.log(numbers);
});
}


   let studentsGrades= marks.map(function(num){
        if(num>=90){
            return "A";
        }else if(num>=80){
            return "B";
        }else if(num>=70){
            return "C";
        }else if(num>=55){
            return "D";
        }else{
            return "Fail";
        }
    })

    let filterFail=marks.filter(function(grade){
         return grade<50;
    })

   let Average = marks.reduce(function(total, num) {
    return total + num;
}, 0) / marks.length;

checkMarks();
console.log(studentsGrades);
filterFail.forEach(function(F){
    console.log(`Fail ${F}`)

});
console.log(`teh average result of class is ${Average}%`);



// 2. E-commerce Cart System
let cart=[
    {
        name:"shoes",
        price:3000
    },
    {
        name:"shirt",
        price:2500
    },
    {
        name: "Cap", 
        price: 500
    },
    {
        name: "Watch", 
        price: 3000
    }

]

for (let item of cart){
    console.log(item );
}

    let filterItems=cart.filter(function(f){
    return f.price>1000;
}).map(function(d){
    return d.price*0.90;
}).reduce(function(accomulator,nextvalue){
    return accomulator+nextvalue;
},0);


//addign small items 
    let filtersmallItems=cart.filter(function(f){
    return f.price<1000;
    }).reduce(function(s,v){
        return s+v.price;
    },0);

    let totalprice=Number(filterItems+filtersmallItems);
    console.log(`The total price is ${totalprice} by apply 10% discount on each item above 1000 `);



//3. Library Book Manager

let books=[
  {title: "JS Basics", available: true},
  {title: "React Guide", available: false},
  {title: "Angular Mastery", available: true}
]

books.forEach(function(b){
    console.log(b);
})
let checkavailablity=books.filter(function(a){
    if(a.available===true){
        return a.available;
    }else{
        return;
    }
})
console.log(checkavailablity);

let bookList=books.map(function(t){
    return{
        book_titles:t.title
    }
})
console.log(bookList);

//4. Daily Expense Tracker
let expense=[200, 500, 1200, 50, 90];
//total
let total=expense.reduce(function(acc,nv){
    return acc+nv;
},0);
let samll=expense.filter(function(s){
    return s<100;
})
let addRs=expense.map(function(adrs){
    return "Rs" +adrs;
})
console.log("The total expenses are " +total);
console.log("The expenses less then 100"+samll)
console.log(addRs);

//5. Voting Eligibility Checker


let ages=[12, 17, 18, 20, 15, 30];



let userage=prompt("Enter age ");
ages.push(userage);
for(let age of ages){
    console.log(`${age}`)
}

userage=Number(userage);
function check(age){
    if(age>=18){
        console.log("Eligibale")
    }else{
        console.log("not Eligible")
    }
}
check(userage);


let eligibilityCheck=ages.filter(function(eC){
    return eC>=18;
})
function totalEligible(e){
    console.log("The total number of people eligible to vote are" +e.length);
}
totalEligible(eligibilityCheck);
console.log(eligibilityCheck);

