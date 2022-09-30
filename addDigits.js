// const addDigits = function(num){
//     var numArr = num.toString().split("");
//     let temp = 0;
//     for(let i = 0; i < numArr.length; i++){
//         temp += parseInt(numArr[i])
//     }
//     if(temp < 10) {
//         return temp
//     } else {
//         return addDigits(temp)
//     }
// }


const addDigits = function(num) {
    if (num == 0) return 0;
    if (num % 9 == 0) return 9;
    return num % 9;
}

console.log(addDigits(33546456457334))