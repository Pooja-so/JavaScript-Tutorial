let value = 33;
let negValue = -33;
console.log("Negative value: ", negValue);

let firstName = "Pooja";
let surname = "Singh";
let fullName = firstName + surname;
console.log("Fullname: ", fullName);

// -------------------- Auto Conversions ---------------------
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12

console.log("1" + 2 + 2); // 122
console.log(1 + 2 + 2 + "2"); //52

// console.log(3+4*5%3);
console.log(3 + ((4 * 5) % 3));

let sum = 10;
console.log("Sum: ", ++sum); //11
console.log("Sum: ", sum++); //11
console.log("Sum: ", sum++); //12
console.log("Sum: ", sum); //13

//* -------------------------------- IMP Notice ----------------------------------------------
// 1)
console.log(+true); // 1
console.log(+""); // 0
//console.log(true+); //* SyntaxError: Unexpected token ')'

//* 2) Sometimes comaprision results into unexpected output, so whenever you do comparision make sure that the data type of the varaibles or value being compared is same.
//JS automatically converts "02" and "2" from string into number data type
console.log("2" > 1); //true
console.log("02" > 1); //true

/* 2.1)
-> The reason is that the equality check == and comparisions >,<,>=,<= works differently.
-> Comparisons convert null to a number, treating it as 0. That's why (null >= 0) is true
*/
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true : comaprisons convert null to a number Number(null)=>0

// 2.2) comaprison operator convert undefined to a number
console.log("\n\n");
console.log(undefined > 0); //false  Number(undefined)=> NaN
console.log(NaN > 0); //false

console.log(undefined == 0); //false

console.log(undefined >= 0); //false : comaprisons convert undefined to a number Number(undefined)=> NaN
console.log(NaN >= 0); //false

// 3) Strict equality opeartor === check data type and value both
console.log("2" == 2); //true
console.log("2" === 2); // false
