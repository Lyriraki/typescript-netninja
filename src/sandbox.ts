const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(12.3));

//* Array
let numbers = [1,2,3,4,5]
numbers.push(2);
// numbers = 2 //! Can't change the type of data
// numbers.push('Lucky'); //! Static
// numbers[2] = "Arif"; //! Static

let mixed = ['Lucky', 22, "Arif", true]
mixed.push(false)
mixed.push(31)
mixed.push("Arif")
let arr: string[] = []; //!Must be initialize
arr.push('Lucky')

//* Object
let ninja = {
    name: 'Mario',
    belt: 'Red',
    age: 30
}
// ninja.age = 'hello' //! static
// ninja.skills = ['Fighting', 'Genjutsu'] //! Cant add more property
// ninja = {
//     name: 'Mario',
//     belt: 'Red',
//     age: 30,
//     skills : ['Fighting', 'Genjutsu']
// } //! must be always same with the first declaration

//* Union Type
let union: any[] = []
//! or let union: (string|number|boolean)[] = []
union.push('hello')
union.push(12)
union.push(false)
console.log('This is Union: ',union);

// Functions Basic
const add = (a: number, b: number, c: number | string = 10, d?: number | string) => {
    console.log(a+b);
    console.log(`this can rewrite ${c}`);
    console.log(`this is optional ${d}`);
}

add(5,5,5)

// Making Alias
type StringOrNum = string | number;
type ObjWithName = { name: string, uid: string | number}

const withAlias1 = (uid: StringOrNum, item: string) => {
    console.log(`${item} bla bla bla ${uid}`);
}

const NoAlias2 = (user: { name: string, uid: string | number}) => {
    console.log(`${user.name} says helo`);
}

const withAlias2 = (user: ObjWithName) => {
    console.log(`${user.name} says helo`);
}



