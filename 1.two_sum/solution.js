var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        let rest = target - nums[i];
        for(var j=0; j<nums.length; j++){
            if(nums[j] == rest) return [i,j];
        }
    }
}