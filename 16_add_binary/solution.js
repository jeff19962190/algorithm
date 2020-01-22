var addBinary = function(a, b) {
    var str1 = a.split("").reverse();
    var str2 = b.split("").reverse();
    var leng1 = str1.length;
    var leng2 = str2.length;
    var i = 0;
    var leng = 0;
    if(leng1>leng2) leng = leng1;
    else {leng = leng2; var str = str1; str1 = str2; str2 =str;}
    var result = [];
    var plus = 0;
    for(var j=0;j<leng;j++){
        if(str2[j]) result[j] = Number(str1[j]) + Number(str2[j])+ plus;
        else{ result[j]= Number(str1[j]) + plus; }
        plus = 0;
        if(result[j] == 2) { result[j] = 0; plus = 1;}
        if(result[j] == 3) {result[j] = 1; plus = 1;}
    }
    if(plus==1) result[leng] = 1;
    return result.reverse().join("")
};