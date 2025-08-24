

const fruits=["apple","banana", "peach","mango","dates"]
console.log(fruits);
fruits[0]="orange";
console.log(fruits);
//delete (by using splice)
fruits.splice(1,1)
console.log(fruits);

//add new item to array (by using splice)
fruits.splice(3,0,"watermalen");
console.log(fruits);

//update (by using array)
fruits.splice(2,1,"apple");
console.log(fruits);


//common Array method
//push (add at last)
fruits.push("banana")
console.log(fruits);
//pop (remove at last)
fruits.pop();
console.log(fruits);
//unshift(add at start)
fruits.unshift("banana");
console.log(fruits);
//shife(remove at start)
fruits.shift();
console.log(fruits);

//slice (copy part of array)

let halfArray=fruits.slice(2, 5);
console.log(halfArray);