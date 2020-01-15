var isPalindrome = function(x) {
    var str_origin = x.toString(); 
    var str_reverse;
    str_reverse = str_origin.split('').reverse().join('');
    if(str_origin == str_reverse) return true
    else return false; 
};
