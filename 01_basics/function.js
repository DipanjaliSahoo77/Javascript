//function is packed in a package and we can use it anywhere and it use for  the resue the code and modularity.

function sayMyName(){
    console.log("My name is Dipanjali Sahoo");
    console.log("My name is Dipanjali Sahoo");
    console.log("My name is Dipanjali Sahoo");console.log("My name is Dipanjali Sahoo");
}
sayMyName();//function call or function invoke

function addTwoNumbers(num1,num2){
    return num1+num2;
}
//num1 and num2 are parameters
const result=addTwoNumbers(5,7);//5 and 7 are arguments
console.log(result);
//after write return in the function if we are priniting anything then it will not print because after return function will terminate.

function loginUserMessage(username  = "dipa"){
    if(!username){
        console.log("please enter a valid username")
        return
    }
    
    return `${username} logged in successfully`
   
}
console.log(loginUserMessage());//here by deafult dipa will take place if we dont provide any username
console.log(loginUserMessage("dipanjali"))//here dipanjali will take place

//shopping card example
function calculateCratPrice(...num1){
return num1
}
console.log(calculateCratPrice(200,400,500))
//rest operatior (...)or spread operator

function calculatePrice(val1,val2,...num1){
    return num1
}

console.log(calculatePrice(200,400,600,500,600))//here 200 and 400 will be assigned to val1 and val2 and rest value will be assigned to num1 as array

const user={
    username:"dipanjali",
    price:21
}
//how to pass the object in the function
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
//or
handleObject({
    username:"dipa",
    price:34
})
//how to pass array in function
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]  
}
console.log(returnSecondValue(myNewArray))