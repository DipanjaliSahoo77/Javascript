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