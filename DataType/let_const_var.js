"use  strict"; // treat all JS code as newer version

const accountId = 1234;
// accountId = 32; // TypeError: Assignment to constant variable.
let accountEmail = "sp@gmail.com";
var balance = 70000;

//* Note (Be careful) :variables can also be created without using keywords like let, var an const
account = "saving"; // Not a good practice

console.table([accountId, accountEmail, balance, account]);

// alert("Hello"); //ReferenceError: alert is not defined as we are using nodejs not browser


/* Summary:
-> Code Readability is the priority....
-> (Be careful) :variables can also be created without using keywords like let, var an const
-> When you try to re-assign value to a const type varaiable: 
    TypeError: Assignment to constant variable.
-> Prefer not to use var because of issue in block scope and functional scope
-> "use  strict"; // treat all JS code as newer version. Once you write it to use strict, then you can not write anything to allow unstrict. It become mandatory to write the code according to the newer version

*/
