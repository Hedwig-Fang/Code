// const a=new Map().set(111,222).set(333,444)
// console.log(Array.from(a))
// const a1=[1,2,3,4];
// const a2=Array.from(a1);
// console.log(a2===a1);

// 

// let collection=[111,222,333,444,555];
// collection.forEach((item)=>console.log(item));
// collection.length=2;
// console.log(collection)
// let dest,src,result
// dest={
//     set a(val){
//         console.log(`Invoked dest setter with param ${val}`);
//     }
// };
// src={
//     get a(){
//         console.log(`Invoked src getter`)
//         return "foo";
//     }
// };
// Object.assign(dest,src)
// // result=Object.assign(dest,src )
// console.log(dest===result)
// console.log(dest===src);
// console.log(result)
// console.log(dest)



// let person={};
// Object.defineProperty(person,"name",{
//     configurable:false,
//     value:"Nich"
// });
// //报错
// let person={};
// Object.defineProperty(person,"name",{
//     configurable:true,
//     value:"Nich"
// });
// let  str = '{"name":"huangxiaojian","age":"23"}'
// let obj={name:"ljn",age:11}
// console.log('typeof JSON.parse(str)的打印结果是',typeof JSON.parse(str))
// console.log('typeof JSON.stringify(obj)的打印结果是',typeof JSON.stringify(obj))
// console.log('typeof str的打印结果是',typeof str)
// console.log('typeof obj的打印结果是',typeof obj)
// const obj = {
//     "site": "Pitayan",
//     "url": "https://pitayan.com",
//     100: 100,
//     test:"111"
//   }
//   console.log(JSON.stringify(obj, ["site",'test']))
// const obj2=[{"name":"fsy","type":"11"},{"name":"ljn","type":"1"},{"name":"harry","type":"1"}]
// var obj_change=JSON.stringify(obj2,(key,value)=>{
//     if(key=='type'){
//         return ["人","猫","狗","猪"][value];
//     }
//     return value;
// })
// console.log(obj_change)

// let someDate1 = new Date(Date.parse("June 16,2021"));
// let someDate2 = new Date("June 16,2021");

// let y2k=new Date(Date.UTC(2000,0))
// let stringValue = "hello world"; 
// console. log( stringValue. slice( 3)); // "lo world"
// console. log( stringValue. substring( 3)); // "lo world" 
// console. log( stringValue. substr( 3)); // "lo world" 
// console. log( stringValue. slice( 3, 7)); // "lo w" 
// console. log( stringValue. substring( 3, 7)); // "lo w" 
// console. log( stringValue. substr( 3, 7)); // "lo worl"


//  let colors=new Array("red","blue","green");
//  let colors=new Array(3);
//  let names= new Array("Greg");


// function Person(name,age,job){
//     this.name=name;
//     this.age=age;
//     this.job=job;
//     this.sayName=function(){
//         console.log(this.name);
//     };
// }
// let person1=new Person("ljs",27)
