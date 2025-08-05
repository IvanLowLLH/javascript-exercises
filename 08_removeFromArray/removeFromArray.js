const removeFromArray = function(array, ...removeArgs) {
    // for (let i = 0; i < array.length; i++){
    //     let num = array[i]
    //     if (removeArgs.includes(num)) {
    //         array.splice(i, 1)
    //         i--
    //     }
    // }
    // return array
    return array.filter((num) => !removeArgs.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
