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

//const myUser=new Object()=> this is a singletone object
//const myUser={}=>this is a non singletone object

const myUser={}
myUser.name="dipanjali"
myUser.age=22
myUser.isLoggedIn=false
console.log(myUser)
//object within object
const regularUser={
    email:"dipa@gmail.com",
    fullname:{
        userFullname:{
            firstName:"dipa",
            lastName:"sahoo"
        }
    }
}
console.log(regularUser.fullname.userFullname)
//merge an object
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)
//or
const obj4={...obj1,...obj2}
console.log(obj3)
console.log(obj4)
const myalues=[
    {
        name:"dipanjali",
        age:22
    }
]
//to access object values in an array 
const result=myalues[0].name
console.log(result)
console.log(myUser)
//methods
console.log(Object.keys(myUser))
console.log(Object.values(myUser))
console.log(Object.entries(myUser))
console.log(myUser.hasOwnProperty('isLoggedIn'))

const course={
    coursename:"computerscience",
    price:"300",
    courseInstructor:"dipanjali"
}
//first way to access the values  in object
console.log(course.courseInstructor)
//second way to  acces s the values  in object
const{courseInstructor:instructor}=course//destructure of an object
console.log(instructor)

// {
//   "name": "dipanjali",
//   "age": 22
// }

//api are in json(javascript notation method) method


