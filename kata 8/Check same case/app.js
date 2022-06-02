function sameCase(a, b){

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alpha2 = Array.from(Array(26)).map((e, i) => i + 97);
    
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const alphabet2 = alpha2.map((x) => String.fromCharCode(x));
    
    const allLetter = [...alphabet,...alphabet2]
    
        if (allLetter.indexOf(a) !== -1 && allLetter.indexOf(b) !== -1) {
          if (a === a.toLowerCase() && b === b.toLowerCase()||a===a.toUpperCase()&&b===b.toUpperCase()) {
            return 1;
          } else {
            return 0;
          }
        }
         else if (allLetter.indexOf(a) !== 1 || allLetter.indexOf(b) !== 1) {
           return -1;
         }
    
    }







    //////////////////////////////////////////////////////////////////


    function sameCase(a, b){
        if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
           return -1
         }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
             return 1
         }else{
           return 0
         }
       }











       /////////////////////////////////////////////////


       function sameCase(a, b){
        if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
        if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
        if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
        return 1;
      }



      //////////////////////////////////////////////

      function sameCase(a, b){
        if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
        if ((a === a.toUpperCase() && b !== b.toUpperCase()) || (a !== a.toUpperCase() && b === b.toUpperCase())) return 0;
        return 1;
      }