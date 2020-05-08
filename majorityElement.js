var majorityElement = function(nums) {
    let halfOccur = nums.length/2;
    let counter = {};
    nums.forEach((num) => {
        if(counter[num] === undefined) {
            counter[num] = 1;
        }else {
            counter[num] ++;
        }
    })
    
    for(var key in counter) {
        if(counter[key] > halfOccur) {
            return key
        }    
    }
};