// REGULAR JAVASCRIPT
// -----------------STRING AND NUMBERS----------------

// function add(n1, n2) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// lets call the add function, pass in (number1, number2) as arguments and then store the funtion in a variable called result

// const result = add(number1, number2);

// console.log(result);

// ------------------TYPESCRIPT FOR THE ABOVE JAVASCRIPT--------------------------------

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);

// console.log(result);

// -----------------------------THE END ------------------------------------

// IMPORTANT: In TypeScript, you work with types like string or number all the times.

// Important: It is string and number (etc.), NOT String, Number etc.

// The core primitive types in TypeScript are all lowercase!

// ----------------------OBJECTS----------------
// ------JAVASCRIPT--------------------

// const person = {
//   nanme: "Francis",
//   age: 25,
// };

// console.log(person);

// -----------------TYPESCRIPT--------------
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Francis",
//   age: 25,
// };

// console.log(person.age);
// console.log(person.name);

// --------------Nested Objects & Types--------------

// Let's say you have this JavaScript object:

// const product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// This would be the type of such an object:

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type so to say.

// ----------------------ARRAYS INSIDE OF OBJECTS----------------
// ------JAVASCRIPT--------------------

// const person = {
//   name: "Francis",
//   age: 25,
//   hobbies: ["sports", "cooking"],
// };
// console.log(person);

// loop
// for (const hobby of person.hobbies) {
//   console.log(hobby);
// }

// -----------------TYPESCRIPT--------------

const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Francis",
  age: 25,
  hobbies: ["sports", "cooking"],
};

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person.age);
console.log(person.name);

// Note that we said string[] telling typescript that we are expecting array of strings/an array containing strings, this means that if we for instance pass in a number or say a boolean inside of the array, we will get an error because we have already told typeScript that we are going to load the array with only string, so to avoid that and let the array contain various data types, we say "any[]", that means we are telling type script that we wanna store any data type inside of this particular array.
