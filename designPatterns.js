There are 3 types of JS Design patterns in all:
1. Creational - Related to creating objects in js
2. Structural
3. Behavorial

1. Creational pattern:
    a. Inheritance Pattern - Refer oojs.js file. It is used for creating inherted objects using Object.create()
    b. Module Pattern - Refer closures.js file. It is used for encapsulating properties and methods and expose only public properties
    c. Constructor Pattern - Create objects from other Constructor functions using new.
        /**
         * var car = new function(color) {
         *      this.color = color;
         * }
         * var blueCar = new car('blue');
         */

    d. SingleTon - Create one object universally. As simple as using the same object everywhere
    e. Factory - Create multiple objects from same function code
            /**
             * function factory(element) {
             *      if(element == 'div') return 'created div';
             *      if(element == 'p') return 'created paragraph';
             *      ..
             * }
             */
2. Structural pattern
    a. Mixins - Used to extend or add methods or properties to an exisintg object just like interfaces in java. Can be used directly with Object.call or Object.apply method.
        Implementation is there in oojs.js file. You can also write a simple function extend() that does exactly the same as Object.call
        /**
         * function extend(target) { //target is a list of objects to copy properties from
         *                           // target is first argument, arguments is list of all arguments
         *      if(!target) return;
         *      for(var i=1; i<arguments.length; i++) {
         *          for(var prop in arguments[i]) {
         *              if(arguments[i].hasOwnProperty[prop] && !target[prop]) {
         *                  target[prop] = arguments[i][prop];
         *              }
         *          }
         *      }
         * }
         *
         * extend(a, b, c);
         * //this will copy properties from b and c to a (multiple Inheritance sort of)
         */
    b. Facade - Hide complexity within the code like $('#div') and $('.div') get id and class without explicitly mentioning anything

3. Behavorial pattern
    a. Observer pattern
    b. Pub/sub pattern
