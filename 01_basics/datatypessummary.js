/*
Data types :-Primitive and Non-primitive it catagories in the basis of how to store the data and how to access the data from the memory
*/
//primitive-7 types:string,number,boolean,null,undefined,symbol,BigInt
//Reference(Non Primitive):Array,Objects.Functions

//Js is dynamic language bcz when we are assigning any value in that we are not defining any integer or boolean, we are just assigning to a variable  type.

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
const bigInt=378864n

const heros=["saktiman","naagraj","doga"]

let myObj={
    name:"dipa"
}
const myFunction=function(){
    console.log("dipa");
}
//return of function is objectfunction
console.log(typeof heros)//return object

//*************Stack and Heap Memory*****//
/*
stack(primitive)=it gives a copy
heap(non primitive)=it gives reference
*/
let myName="dipanjali"
let anothername=myName
anotherName="sinu"
console.log(myName)
console.log(anotherName)//it creates a copy and then it changes the value

let user={
    email:"dipa@gmail.com",
    upi:"user@ybl"
}//it goes to heap memory and it does not gives the copy , it gives the reference 
let userTwo=user
userTwo.email="dipa77@gmail.com"
console.log(user.email)
console.log(userTwo.email)//userTwo and user refer to one heap memory and both will  give the same result means whatever we are doing changes that happen in the original memory.

