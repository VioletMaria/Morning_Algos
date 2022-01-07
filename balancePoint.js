Balance Point and Balance Index!!!

// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){
    var sum = arr[0];
    var arrSum = 0;
    for(var i = arr.length-1; i > 0; i --) {
        arrSum += arr[i]
        for(var j = 1; j < arr.length; j++) {
            if(arr[2] == null) {
                if(sum = arrSum){
                    return true
                }
            }
            sum += arr[j]
            if(arrSum == sum) {
                return true
            }
        }
    }
    return false
}

console.log(balancePoint([2,2,4]))
console.log(balancePoint([1,2,3,4,10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1,2,3,2,1])) // FALSE
console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
console.log(balancePoint([2,2])) // TRUE

function balanceIndex(arr) {
    var sum = arr[0];
    var arrSum = 0;
    for(var i = arr.length-1; i > 0; i --) {
        arrSum += arr[i]
        for(var j = 1; j < arr.length; j++) {
            if(arr.length < 3){
                return false
            }
            sum += arr[j]
            if(arrSum == sum) {
                return true
            }
          }
        }
        return false
    }

console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
console.log(balanceIndex([9,9])) // FALSE
console.log(balanceIndex([4,2,2,6])) // TRUE
console.log(balanceIndex([9,1,9])) // TRUE
console.log(balanceIndex([1,8,1,2,3,4])) // TRUE