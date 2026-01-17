const score=400
const balance=new Number(300)
console.log(typeof score)//output number
console.log(typeof balance)//output object
console.log(balance.toString().length);
console.log(balance.toFixed(2))

const otherNumber=123.786
console.log(otherNumber.toPrecision(3));//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.range must be 1-21
const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))
///*************math*****//
console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.9))
console.log(Math.floor(4.9))
console.log(Math.min(4,5,6,7))
console.log(Math.max(5,7,8,9))

console.log(Math.random())
const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min)