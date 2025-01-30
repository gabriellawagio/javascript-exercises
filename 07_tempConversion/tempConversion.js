const convertToCelsius = function(x) {
  let celsius =  ((x - 32) * 5/9)
  if (!Number.isInteger(celsius)){
    return (Number(celsius.toFixed(1)))
  }
  return celsius;
};

const convertToFahrenheit = function(x) {
  let fahrenheit = ((x * 9/5) + 32);
  if (!Number.isInteger(fahrenheit)){
    return (Number(fahrenheit.toFixed(1)))
  }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
