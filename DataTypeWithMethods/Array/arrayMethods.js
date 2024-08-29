/* //* Method List

//* Methods that modify the original array:
1. push(items) - Insert items at the end of the array. Returns the total length of array after insertion
2. unshift() - Insert items at the front of the array. Returns the total length of array after insertion
Note: push and unshift has "u" letter in common
3. pop() - Removes and returns last element.
4. shift() - Removes and returns first element.

8. reverse() -  MODIFY ORIGINAL ARRAY. Reverse the order of the elements in the array. Returns the reversed array.
9. sort() - MODIFY ORIGINAL ARRAY. Sort the array in lexicographical order. Sorts an array in place. 
Note: Both sort() and reverse methods mutates the array and returns a reference to the same array.

//* Methods that don't modify the original array:
5. concat(array1, array2, ..) - Returns a new combined array
6. indexOf(element) - Return index Of element. Return -1 if element doesn't exist.
7. includes() - CASE-SENSITIVE. Returns true if element is present in the array else false


10. slice() -
11. splice() -
*/

const fruits = ["apple", "cherry", "strawberry"];

//* 1. push(items) -
// Insert items at the end of the array. Returns the total length of array after insertion
const pushResult = fruits.push("Sitafal", "Pappad");
console.log(fruits); // [ 'apple', 'cherry', 'strawberry', 'Sitafal', 'Pappad' ]
console.log(pushResult); // 5

//* 2. pop() -
// Removes and returns last element.
const popResult = fruits.pop();
console.log(fruits); // [ 'apple', 'cherry', 'strawberry', 'Sitafal' ]
console.log(popResult); // Pappad

//* 3. shift() -
// Removes and returns first element.
const shiftResult = fruits.shift();
console.log(fruits); // ['cherry', 'strawberry', 'Sitafal' ]
console.log(shiftResult); // apple

//* 4. unshift(items) -
// Insert items at the end of the array. Returns the total length of array after insertion
const unshiftResult = fruits.unshift("one", "two");
console.log(fruits); // [ 'one', 'two', 'cherry', 'strawberry', 'Sitafal' ]
console.log(unshiftResult); // 5

//* 5. concat(array1, array2, ..)
// Returns a new combined array
const array1 = [1, 2, 3, 4];
const array2 = ["one", "two", "three"];
const array3 = [100, 200, 300];
const combinedArray = array1.concat(array2, array3);
console.log(combinedArray); // [ 1, 2, 3, 4, 'one', 'two', 'three', 100, 200, 300]

//* 6. indexOf(element)
//Return index Of element. Return -1 if element doesn't exist.
const even = [0, 2, 4, 6, 8, 10, 12, 14, 16];
console.log(even.indexOf(4)); // 2
console.log(even.indexOf(333)); // -1

//* 7. includes(element) : CASE-SENSITIVE
// Returns true if element is present in the array else false
console.log(even.includes(4)); // true
console.log(even.includes(33)); // false
console.log(fruits.includes("cherry")); // true
console.log(fruits.includes("CHerry")); // false

//* 8. reverse() : MODIFY ORIGINAL ARRAY
// Reverse the order of the elements in the array. Returns the reversed array.
const num = ["one", "two", "three"];
num.reverse();
console.log(num); //[ 'three', 'two', 'one' ]

//* 9. sort() : MODIFY ORIGINAL ARRAY
// Sort the array in lexicographical order. e.g. the way words are sorted in the dictionary.
// NOTE: As the ASCII code of UPPERCASE letters are smaller than the lowercase letter. Capitalize words will be arranged before the lowercase words. ASCII(uppercase) < ASCII(lowercase)
const animals = [
  "dog",
  "Dog",
  "cat",
  "Cat",
  "cow",
  "giraffe",
  "tiger",
  "Tiger",
  "zebra",
  "Zebra",
];
animals.sort();
console.log(animals);
/* [ 'Cat', 'Dog', 'Tiger', 'Zebra',
  'cat',  'cow', 'dog',  'giraffe', 'tiger', 'zebra' ]
*/

//* lexicographical sorting
const numbers = [20, 10, 11, 34, 54, 35, 36, 4, 3, 2, 1, 48];
numbers.sort();
console.log(numbers); // [1, 10, 11, 2, 20, 3, 34, 35, 36, 4, 48, 54]

// Note: If you want to sort alphabetically then all the elements must be in  either uppercase/capitalize or lowercase letter

