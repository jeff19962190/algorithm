var longestCommonPrefix = function(strs) {
    var leng = 0;
    var real_leng = 0;
    var cancel = 1;
    var real_fix = ""; 
    if(!strs[0]) return "";
    if(!strs[1]&&(strs[1] !="" ))  return strs[0];
    var strss = strs[0];
    var leng_num = strss.length;
    for(var j=1; j<=leng_num ; j++) {
        var match = strs[0].slice(0,j);
        for(var k=1; k<strs.length; k++){ 
            if(strs[k].slice(0,j) != match ) {leng = 0; break;}
            leng = j;
        }
        if(leng > real_leng) {real_leng = leng; real_fix = match;}
    }
    return real_fix;
};