/**
 * closures
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
console.log(x.getName());
x.setName('lol');
console.log(x.getName());
console.log(x.getNameBug);
