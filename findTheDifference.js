var findTheDifference = function(s, t) {
    for(let i = 0; i < t.length; i++){
        if(!s.includes(t[i])){
            return t[i];
        }
    }
};

console.log(findTheDifference("abcd", "abcde"))