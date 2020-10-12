// Log to console
console.log('Hello World');

/*
  multilines
  comments
*/

// Var, let, const
const name = 'John';
const age = 30
const job = 'Web Developer';
const city = 'Miami';
 // can not reassign - have to assign a value

// const person = {
//   name: 'John',
//   age: 30
// }

// person.age = 32
// person.name = "Sara"

// console.log(person);

// Array
const numbers0 = [1, 2, 3, 4, 5]
numbers0.push(6);
console.log(numbers0);

// PRIMITIVE TYPES
// String
// Number
// Boolean
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol()

// REFERENCE TYPES / OJECTS
// Array
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();

console.log(today);
console.log(typeof address);

//
let val;

// Number to string
val = String(5);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date())
// Array to string
val = String([1,2,3,4])

// toString()
val = (5).toString();

// String to number
val = Number('5');
val = Number(true); // => 1
val = Number(false); // => 0
val = Number(null); // => 0
val = Number("hello"); // => NaN (Not a number)

val = parseInt('100');
val = parseFloat('100.30') // with decimals

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2))

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);


// Simple math with numbers
// + - * / %

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33);
val = Math.max(2, 33);
val = Math.random();

val = Math.floor(Math.random() * 20);

// Concatenation
const firstName = "William";
const lastName = "Johnson";

val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' ' + lastName

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName)

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Index
val = firstName[0];
val = firstName.indexOf('l')
val = firstName.charAt(2);

// Substring
val = firstName.substring(0, 4);
val = firstName.slice(-3);

// Split a string into an array
const str = 'Hello there my name is Brad'
val = str.split(' ');

// Replace sth in a string
val = str.replace('Brad', 'Jack');

// Include in a string
val = str.includes('Hello');


// TEMPLATE LITERALS
// Without template strings (ES5)
let html;
html = "<ul><li>Name: " + name + "</li><li>Age: " + age + " </li></ul>"

// With template strings (ES6)
html = `
  <ul>
    <li>Name: ${age}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>${2+2}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
`
document.body.innerHTML = html;


// ARRAYS
// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array (43, 56, 33, 23, 44, 36, 5);

// Read
val = numbers.length;
val = Array.isArray(numbers);
val = numbers[0];
numbers[2] = 100;
val = numbers.indexOf(36);

// Update
// numbers.push(250); // Add on to end
// numbers.unshift(120); // Add on to front
// numbers.pop();
// numbers.shift();
// numbers.splice(1, 3);
// numbers.reverse();

val = numbers.concat(numbers2)
val = numbers.sort(); // sort by the first digit
val = numbers.sort(function(x, y){
  return x - y;
})
val = numbers.sort(function(x, y){
  return y - x;
})

function under50(num){
  return num < 50
}

val = numbers.find(under50)

console.log(numbers);
console.log(val);

// OBJECTS LITERALS
const person = {
  firstName: "Steve",
  age: 30,
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  }
  // getBirthYear: function(){
  //   return 2020 - this.age;
  // }
}

val = person;
val = person.firstName;
val = person.hobbies;

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 25}
]

// DATES & TIMES
let birthday = new Date('9-10-1990');
birthday = new Date('September 10 1990');
birthday = new Date('9/10/1990');

val = today.getMonth();
val = today.getDate();
val = today.getDay(); // Start at Sunday
val = today.getFullYear();
val = today.getTime(); // TimeStamp

birthday.setMonth(2);

// IF STATEMENTS & COMPARISON OPERATORS
// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// equal to value and type
if(id === 100){
  console.log('correct');
} else {
  console.log('incorrect');
}

// test if sth is undefined
if(typeof id !== 'undefined'){
  console.log(`the id is ${id}`)
} else {
  console.log('no id')
}

// Logical operators
// AND => &&
// OR => ||

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECt')


// SWITCHES
const color = 'red';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('no red nor blue')
    break;
}

// FUNCTIONS DECLARATIONS
function greet(firstName = 'John'){
  // console.log('Hello');
  return 'Hello ' + firstName;
}

// console.log(greet('Steve'));

// FUNCTIONS EXPRESSIONS
// const square = function(x){
//   return x*x
// }

// console.log(square(8));

// IIMIDIATLY INVOKABLE FUNCTION EXPRESSIONS - IEFEs
// (function(){
//   console.log('IEFE Ran...');
// })()

// (function(name){
//   console.log('Hello' + name);
// })('Brad')

// PROPERTY METHODS
const todo = {
  add: function(){
    console.log('Add todo ...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();


// LOOPS
// For
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is the best');
    continue; // go to the next iteration
  }

  if(i === 5){
    console.log('Stop the loop');
    break;
  }

  console.log('Number ' + i);
}

// While
let x = 0;

while(x < 10){
  console.log('Number ' + x);
  x++
}

// Do while => will always run once
let y = 0
do {
  console.log('Number is ' + y);
  y++;
}

while(y < 10);

// LOOP THROUGH ARRAT
const cars = ['Ford', 'Chevy', 'Honda']

// For
for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// forEach
cars.forEach(function(car, index){
  console.log('${car} : ${index}');
})

// Map

// For in loop
for(let x in cars){
  console.log()
}

// WINDOW METHODS / OJECTS / PROPERTIES
// Alert
// alert('Hello World');

// // Prompt
// const input = prompt();
// alert(input);

// // Confirm
// if(confirm('Are you sure?')){
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// Heigth & Width
val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY; // vertical axe
val = window.scrollX; // horizontal axe

// Location Object
val = window.location;
val = window.location.pathname;

// Redirect
// window.location.href = "http://google.com";

// Reload
// window.location.reload();

// History object => browsing history
// window.history.go(-1);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.language;

console.log(val);

// Global scope
// let & const have a block level scope
//
