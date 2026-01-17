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