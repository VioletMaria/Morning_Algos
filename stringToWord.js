
//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
// Our String To Word Solution:
const stringToWordArray = (str) => {
    let newArr = [];
    let string= "";
    for(let i=0; i<str.length; i++){
        if(str[i] != " "){
            string += str[i]
        }
        else{
            if(string){
                newArr.push(string)
                // newArr = [string, ...newArr] <==== REVERSE FOR ARRAY
                string = ""
            } 
        }
    }
    if(string){
        newArr.push(string)
    }
    return newArr
}

console.log(stringToWordArray("Did I shine my shoes today?"));
console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
// Serge's Team Solution:
const reverseWordOrder = (str) => {
    var string = "";
    var newArr =stringToWordArray(str)
    for (var i=newArr.length -1 ; i >= 0; i--){
        string += `${newArr[i]} ` 
    }
    return string
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));