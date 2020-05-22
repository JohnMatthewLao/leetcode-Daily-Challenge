var removeKdigits = function(num, k) {
    for(var i = 0; i < num.length; i++) {
      if(num[i+1] === '0'){
          num[i] = '';
      }
    }
    return num
};



console.log(removeKdigits('1010', 1));

