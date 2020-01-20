var searchInsert = function(nums, target) {
    if(nums.indexOf(target)>=0) return nums.indexOf(target);
    var j = -1;
    for(var i = 0; i < nums.length; i++){
        if(nums[i]>target) {j=i; break;}
    }
    if(j==-1) return i;
    return j;
};