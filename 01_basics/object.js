//objects can declar literals  and constructor.
//signleton-when we  declar as contructor then only signleton created.
//object literals
// const jsUser={}//this is object

//how to assign a symbol
const mysm=Symbol()

const jsUser={
    name:"dipa",
    age:22,
    loaction:"bhubaneswar",
    [mysm]:"num13"
    
}
console.log(jsUser["name"]) 
//or
console.log(jsUser.name)
console.log(jsUser[mysm])

jsUser.name="lopa"
console.log(jsUser["name"])//change the value
//if we  are not able to change the value tehn we can freez the object

// Object.freeze(jsUser)//here object got freezed so after whatever we want to  change it will not impact on the object
jsUser.name="puja"
console.log(jsUser)
//by using "this" keyword we can access the properties from an object in function

jsUser.greeting=function(){
    console.log(`hii${this.name}`)
}
console.log(jsUser.greeting())
