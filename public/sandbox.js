"use strict";
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(12.3));
//* Array
var numbers = [1, 2, 3, 4, 5];
numbers.push(2);
// numbers = 2 //! Can't change the type of data
// numbers.push('Lucky'); //! Static
// numbers[2] = "Arif"; //! Static
var mixed = ['Lucky', 22, "Arif", true];
mixed.push(false);
mixed.push(31);
mixed.push("Arif");
var arr = []; //!Must be initialize
arr.push('Lucky');
//* Object
var ninja = {
    name: 'Mario',
    belt: 'Red',
    age: 30
};
// ninja.age = 'hello' //! static
// ninja.skills = ['Fighting', 'Genjutsu'] //! Cant add more property
// ninja = {
//     name: 'Mario',
//     belt: 'Red',
//     age: 30,
//     skills : ['Fighting', 'Genjutsu']
// } //! must be always same with the first declaration
//* Union Type
var union = [];
//! or let union: (string|number|boolean)[] = []
union.push('hello');
union.push(12);
union.push(false);
console.log('This is Union: ', union);
// Functions Basic
var add = function (a, b, c, d) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log("this can rewrite " + c);
    console.log("this is optional " + d);
};
add(5, 5, 5);
var withAlias1 = function (uid, item) {
    console.log(item + " bla bla bla " + uid);
};
var NoAlias2 = function (user) {
    console.log(user.name + " says helo");
};
var withAlias2 = function (user) {
    console.log(user.name + " says helo");
};
