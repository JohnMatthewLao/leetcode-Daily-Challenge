// Given a string, find the first non-repeating character in it and return it's index. 
// If it doesn't exist, return -1.
var firstUniqChar = function(s) {
    let counter = {};
    for(var i = 0; i < s.length ; i++) {
        const char = s[i];
        if(counter[char] === undefined) {
            const char = s[i]
            counter[char] =1;
        } else {
            counter[char] ++;
        }
    } 
    for(var i = 0; i < s.length ; i++) {
        const char = s[i];
        if(counter[char] === 1) {
            return i
        }
    } 
    return -1;
}