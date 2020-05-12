// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.
var isPerfectSquare = function(num) {
    if (num === 1) {
        return true
    }
    for(var i = 2; i <= num/2 ; i++) {
        let product = i*i;
        if (product === num) {
            return true
        }
    }
    return false;
};