//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!

// My unfinished solution:
// const dedupe = (str) => {
//     var newStr = ""
//     var dupe = false
//     for(var i=str.length-1; i>0; i--){
//         dupe = false
//         for(var j=str.length-1; j>0; j--){
//             if(str[j] == str[i]){
//                 dupe = true
//             }
//             if(dupe == false){
//                 newStr += str[i];
//             }
//             dupe = false;
//         }
//     }
//     return newStr;
// }

// Deedee's Solution:
const dedupe = (str) => {
    var newStr = "";
    var newStr2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let dupa = false;
        for (var j = 0; j < newStr.length; j++) {
            if (str[i] === newStr[j]) {
                dupa = true;
            }
        }
        if (!dupa) {
            newStr += str[i];
        }
        dupa = false;
    }
    for (let i = newStr.length - 1; i >= 0; i--) {
        newStr2 += newStr[i];
    }
    return newStr2;
}


console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));