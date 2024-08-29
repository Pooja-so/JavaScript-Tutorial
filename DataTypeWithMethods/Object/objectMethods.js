//* Note
//1) Values are created in separate place in memory and address is assigned to it. Then this address is mapped with the variable.

let user = {
  firstName: "Pooja",
  lastName: "Singh",
  address: {
    city: "Bhavnagar",
    pincode: 364002,
    state: "Gujarat",
    moreDetails: {
      population: 987678,
    },
  },
  age: 20,
};

//2) Whenever the value changes, JS automatically deletes the previous value from the memory and the memory address of the newly created value is mapped with the variable.
user = {
  firstName: "Raina",
  lastName: "Raichand",
};

/* 3) How to delete object's property ?
 using delete keyword 
 syntax: delete objectName.propertyName, returns true in all cases(whether propertyNAme exist or not. Does not give any error)
 */
console.log("Before deletion", user); // { firstName: 'Raina', lastName: 'Raichand' }
console.log(delete user.firstName); // true
console.log(delete user.first); // true
console.log("After deletion", user); // { lastName: 'Raichand' }

/* ---------------------------------------------------------------------- 
                        OBJECT METHODS                      
------------------------------------------------------------------------ */
//* 1) Object.seal(objName) :
// -> Can't add or delete key-value pair but "can update existing key-value pair".
const person = {
  firstName: "Jack",
  lastName: "Roy",
  age: 21,
};

Object.seal(person);

// 1.1 trying to delete existing property. Result: false
console.log(delete person.firstName); // false

// 1.2 trying to add new key-value pair. Result: No change in obj
person.year = 2004;
console.log(person); // { firstName: 'Jack', lastName: 'Roy', age: 21 }

// 1.3 trying to update existing key-value pair. Change in obj
person.age = 22;
console.log(person); // { firstName: 'Jack', lastName: 'Roy', age: 22 }

//* 2) Object.freeze(objName) :
// -> Can't add, delete or update key-value pair".
const person2 = {
  firstName: "Monkey",
  lastName: "Pandey",
  age: 20,
};

Object.freeze(person2);

// 1.1 trying to delete existing property. Result: false
console.log(delete person2.firstName); // false

// 1.2 trying to add new key-value pair. Result: No change in obj
person2.year = 2004;
console.log(person2); // { firstName: 'Monkey', lastName: 'Pandey', age: 20 }

// 1.3 trying to update existing key-value pair. Result: No change in obj
person2.age = 22;
console.log(person2); // { firstName: 'Monkey', lastName: 'Pandey', age: 20 }

//* 3) General methods
const person3 = {
  firstName: "Lailaa",
  lastName: "Shekhawat",
  age: 20,
};

//* 3.1) Object.entries(): Returns an array of the key-value pairs in an object.
let objArray = Object.entries(person3);
console.log(objArray);
/*
[
  [ 'firstName', 'Lailaa' ],
  [ 'lastName', 'Shekhawat' ],
  [ 'age', 20 ]
]
 */
//* 3.2) Object.fromEntries(): Creates an object from a list of key-value pairs.
const fruits = [
  ["apple", 300],
  ["Banana", 200],
  ["Papaya", 100],
];
const fruitsObj = Object.fromEntries(fruits);
console.log(fruitsObj); // { apple: 300, Banana: 200, Papaya: 100 }

//* 3.3) Object.values(): Returns a single dimension array of the object values
const fruitsValues = Object.values(fruitsObj);
console.log(fruitsValues); // [ 300, 200, 100 ]

//* 3.4) Object.keys(): Returns a single dimension array of the object keys
const fruitsKeys = Object.keys(fruitsObj);
console.log(fruitsKeys); // [ 'apple', 'Banana', 'Papaya' ]

//* 4) in operator: Used to check whether the property exist or not in object.
console.log('apple' in fruitsObj); // true
console.log('chiku' in fruitsObj); // false
