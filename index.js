// This is my first JavaScript Code
// console.log('Hello World');
let name = 'Mosh';
console.log(name);

//cannot be a reserved keyword
//should be meaningful
//cannot start with a number (1name)
//cannot contain a space or hyphen (-)
//are case-sensitive

let firstName = 'Mosh', lastName = 'Hamedani';

let firstName2 = 'Mosh';
let lastName2 = 'Hamedani';

//Constants
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const interestRate2 = 0.3;
interestRate = 1;
console.log(interestRate2);

//Primitive Types - String, Number, Boolean, Undefined, Null
let name3 = 'Mosh'; //String Literal
let age = 30; //Number Literal
let isApproved = false; //Boolean Literal
let firstName3 = undefined; // if value is not declared it is undefined
let lastName3 = null; // if value is not declared it is null
let selectedColor = null;

//Dynamic Typing
typeof firstName3;

//Reference Types - Object, Array, Function

let person = {
    name: 'Mosh',
    age: 30
};

console.log(person);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[0]);

//Functions
//Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');
greet('Mary');
greet('John', 'Smith', 'Mary');

//Calculating a value
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);
console.log(square(2));

