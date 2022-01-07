// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

function removeDupe(arr) {
    for(var i = 0; i < arr.length; i ++){
        for(var j = arr.length-1; j > 0; j--){
            if(arr[i] != arr[j]){
                return arr[i]
            }
        }
    }
}

var filtered = [1,2,1,3,4,2].filter(removeDupe)
console.log(filtered)