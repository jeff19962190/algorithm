var removeElement = function(nums, val) {
    var i = nums.length;
    var j=0;
    do{
        if(nums[j] == val){
            i--;
            nums.splice(j,1);
            j--;
        }
        j++;
        
    }
    while(j<nums.length)
    return i;
};