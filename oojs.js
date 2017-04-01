/**
 * prototype chaining allows changes to base class to reflect in all sub classes, this is because they pass a reference of prototype
 * Use Object.call() to get private properties of base class
 */
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

function Worker(name, profession) {
    Person.call(this, name);
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
