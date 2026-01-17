let score="dipa"
console.log(typeof score);
let valueInNumber=Number(score)//it will convert string to number
console.log (typeof valueInNumber)
console.log(valueInNumber) 
//"12"=>33
//"123dipa"=> NaN
//true=>1; false=>0
//undefined=>NaN

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)//1 convert to true 
console.log(booleanIsLoggedIn)
//1=>true, 0=>false
//""=>false, "dipa"=>true

let someNumber=23
let stringNumber= String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
//______operations_______

let value=3
let negValue=-value
console.log(negValue)
let str1="hello"
let str2="dipa"
let str3=str1+str2
console.log(str3)

console.log("1"+2+2)//122 
// console.log(1+2+"2")//32//do not write this type of code

let x = 3;
let y = ++x;
console.log(`x=${x} y=${y}`)
//x++ in prefix returns the value before incrementing
//++x in postfix returns the value after incrementing.