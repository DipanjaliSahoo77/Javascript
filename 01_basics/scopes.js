


{}//=>scopes,when we will use it in object then it is called object declaration but whne we will use it in function or if else  then we can called it as  scope of that program.

if(true){
   let a=10
   var b=20
   const c=30
}
// console.log(a)
console.log(b)
// console.log(c)

//whatever there inside the bracses that will be the block scope and outside is called global scope

//DOM(documnet object model)=How to manipulate the html pages through javascript

//nested scope

function one(){
    const username="dipanjali"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username="dipa"
    if(username==="dipa"){
        const website="website"
        console.log(username+website)
    
    }
    // console.log(website)//error
}
// console.log(username)//error

console.log(addone(6))
function addone(num){
    return num+1
}
//it will give the output because of hoisting
console.log(addTwo(4))
const addTwo=function(num){
    return num+2
}
//it will give an error ,  in theis case it will create a execution context where  a variable return undefined and a function return a function

