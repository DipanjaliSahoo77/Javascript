const userEmail='h@dipa.ai'
if(userEmail){
    console.log("got the user email")
}else{
    console.log("do not have user email")
}
//falsy values
// false,0,-0,bigint 0n,'',null,undefined,NaN
//truthy values
// '0','false',' ',[],{},function(){}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}//this for object

if(userEmail.length===0){
    console.log("this is empty")
}
//Nullish coalescing operator(??):null ,undefined

let val1;
val1=null??10//if it is null then for safty of code it will check and store the another value
console.log(val1);