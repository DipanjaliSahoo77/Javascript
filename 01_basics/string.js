const name="dipa"
const repocount=10
console.log(name+ repocount +"value");
//string interpolation:--we can embed value with the string.
console.log(`hello my name is ${name} and my repo count ${repocount}`)

const getname=new String("dipa");
console.log(getname[0])
console.log(getname.__proto__);
console.log(getname.length)
console.log(getname.toUpperCase());
console.log(getname.charAt(2));
console.log(getname.indexOf('p'))
const newString= getname.substring(0,4)
console.log(newString)
const anotherString= getname.substring(-4,4)
console.log(anotherString)
const newStringONE='  DIPA  '
console.log(newStringONE);
console.log(newStringONE.trim())//it works on whitespace

console.log(newStringONE.replace("D","L").trim())
console.log(newStringONE.includes("I"))
console.log(newStringONE.split(''))



