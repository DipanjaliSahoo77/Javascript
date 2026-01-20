//immediately invoked function expression(IIFE)--due to global scope polution problem to remove the global scope  variables or declaration we use IIFE.
//syntax
(function dipa(){
    //named IIFE
    console.log(`db connected`)
})();
//using arrow function
((name)=>{
    console.log(`db connected two ${name}`)
})('dipanjali')
