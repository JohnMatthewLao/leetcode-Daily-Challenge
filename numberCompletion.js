// Given a positive integer, output its complement number. 
// The complement strategy is to flip the bits of its binary representation.

var findComplement = function(num) {
    let bit = num.toString(2);
    let compliment = ''
    for(var i = 0 ; i < bit.length ; i++) {
        if(bit[i] === '0') {
            compliment +=1;
        } else {
            compliment +=0;
        }
    }
    return parseInt(compliment,2);
};


