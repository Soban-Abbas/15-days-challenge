// let count ;
// function decrease(count){

//    if(count<=0){
//      return count =0;
//    }else{
//     return count --;
//    }
// }
// const increase= function(count){
//      return count++
// }
// const reset=(count)=>{
//     return count =0;
// }
let score=0;
let questions=["what is capital of pakistan ?", "president of pakistan?", "PM of pakistan"];
let totalquestions=3;
let answers=["ISB", "Zirdari", "Shobaz Shareef"];
for (let i=0;i<totalquestions;i++){
  let useranswer=prompt(questions[i]);
  useranswer=String(useranswer);
  if(useranswer===answers[i]){
    console.log("correct");
    score++;
  }else{
    console.log("wrong answer");
  }

}
console.log("quiz finished ");
console.log("your score in quiz are" + score );