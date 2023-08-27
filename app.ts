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

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //Tuple: this is a special type of array which takes only two params, a number and string and type script knows about it.
// } = {
//   name: "Francis",
//   age: 25,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

// for (const hobby of person.hobbies) {
//   console.log(hobby);
// }

// console.log(person.age);
// console.log(person.name);

// Note that we said string[] telling typescript that we are expecting array of strings/an array containing strings, this means that if we for instance pass in a number or say a boolean inside of the array, we will get an error because we have already told typeScript that we are going to load the array with only string, so to avoid that and let the array contain various data types, we say "any[]", that means we are telling type script that we wanna store any data type inside of this particular array.

//   Enum : From the previous code above lets say in the role we want have an author with an id = 0, an Admin with an id=1 and a read only user with an id = 2

// we would usually write it as

// const Admin = 0;
// const author = 1;
// const readOnlyUser = 2;

//But then the enum could make it easier for us, and note that the Role is written with a capital letter because the enum is a custom type

// enum Role {
//   Admin,
//   author,
//   readOnlyUser,
// }
// Now what happens is that behind the scene, the contenets of the enum are assigned 0, 1, 2 etc by default but we also have the power to alter eg,, Note that once i have assigned 5 to Admin, the other takes up the numbers 6 and 7 by default, again we can also assign our own values like enum Role { Admin=5, author=100, readOnlyUser=200}, we can also use texts and even mix them with numbers { Admin= 'ADMIN', author=100, readOnlyUser=200}

// enum Role {
//   Admin = 5,
//   author,
//   readOnlyUser,
// }

//Most importantly to access the contents of the enum, eg lets access the author: that would be Role.author

// --------------------UNION TYPES------------------------
//lets say we wanna create a functon to combine two numbers

// function combine(input1: number, input2: number) {
//   return input1 + input2;
// }
// const combinedNumbers = combine(30, 30);
// console.log(combinedNumbers);

// For instance in our application we want to be able to use other datatypes, then the union type helps us and we can seperate them with the pipes at declaration like so, at first we would get an error on the returned inputs because typescript is at this point confused and doesnt know which type we wanna work with since we declared a number as well as a string, so to solve this, we would use the if check to check types.. so if both inputs are numbers, we return the addition of the inputs, else we convert them to string and the return the result as a string.

function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combinedNumbers = combine(30, 30);
console.log(combinedNumbers);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
