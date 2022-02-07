var findTheDifference = function(str1, str2) {
    for(var i = 0; i < str2.length; i++){
        var placer = str1.indexOf(str2[i])
        if(placer >= 0){
            str2 = str2.slice(0,i) + str2.slice(i+1)
            str1 = str1.slice(0,placer) + str1.slice(placer+1)
            i--
        }
    }
    return str2
}

console.log(findTheDifference("abcd", "abcde"))