/**
 * closures
 * When a Regular function is called with the 'new' keyword, JS will create completely new reference to the function and return implicit 'this' object. Variables declared within
 * the function also stay in memory and can be referenced later even after function exit. It does NOT work without 'new' keyword.
 * 1. A function inside another function
 * 2. It has access to outer functions variables
 * 3. Used to create private variables in JS
 * http://javascriptissexy.com/understand-javascript-closures-with-ease/
 */
function Obj() {
    var name = 'me';
    var i = 0;

    this.getName = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName;
    }
    this.getNameBug = function() {
        return function() {
            return name;
        }();
    }();//calling a function immediately evaluates the function with current values, getNameBug will always return 'me'
}
x = new Obj();
Obj();//this is a regular function call and only calls the function without creating a separate reference to the function and all it's local variables.
console.log(x.getName());
x.setName('lol');
console.log(x.getName());
console.log(x.getNameBug);
