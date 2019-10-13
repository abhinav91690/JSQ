var name = 'First Entity';
var obj = {
   name: 'Second Entity',
   attr: {
      name: 'Third Entity',
      getName: function() {
         return this.name;
      }
   }
};
console.log(obj.attr.getName());
var test = obj.attr.getName;
console.log(test());

/*
output:
Third Entity
First Entity

The first output is 'Third Entity' because we are calling in the in context of 'obj.attr' and obj.attr.name = 'Third Entity'.
'test' is a function which returns the 'name' of 'this', i.e whatever context its called from.
The second output is 'First Entity' beacuse at we have a 'name' variable initialized to 'First Entity' at the scope of 'this'.
*/