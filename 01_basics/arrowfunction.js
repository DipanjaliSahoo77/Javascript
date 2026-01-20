//in es6 javascript arrow function a feature 
//this keyword used to acess the current context in the object
const user={
    username:"dipa",
    age:21,
    welcomeMessage:function(){
        console.log(`${this.username} , wlcome to website`)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

//arrow function
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))
//implecit
const addtwo=(num1,num2)=>(num1+num2)