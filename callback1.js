/*
Function are First Citizen like int, String */

let x = function() {
  console.log('I am called from inside');
};

let y = function(callback) {
  console.log('do something');
  x();
};

y(x);
