// Given a string, sort it in decreasing order based on the frequency of characters.


var frequencySort = function(s) {
    let counter = {}
    let result = ''
    for(var char of s) {
        counter[char] = ++counter[char] || 1
    }
    let sortCounter = Object.entries(counter).sort((a,b) => {
        return b[1] -a[1];
    })
    sortCounter.forEach((charFrequency)=>{
            result += charFrequency[0].repeat(charFrequency[1])
    })
    return result
};
