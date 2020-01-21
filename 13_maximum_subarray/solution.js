var maxSubArray = function(nums) {
    var length = nums.length;
    var sum = nums[0];
    var result = sum;
    for(var i= 1; i < length; i++){
        sum += nums[i];
        if(sum < nums[i]) {
            sum = nums[i];
        }
        if(result < sum) result = sum;
    }
    return result;
};