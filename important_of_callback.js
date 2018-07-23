

let add=function(a,b){
    return a+b;
}

let mul=function(a,b){
    return a*b;
}

let doWhatEver=function(a,b){
    console.log(`return two number` ${a} , ${b} );
}
/*
let calc = function(num1, num2, callback) {
  return callback(num1,num2);
};
*/

let calc = function(num1, num2, callback) {
  if(typeof callback == "function" ){
   return callback(num1,num2);
  }
};

console.log(calc(2,3,add));
console.log(cal(2,3,doWhatEver));
console.log(cal(2,3,function(a,b) { return a-b; } )); // anonymous function call

