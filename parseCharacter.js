const parseInt2 = (str) => {
    let num = 0;
    for(let i = 0; i < str.length; ++i)
        num += (str.charCodeAt(i) - 48) * (10 ** (str.length - 1 - i));
    return num;
}

//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
    let count = 1;
    let code = ""
    for(let i=0; i<str.length; i++){
        if(str[i] == str[i+1]){
            count++
        }
        else {
            code += (str[i] + count)
            count = 1
        }
    }
    return code;
}

console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffgggg"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    let duplicate = 0;
    let newStr =""
    for(let i=0; i<str.length; i=i+2){
        duplicate = str[i+1]
        newStr += str[i]
        for(let j=1; j<duplicate; j++){
            newStr += str[i]
        }
    }
    return newStr;
}

console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));

console.log(parseInt("432"));
console.log(parseInt2("432"));