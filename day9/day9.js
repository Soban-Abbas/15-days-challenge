let quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you."
];
let showQuote=document.getElementById("quote");

let btn=document.getElementById("btn");
btn.addEventListener("click",function(e){

    do{
        console.log(quotes[0]);
        showQuote.innerHTML=quotes[0];
    }while(0>1)

    quotes.push(quotes[0])
        quotes.shift();
console.log(quotes);
})
