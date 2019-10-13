function main() {
    console.log(a);
    console.log(inner());
    
    var a = 5;
    function inner() {
       return 10;
    }
 }
 main();

 /*
output :
undefined
10

'a' has not been declared or initialized before the using it, so it will be undefined.
function 'inner' will return 10 which is printed in the console.
*/