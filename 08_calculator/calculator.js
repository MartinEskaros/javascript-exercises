const add = function(num1,num2) {
  result=num1+num2;
  return result;
};

const subtract = function(num1,num2) {
  result=num1-num2;
  return result;
};

const sum = function(arr) {
	let sum = arr.reduce((accumulator,currentValue) => accumulator+currentValue,0); // the 0 at the end sets the accumulator to 0
  return sum;
};

const multiply = function(arr) {
  let product = arr.reduce((accumulator,currentValue)=> accumulator*currentValue,1);
  return product;
};

const power = function(num1,num2) {
return Math.pow(num1,num2);
	
};

const factorial = function(num) {
	let product=1;
  for (let i=1;i<=num;i++){
    product=product*i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
