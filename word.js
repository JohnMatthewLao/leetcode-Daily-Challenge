function wordBreak (word, wordDict ) {
    return verifyBreak(word, wordDict, 0, []);     
 };
 
 function verifyBreak (word, dic, start, memo){
     debugger;
     if(start === word.length) return true;
     if(memo[start] !== undefined) return memo[start];
    
     for(let end = start+1; end <= word.length; end++){       
         let wildGuess = word.substring(start, end);
         if(dic.includes(wildGuess) && verifyBreak(word, dic, end, memo)){
             return memo[start] = true;
         }
     }  
     return memo[start] = false;
 }
 
 
 wordBreak("andca",
 ["and","ndc","a"])