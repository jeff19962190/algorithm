var isValid = function(s) {
    let str1 = "()";
    let str2 = "[]";
    let str3 = "{}";
    var i = 0;
    var k=0;
    do  {
        k=0;
        if(s=="") break;
        if(s.indexOf(str1)>=0) {s=s.replace("()",""); k=1;}
        if(s.indexOf(str2)>=0) {s=s.replace("[]","");k=1;}
        if(s.indexOf(str3)>=0) {s=s.replace("{}","");k=1;}
        if(k==0) break;
    }
    while(i<10);
    if(s=="") return true;
    return false;
};