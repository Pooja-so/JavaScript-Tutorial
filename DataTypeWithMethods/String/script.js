// const message = 'Hello World!'
// const faltuMessage = '     Hi, I am Anurag.     '
// const finalMessage = faltuMessage.trim()
// const finalMessageLowerCase = faltuMessage.trim().toLocaleLowerCase()
// const replacedMessage = finalMessage.replace('Hi', 'Hello')

// const lastFourDigits = '9996'
// const maskedAccountNumber = lastFourDigits.padStart(16, '*')

// const capitalMessage = message.toUpperCase()
// const bankBalance = 9873

// const concatenatedString = `Last four digit of my account number is`.concat(' ', lastFourDigits)
// const templateString = `My account number is ${lastFourDigits}.`
// const templateString2 = `I have ₹${bankBalance} in my account.`

// const addedString = 'I have ₹' + bankBalance + ' in my account.'

// String is a indexed - based. String is immutable so any operation or methods performed on the string doesnt modify the original string. The operation performed returns a new string.

//* 1. Accessing character:
/*  "Hello World!"[3] => l
    message[3] => l
*/
const message = "Hello World!";
console.log("Hello World!"[3]); // l

//-----------------Methods without Argument()--------------
//* 1. Converting charcater toUpperCase and toLowerCase
const name = "Pooja";
console.log(name.toUpperCase()); // POOJA
console.log(name.toLowerCase()); // pooja

//* 2. Trimming long message:
const longMessage = "       Hi, I am Pooja Singh         ";
console.log(longMessage.trim()); //  Hi, I am Pooja Singh
console.log(longMessage.trimStart()); //  Hi, I am Pooja Singh___________
console.log(longMessage.trimEnd()); // ________ Hi, I am Pooja Singh

//-----------------Methods with Argument(arg)--------------
//* 1. Padding String with special character
/*
    padStart(maxLength, specialChar); 
    Here maxLength means the total length of the whole string
 */
const lastFourDigits = "9996";
const bankAccountNo = lastFourDigits.padStart(14, "*");
console.log(bankAccountNo); // **********9996

const firstName = "Pooja";
const fullName = firstName.padEnd(10, "*");
console.log(fullName); // Pooja*****

//* 2. repalcing character
const greeting = "Hello";
const replaceOnlyFirstOccurence = greeting.replace("l", "*");
console.log(replaceOnlyFirstOccurence); //He*lo
const replaceAllOccurences = greeting.replaceAll("l", "*");
console.log(replaceAllOccurences); //He**o

//* 3. Conactenation
const fName = "Pooja";
const middleName = "Singh";
const lastName = "Freedom";
const Name = fName.concat(" ", middleName, " ", lastName);
console.log("Name: ", Name); // Pooja Singh Freedom

//-------------------- Template Literal String ---------------
const myself = `My name is ${Name}`;
console.log(myself); //My name is Pooja Singh Freedom
