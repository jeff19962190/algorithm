var lengthOfLastWord = function(s) {
    var num_pla = s.lastIndexOf(" ");
    if (num_pla == -1) return s.length;
    if( num_pla == (s.length-1)){
        s = s.trim();
        num_pla =s.length - s.lastIndexOf(" ")-1;
        return num_pla;
        
    }
     var len = s.length - num_pla-1;
         return len;
};