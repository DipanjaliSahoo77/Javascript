//comparison operator
//<,>,<=,>=,==,!=,===(type checking)
const temperature=41
if(temperature===40){
    console.log("less than 50")
}
else{
    console.log("greater than 50")
}
console.log("execute")

const score=200
if(score>100){
    const power="fly"
    console.log(`user power:${power}`)
}
// console.log(`user power:${power}`)=>if we use const in the scope then it will give an error but when we will use var then will access out side of the scope which will be not secure.

const balance=1000
if(balance>500) console.log('text');//implicit and it is immature code

//nesting 
if(balance<500){
    console.log('less than')
}else  if(balance<750){
    console.log("less than 750")
}else{
    console.log("less than 1200")
}

//loggedin
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("allow to buy")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("loged in");
}

//switch

const month=3

switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;

    default:
        console.log("default case")
        break;
}
//if will never use break in one case then it will execute the next cases  except default