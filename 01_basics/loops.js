//for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is the best number")
    }
    console.log(element);
    
}

for(let i=0;i<=10;i++){
    console.log(`outer loop: ${i}`)
    for(let j=0;j<=10;j++){
    //    console.log(`inner loop ${j} and inner loop${i}`)
    console.log(i +'*'+j+'='+i*j)
    }
}

const myArray=["dipa","lopa","champa"]
for(let i=0;i<myArray.length;i++){
    const element=myArray[i]
    console.log(element)
}

//break and continue keyword

for(let i=0;i<=10;i++){
    if(i==5){
        console.log("detected 5");
        break

    }
    console.log(i)
}
for(let i=0;i<=10;i++){
    if(i==5){
        console.log("detected 5");
        continue//it will ignore the value 5

    }
    console.log(i)
}

//while and do-while loop
let i=0;
while(i<=10){
    console.log(i);
    i=i+2
}

let yourArray=["dipa","lopa"]
let arr=0;
while(arr<yourArray.length){
    console.log(yourArray[arr])
    arr++
}

//do while loop(first it will do work then will check condition)
let score=1
do{
    console.log(`score is ${score}`);
    score++
}while(score<=10)

// for of
const newArray=[1,2,3,4,5,6]
for (const num of newArray) {
    console.log(num);
}

const myName="Dipanjali Sahoo"
for(const char of myName){
    if (char===" "){
        continue
    }
    console.log(`each char is ${char}`)
}

//maps(is is an object in map values will eb unique if will add same value )

const map=new Map()
map.set('In',"India")
map.set('usa','unitedstates')
console.log(map)

//use for of loop in map

for(const [key,value] of map){
    console.log(key,value)
}
const myObject={
    'game1':'nfs',
     'game2':'spiderman'
}
// for(const [key,value]of myObject){
//     // console.log(key,value)//it will give an error bcz object will not itterable
// }
const yourObject={
    js:"javascript",
    cpp:"c++"
}
for (const key in yourObject) {
    console.log(`${key} shortcut is for ${yourObject[key]}`)
}
//keys of array are number which starts from 0 means index of an array
//for in use in array
const programming=["java","python","react"]
for(const key in programming){
    console.log(key + programming[key])
}
//map  is not iterable

//for each loop//provide a callback function
const coding=["js","c++","python"]
coding.forEach(function (item){
   console.log(item);
})
//using arrow function
coding.forEach((item)=>{
    console.log(item)
})

//using printMe
function printMe(item){
    console.log(item)
}//or
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

//use for each loop in object  in a array

const identification=[
    {
        name:"dipanjali",
        age:22
    },
    {
        name:"shreya",
        age:22
    },
    {
        name:"dipanjali",
        age:22
    },
]
identification.forEach((item)=>{
  console.log(item.name)
})
//foreach() does not return any value
//filter() return the value
const myNums=[1,2,3,4,5,6,7]
const newNums=myNums.filter((num)=>num>4)
console.log(newNums)


