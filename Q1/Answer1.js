var b;
(function() {
   'use strict';
   var a = b = 10;
})();
console.log(b);

// strict mode does not allow us to use a variable without declaring it first.
// I declared the variable outside the function scope so it would be available for the console.log statement. which will return 10.
