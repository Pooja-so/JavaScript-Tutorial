//* Truthy and Falsy values
/*
 -> A truthy value is a value that is considered to be true when encountered in a Boolean context.
 -> A falsy value is a value that is considered to be flase when encountered in a Boolean context.
-> All values are truthyexcept falsy values

-> Falsy values:    flase, 0, -0, 0n(bigint), 
                    "", null, undefined, NaN, document.all

-> Truthy value: All values excepts above values are truthy 
E.g.: true, [], {}, "0", "false", Infinity, -Infinity, " " (space is aslo a character so it is a truthy value)
42, -42, 12n 
*/

console.log(true && "dog"); // returns dog
console.log([] && "dog"); // returns dog

console.log(typeof 0n); // bignit
console.log(typeof NaN); // number
console.log(typeof ""); // string

//* Notice: The value null and undefined are also nullish
// A nullish value is a value which is either null or undefined. Nullish values are always falsy.
// Null : Absence of any object value
// undefined: A variable that has not been assigned a value is of type undefined. It is a property of global object.
