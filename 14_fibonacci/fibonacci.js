const fibonacci = function(number) {
    let num = Number(number)
    let zero_num = 0
    let first_num = 1
    let next_num = 0
    if (num < 0) {
        return "OOPS"
    }
    if (num == 0) {
        return zero_num
    }
    else if (num == 1) {
        return first_num
    }
    else {
        for (let i = 2; i <= number; i++) {
            next_num = zero_num + first_num
            zero_num = first_num
            first_num = next_num
        }
        return next_num
    }
};

// Do not edit below this line
module.exports = fibonacci;
