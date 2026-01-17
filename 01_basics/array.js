

//array//

const myArray=[1,2,4,5]
console.log(myArray[0])//can access element of an array using indexing
myArray.push(6)//it will push an element in the last
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(9)//it will add an element first in an array
console.log(myArray)
myArray.shift()
console.log(myArray)
console.log(myArray.includes(9))
console.log(myArray.indexOf(4))
//join method add an array and convert into string
const newArray=myArray.join()
console.log(newArray)

console.log("a",myArray)
const mn1=myArray.slice(1,3)
console.log(mn1)
console.log('b',myArray)
const mn2=myArray.splice(0,2)
console.log(mn2)
console.log('c',myArray)
/*
Removing: months.splice(1, 2) removes 2 elements starting at index 1.
Adding: fruits.splice(1, 0, "Banana", "Orange") adds elements at index 1 without removing any.
Replacing: tech.splice(2, 1, "JavaScript") removes 1 element at index 2 and adds "JavaScript". 
*/

const first_name=["dipa","lopa","champa"];
const last_name=["sahoo","mishar","prusty"]
first_name.push(last_name)
console.log(first_name)//it will give array within an array when we will push an array within n array and the push array consider an signle element here.

const first_number=['1',"2","3"]
const second_number=["4","5"]

const total_number=first_number.concat(second_number)
console.log(total_number)
//spread operator
const new_number=[...first_number,...second_number]
console.log(new_number)

const another_array=['1','2','3',['4','5'],'6','7',['8','9']]
const real_array=another_array.flat(Infinity);
console.log(real_array)

console.log(Array.from("dipa"))//it will convert a string to an array
console.log(Array.isArray("dipa"))//it will check array or not

let num1=20
let num2=30
let num3=40
console.log(Array.of(num1,num2,num3))
