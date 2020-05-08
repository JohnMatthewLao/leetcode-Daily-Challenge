// solution 1
// var canConstruct = function(ransomNote, magazine) {
//     let noteCounter = {};
//     let magazineCounter = {};
//     ransomNote.split('').forEach((letter)=>{
//         if(noteCounter[letter] === undefined) {
//             noteCounter[letter] = 1;
//         } else {
//             noteCounter[letter] ++
//         }
//     })

//     magazine.split('').forEach((letter)=>{
//         if(magazineCounter[letter] === undefined) {
//             magazineCounter[letter] = 1;
//         } else {
//             magazineCounter[letter] ++
//         }
//     })

//     for(var key in noteCounter) {
//         if(noteCounter[key] > magazineCounter[key]){
//             return false;
//         }
//     }
//     return true;
// };


// solution 2 
var canConstruct = (ransomNote, magazine) => {
    var count = 0;
    var length = ransomNote.length
    magazine.split('').forEach((letter)=> {
        if(ransomNote.indexOf(letter) !== -1) {
            count ++;
            ransomNote = ransomNote.replace(letter,'')
        }
    })
    return count === length
}



