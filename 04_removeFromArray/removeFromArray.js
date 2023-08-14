const removeFromArray = function(arr,...num) {
    const numbersToRemove = new Set(num);

    const newArray = arr.filter(item => !numbersToRemove.has(item))
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
