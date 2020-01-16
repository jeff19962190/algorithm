var reverse = function(x) {
    var str_origin = x.toString();
    var num_reverse = 0;
    if (Math.abs(num_reverse) > Math.pow(2,31) - 1) return 0;
    if(str_origin[0]=='-'){
        str_origin = str_origin.slice(1);
        str_origin = str_origin.split('').reverse().join('');
        str_origin = "-" + str_origin;
        num_reverse = parseInt(str_origin);
    }
    else{
        str_origin = str_origin.split('').reverse().join('');
        num_reverse = parseInt(str_origin);
    }
    return num_reverse;
};