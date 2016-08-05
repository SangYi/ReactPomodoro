let count = 0;

let counter = setInterval(function(){
  // (function(){
  //   count+=1;
  //   console.log(count);
  //   if(count === 5){
  //     clearInterval(counter);
  //   }
  // })();

  count+=1;
  console.log(count);
  if(count === 5){
    clearInterval(counter);
  }
},1000);






// var myVar = setInterval(function(){ myTimer() }, 1000);
//
// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//   console.log(t);
// }
//
// function myStopFunction() {
//     clearInterval(myVar);
// }
