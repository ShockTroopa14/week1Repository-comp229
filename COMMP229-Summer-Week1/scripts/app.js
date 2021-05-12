"use strick";

(function(){

    function Start() {
        var myVariable = 20;
        console.log('my variable is:' + myVariable)
        
        
        for (var index = 0; index < myVariable; index++) {
            console.log('your num is: ' + index);
        }
    
    }
 window.addEventListener("load", Start);
})();


