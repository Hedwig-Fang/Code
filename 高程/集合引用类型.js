//ES提供了3个严格相等的搜索方法
//indexOf()
//lasetIndexOf()
//includes()
let numbers=[1,1,4,5,3,2,1];
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.includes(1))
//断言函数 用于做测试
// const people=[
//     {
//         name:"ljn",
//         age:27
//     },
//     {
//         name:"fsy",
//         age:25
//     },
//     {
//         name:"Harry",
//         age:29
//     }
// ]
// console.log(people.find((element,index,array)=>(element.age<28)))
// console.log(people.findIndex((element,index,array)=>(element.age>28)))

let everyResult =numbers.every((item,index,array)=>item>2);
console.log(everyResult)
console.log(numbers.some((item)=>item>2

));
console.log(numbers.filter(item=>item>2))

let a=[1,2,3,9]
let se=[{key:1,name:'1_name'},{key:2,name:'2_name'},{key:4,name:'4_name'},{key:9,name:'9_name'}]
console.log(se.filter(item=>a.includes(item.key)));