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


