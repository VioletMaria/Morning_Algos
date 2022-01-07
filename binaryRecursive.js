// Binary Search

// Given a sorted array and a value, return whether
//  the array contains that value. Do not sequentially 
//  iterate the array. Instead 'divide and conquer'. 
//  Taking advantage of the fact that array is sorted. 

function binarySearch(arr, value, low = 0, high = arr.length) {
    if(high < low) {
        return -1
    }
    var mid = low + (high - low) / 2
    if (arr[mid] > value){
        return binarySearch(arr, value, low, mid-1)
    } else if (arr[mid] <= value) {
        return binarySearch(arr, value, mid+1, high)
    } else if (arr[mid] = value) {
        return arr[mid]
    }
}

function binarySearchRecursive(arr, target){
    
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));
// ---> 1 2 3 4 5  |  6 7 8 9 10
// ---> 6 7  |  8 9 10
// ---> 8  [9]  10  (found)