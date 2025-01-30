const removeFromArray = function(array, ...values){
    //  declare new array which has the values after specified values have been removed.
    const newArray = [];
    //  loop through the array to check if the values given match the elements of the array
    array.forEach(elements => {
        //  if the value does not match the element, add it to the new array
        if (!values.includes(elements)) {
            // pushes elements that don't match the values into the new array
            newArray.push(elements)
        }
    });
    return newArray
}
// Works with only 1 element or those of the same value
/* const removeFromArray = function(array, values) {
    const inputArray = array;
    const elementToRemove = values;
    const newArray = inputArray.filter(el => el !== elementToRemove);

    return newArray;
};
 */
// Do not edit below this line
module.exports = removeFromArray;