const sumAll = function(val1, val2) {
    if( val1 < 0 || val2 < 0) {
        return "ERROR";
   }
   if(!Number.isInteger(val1) || !Number.isInteger(val2) ){
       return "ERROR";
   }
   let min = Math.min(val1, val2);
   let max = Math.max(val1, val2);
   let sum = 0;
   for (let m = min; m <= max; m++) {
        sum = sum + m;
   }
   return sum;

};

// Do not edit below this line
module.exports = sumAll;
