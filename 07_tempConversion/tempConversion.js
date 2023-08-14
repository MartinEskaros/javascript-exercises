const convertToCelsius = function(tempInFahr) {
  let resultInCelsius = (tempInFahr-32)*(5/9);
  let roundedResult = (Math.round(resultInCelsius*10))/10;
  return roundedResult;
};

const convertToFahrenheit = function(tempInCel) {
  let resultInFahr = (tempInCel*(9/5))+32;
  let roundedResult = (Math.round(resultInFahr*10))/10;
  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
