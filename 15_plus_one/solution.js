var plusOne = function(digits) {
    var plus = 1;
    var leng = digits.length - 1;
    var i = leng;
    do{
        digits[i] = digits[i] + plus;
        plus = 0;
        if(digits[i] == 10 ) {digits[i] = 0; plus = 1;}
        i--;
    } 
    while(i>=0 );
    if (digits[0] == 0) digits.unshift(1);
    return digits;
};