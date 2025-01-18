/*
1. Values
A value is the actual data or information stored in a variable or used directly in the program.

Types of Values:
JavaScript has two broad categories of values:

a. Primitive Values (Immutable and Single Value):
Number
Examples: 10, 3.14, -42
Used for integers and floating-point numbers.

String
Examples: 'Hello', "World", '123'
Used to represent text.

Boolean
Examples: true, false
Used in logical operations.

Undefined
Example: undefined
Indicates a variable has been declared but not assigned a value.

Null
Example: null
Represents the intentional absence of a value.

Symbol (ES6)
Example: Symbol('description')
Used to create unique identifiers.

BigInt (ES2020)
Example: 123n, BigInt(123)
Used for very large integers.


b. Non-Primitive (Reference) Values:

Objects
Examples:
javascript
let person = { name: "John", age: 30 };
let array = [1, 2, 3];
Includes arrays, functions, and other complex data types.

Functions
Example:
javascript
function greet() {
  return "Hello!";
} */


// Training the concepts.

var firstName="Vasanthan";
var lastName="Raju";

console.log(firstName, lastName);

var numberOne=567;
var numberTwo=688;

console.log(`${numberOne}, ${numberTwo}`);

var PI=3.14;

console.log(PI);

// Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// Log their values to the console.

let country = 'Portugal';
let continent = 'Europe';
let population = 10;

console.log(country);
console.log(continent);
console.log(population);



// Declare variables
let isIsland = false; // Boolean: India is not an island
let officialLanguage = "Hindi";

// Log values to the console
console.log("Is it an island?", isIsland);
console.log("Official language:", officialLanguage);

// Combining variables in a sentence
console.log(
  `${country} is located in ${continent}, with a population of ${population} million people.`
);



// Using const for values that don't change
const earthRadius = 6371; // Earth's radius in km
const gravitationalForce = 9.8; // Earth's gravity in m/s^2

console.log("Earth Radius (km):", earthRadius);
console.log("Gravitational Force (m/s^2):", gravitationalForce);


// Type of the variables checking
console.log(typeof country); // string
console.log(typeof population); // number
console.log(typeof isIsland); // boolean