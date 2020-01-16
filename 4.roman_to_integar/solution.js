var romanToInt = function(s) {
    var roman = [];
    roman["I"] = 1;
    roman["V"] = 5;
    roman["X"] = 10;
    roman["L"] = 50;
    roman["C"] = 100;
    roman["D"] = 500;
    roman["M"] = 1000;
    var sum = 0;
    if((s.indexOf('IV')>=0)||(s.indexOf('IX')>=0)) sum = sum - 2;
    if((s.indexOf('XL')>=0)||(s.indexOf('XC')>=0)) sum = sum - 20;
    if((s.indexOf('CD')>=0)||(s.indexOf('CM')>=0)) sum = sum - 200;
    s = s.split('');
    for(var i=0; i<s.length ; i++) {
        sum = sum + roman[s[i]];
    }
    return sum;
};