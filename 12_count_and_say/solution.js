var countAndSay = function(n) {
    if (n==1) return "1";
    if(n > 1) {
        var origin = countAndSay(n-1);
        var result = [];
        var arr = origin.split("");
        var compare = arr[0];
        var repeat = 0;
        var i = 0;
        var j=0;
        do{
            
            if(arr[i] == compare){
                repeat ++;
                i++;
            }
            else {result.push(repeat);
            result.push(compare);
            repeat = 1;
            i++;
            compare = arr[i-1];}
             if(!arr[i-1]) break;           
        }
        while(j < 1);
        return result.join("");
    }
};