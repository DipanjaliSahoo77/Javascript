//date start from january1, 1970
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString())
console.log(typeof myDate)
let myCreateDate=new Date('01-15-2026')
console.log(myCreateDate.toLocaleDateString())
console.log(Date.now())//it will give in millisecond
//convert millisecond to second
console.log(Math.floor(Date.now()/1000))

let nowDate=new Date()
// console.log(nowDate)
console.log(nowDate.getMonth()+1);
console.log(nowDate.getDay());
const firstDate=nowDate.toLocaleString('default',{
    weekday:'long',

})
console.log(nowDate)