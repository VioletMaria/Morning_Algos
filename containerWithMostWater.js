var maxArea = function(height) {
    let max = 0
    let left = 0
    let right = height.length-1
    
    while(left < right) {
        const area = Math.min(height[left], height[right]) * (right - left)
        max = Math.max(max, area)
        
        if(height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return max
};

let answer = maxArea([1,8,6,2,5,4,8,3,7])
console.log(answer)