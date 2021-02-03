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
