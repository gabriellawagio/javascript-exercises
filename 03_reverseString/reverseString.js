const reverseString = function(str) {
    // split() method returns characters as an array
    let splitString = str.split('');
    // reverses the newly created array
    let reverseSplit = splitString.reverse();
    // joins array elements to a string
    let newString = reverseSplit.join(''); 

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
