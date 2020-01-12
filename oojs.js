/**
 * Two ways of creating functions:
 * 1. Arrow - const func1 = () => {}. Normal function. Cannot create with 'new' keyword. 'this' object is not linked to it.
 * 2. Regular - function func2() {}. Implicitly returns 'this' object when called with 'new' keyword. So, if a property is declared on 'this' object like this.name
 * it gets attached to the object whereas var name is locally declared within scope, and not passed attached to the implicit 'this' object.
 * Prototype chaining allows changes to base class to reflect in all sub classes, this is because they pass a reference of prototype
 * Use Object.call() to get private properties of base class
 */
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

function Worker(name, profession) {
    Person.call(this, name);//Function.call(this, arg1, arg2) calls the function with 1st argument as 'this' object. So if it called within another function, 
    // 'this' is passed as reference. So when Person function does this.name, it is referring to 'this' passed in arguments. So, Worker will inherit properties of Person.
    this.profession = profession;
}
//Object.create sets Worker's prototype as Person's prototype
Worker.prototype = Object.create(Person.prototype);//util.inherits(Worker, Person) in node.js

Worker.prototype.greet = function() {
    return 'hi ' + this.name;
}

var gamer = new Worker('kevin', 'gamer');
var teacher = new Worker('mavin', 'teacher');
console.log(gamer.greet());
console.log(teacher.name);
