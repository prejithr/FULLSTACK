// Arithmetic operator (+,-,*,%,/)
//  var a=10;
//  var b=20;
  
//  console.log(a+b);
//  console.log(a-b);
//  console.log(a*b);
//  console.log(a%b);
//  console.log(a/b);

 // logical operator (&&,||,!)

//

//       
//var a=10;
//var b=20;
//if(true){
  //  console.log('${a} +${b}=${a+b}');
//}                      












// var a; //Hoisting
// a=10;
// console.log(a)

// var a = 10; //global scope
// let b = 20;
// const c = 20;
// if(true){
//     console.log(a);
//     let b = 30;
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// var a = 10;
// if (a%2===0){
//     console.log('${a} is Even');
// }
// else{
//     console.log('${a} is Odd');
// }

// var mark = 25;
// if(mark>=90){
//     console.log("O Grade");
// }
// else if(mark >=70){          
//     console.log("A Grade");
// }
// else if(mark >= 35){
//     console.log("pass");
// }
// else{
//     console.log("fail");
// }

// var a = 4321;
// var result = a%2===0  ? "Even" : "odd" ;
// console.log(result)

// mark = 95;
// var result =(mark>=90) ? "O grade" :
//             (mark>=70) ? "A grade" :
//             (mark>=35) ? "Pass"    :
//             "Fail";
// console.log(result);

// var day = 5;
// switch(day){
//     case 1:{
//         console.log("sunday");
//         break;
//     }
//     case 2:{
//         console.log("monday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wednesday");
//         break;
//     }
//     case 5:{
//         console.log("thursday");
//         break;
//     }
//     case 6:{
//         console.log("friday");
//         break;
//     }
//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     default:{
//         console.log("invalid input");
//     }
// }

// for(var i=1;i<=200;i++) {
//     console.log(i);
// }

// var val = 10246;
// var count = 0;
// while(val > 0){
//     count++;
//     val = Math.floor(val/10);
// }
// console.log(count);

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }

//  add();0.
//  function10
//\ add(a=12 , b=21){
//      console.log(a+b);
// }

// var demo =(a =5,b=4) => {
//     console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);

// var arr = [10,20,30];
// var arr2 =[...arr,40,50];
// console.log(arr);
// console.log(arr2);

// var[m1,m2,m3,m4,m5] =[50,45,70,39,68]
// console.log(m1,m2,m3,m4,m5);

// var {name,mob,dept,email,isactive} = {
//     name:"prejith r",
//     mob:9787586151,
//     dept:["AI&DS"],
//     email:"prejithramdass05@gmail.com",
//     isactive:true 
// }
// console.log(name,mob,dept,email,isactive)


// var arr =[10,20,30,40,50];

// for(let index in arr){
//   console.log(index)
// }
  
// for(let value of arr){
//   console.log(value)
// }
// var obj ={
//   name:"prejith",
//   dept:["AI&DS"],
//   mob:9787586151
// }
// for(let key in obj){
//   console.log(key,obj[key])
// }

var arr =[1,2,3,4,5];
var result = arr.map((val)=>(val*2));  
console.log(result);

var even = arr.filter((val)=>val%2===0);
console.log(even)

var sum = arr.reduce((add,val)=>(add+val),0);
console.log(sum)
