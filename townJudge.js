// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.



var findJudge = function(N, trust) {
    var counter = {};
    var trustSomeone = [];
    if (N === 1) {
        return 1
    }
    for(var i = 0 ; i < trust.length ; i ++){
        let person = trust[i][0]
        let personTrust = trust[i][1];
        if(trustSomeone[trustSomeone.length-1] !==person) {
           trustSomeone.push(person);
        }
        if(counter[personTrust] === undefined) {
            counter[personTrust] = 1
        }else {
            counter[personTrust] += 1
        }
    }
      
    for (var key in counter) {
        if(counter[key] === N-1 && !trustSomeone.includes(Number(key))){
            return key
        }
    }  
    return -1;
  };