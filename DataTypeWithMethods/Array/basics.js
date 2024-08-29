const username = "Pooja";

const fruits = ["apple", "banana", "grapes", "dates"];

//1. Accessing element
console.log(fruits[1]); // banana
// 1.1 accessing an element that deos not exist
console.log(fruits[100]); // undefined

//2. updating element
fruits[2] = "chiku";
console.log(fruits); // [ 'apple', 'banana', 'chiku', 'dates' ]

//3. Adding new element at last
fruits[4] = "Strawberry";
console.log(fruits); // [ 'apple', 'banana', 'chiku', 'dates', 'Strawberry' ]

//4. What happens if we add an element at 50th position in an array of 5 elements
fruits[50] = "Dragon fruit";
console.log(fruits);
/*
[
  'apple',
  'banana',
  'chiku',
  'dates',
  'Strawberry',
  <45 empty items>,
  'Dragon fruit'
]
*/
console.log(fruits[49]); //undefined

//5. You can also have array of multiple data types. Although array can contain values of different data types. It is not recommended.
//-> Good practice is to keep values of similar data type only in an array.
const mixture = ["apple", "ball", 123, false, null, undefined];
console.log(mixture); // [ 'apple', 'ball', 123, false, null, undefined ]

/*----------------------------------------------------------------------
                    IMPORTANT Note
---------------------------------------------------------------------- */
const newArray = [];
console.log(typeof newArray); // object

//    NOT A GOOD PRACTICE
//* (typeof array) = object
// -> where index acts as key and their element acts as value
// -> But we can also have custom keys just like object. But the behaviour is different in sense of length.
newArray.firstName = "Ray";
console.log(newArray); // [ firstName: 'Ray' ]
console.log(newArray.firstName); // Ray

newArray.lastName = "Roy";
console.log(newArray); // [ firstName: 'Ray', lastName: 'Roy' ]

//* The length is always 0
console.log(newArray.length); // 0
