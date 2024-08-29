//* 1) Introduction:
/*
-> It is non-prirmitive data type /Refrence type.
-> An object literal is a list of key-vlaue pairs wrapped inside curly braces.
-> Objetc's values can be accessed using two notations:
    1. Dot notation (.)    and      
    2. Square bracket Notation ([])
-> Use dot notation for directly accesing the values of object. but only when you are sure about the actual key. Cannot use variable, non-standard named key such as @tag, last-name with dot notation.
-> Square bracket Notation is powerful because you can pass string, varaible, expressions etc. has key for accessing its value.
-> All keys are of string data type BTS, so you can also write key as string value while writing object. But is is otional. It becomes mandatory to write key as 'key' when the naming convention of key name is not of standard variable naming convention type. **You can access such key only using  square bracket notations
-> Accessing any non-existent property returns undefined.
*/

const user = {
  firstName: "Pooja", // "firstName": "Pooja",
  "last-name": "Singh",
  "@tag": "@PoojaSingh",
};

console.log(user.firstName); // Pooja
console.log(user["first" + "Name"]); // Pooja
// console.log(user.last-name); // ReferenceError: name is not defined
console.log(user["last-name"]); // undefined
console.log(user["@tag"]); // @PoojaSingh

//* 2) Object are reference type
/*
-> In non-primitive data type/ reference type, variables having same values are not equal because variables are compared by address not by value.
-> The address of empty string is same for all websites.
-> For every empty object, a new object is created in memory and address is assigned to it.
*/

// Primitive data types are compared by values.
const username1 = "";
const username2 = "";
console.log(username1 === username2); // true

// Non-Primitive data types are compared by reference/object.
const user1 = {};
const user2 = {};
console.log(user1 === user2); // false
console.log(user1 == user2); // false

//* 3) Adding new key-value pair and updating existing key-value pair using dot notation or square bracket notation
const person = {
  name: "ray",
};
person.age = 20;
person["gender"] = "female";
console.log(person); // { name: 'ray', age: 20, gender: 'female'}
person.age = 22;
console.log(person); // { name: 'ray', age: 22, gender: 'female'}

//* 4) Nesting object: For each object, a new object is created in memory and address is assigned to that object.
const student = {
  firstName: "sara",
  lastName: "Roy",
  address: {
    city: "Banglore",
    pinCode: "43524",
  },
};
console.log(student.address.city); // Banglore
