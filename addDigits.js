const addDigits = function(num){
    var numArr = num.toString().split("");
    let temp = 0;
    for(let i = 0; i < numArr.length; i++){
        temp += parseInt(numArr[i])
    }
    if(temp < 10) {
        return temp
    } else {
        return addDigits(temp)
    }
}

console.log(addDigits(33546456457334))