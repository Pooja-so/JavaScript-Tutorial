//* ################ 1. string to number conversion #################### *//
console.log("\n1. string to number conversion: Number(stringValue) ");
let score = "33";
console.log("typeof(score): ", typeof score); //string

//-------- Converting string to number --------------*/
score = Number(score);
console.log("typeof(score): ", typeof score); //number

//------- Pitfall: Trying to convert alphanumeric value to number ---------
//When we try to convert alphanumeric string value into number its data type becomes number but the varaible's value is Not a Number(NaN)
console.log("-------Pitfall--------");
score = "333abc";
console.log("score: ", score);
score = Number(score);
console.log("typeof(score): ", typeof score); //number
console.log("Number(score): ", score); // NaN (Not a Number)

//* ################ 2. null to number conversion #################### *//
console.log("\n2. null to number conversion: Number(null) ");
let accountId = null;
console.log("accountId: ", accountId);
console.log("typeof(accountId): ", typeof accountId);

console.log("\nAfter conversion: ");
accountId = Number(accountId);
console.log("Number(accountId): ", accountId);
console.log("typeof(accountId)", typeof accountId);

//* ################ 3. undefined to number conversion #################### *//
console.log("\n3. undefined to number conversion: Number(undefined) ");
accountId = undefined;
console.log("accountId: ", accountId);
console.log("typeof(accountId): ", typeof accountId);

console.log("\nAfter conversion: ");
accountId = Number(accountId);
console.log("Number(accountId): ", accountId);
console.log("typeof(accountId)", typeof accountId);

//* ################ 4. boolean to number conversion #################### *//
console.log("\n4. boolean to number conversion: Number(boolean) ");
let flag = false;
console.log("flag: ", flag);
console.log("typeof(flag): ", typeof flag);

console.log("\nAfter conversion: ");
flag = Number(flag);
console.log("Number(flag): ", flag);
console.log("typeof(flag)", typeof flag);

//* ################ 5. number to boolean conversion #################### *//
console.log("\n5. boolean to number conversion: Number(boolean) ");
let num = "pooja";
console.log("num: ", num);
console.log("typeof(num): ", typeof num);

console.log("\nAfter conversion: ");
num = Boolean(num);
console.log("Boolean(num): ", num);
console.log("typeof(num)", typeof num);

console.log("\n--------------- Quick Recap ---------------------");
console.log("Number('33'): ", Number("33"));
console.log("Number('33abc'): ", Number("33abc"));
console.log("Number('pooja'): ", Number("pooja"));

console.log("Number(undefined): ", Number(undefined));
console.log("Number(null): ", Number(null));

console.log("Number(true): ", Number(true));
console.log("Number(false): ", Number(false));

console.log("String(false): ", String(false));
console.log("typeof String(false): ", typeof String(false));

/*----------------------------- SUMMARY -------------------------------------
variable      value       typeof         conversion          value     typeof
_____________________________________________________________________________
score         "33"         string        Number(score)         33      number
score       "33abc"        string        Number(score)        NaN      number
name        "Pooja"        string        Number(name)         NaN      number

accountId    null          object        Number(accountId)     0       number
accountId   undefined     undefined      Number(accountId)     NaN     number

flag        true        boolean         Number(flag)          1       number
flag        false       boolean         Number(flag)          0       number

num         0           number          Boolean(num)        flase    boolean
num         1           number          Boolean(num)        true     boolean
str        ""           string          Boolean(str)        false    boolean
str       "pooja"       string          Boolean(str)        true     boolean

num         33          number          String(num)         "33"     string

------------------------------  Quick Recap ---------------------------------
_________________typeof(Number(data_type)) : number__________________________
Number("33") => 33          Number("33abc") => NaN       Number("pooja") => NaN
Number(undefined) => NaN    Number(null) => 0
Number(true) => 1           Number(false) => 0

_________________typeof(Boolean(data_type)) : boolean__________________________
Boolean(1) => true           Boolean(0) => flase
Boolean("pooja") => true     Boolean("") => false
          
_________________typeof(String(data_type)) : string__________________________
String(33) => "33"
String(false) => "false"
*/
