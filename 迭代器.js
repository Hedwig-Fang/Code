// let num=1;
// let obj ={};
// console.log(num[Symbol.iterator]);
// console.log(obj[Symbol.iterator]);
// let str = 'abc'; 
// // let arr = ['a', 'b', 'c'];
// let map=new Map().set('a',1).set('b',2).set('c',3);
// // let els=windows.document.querySelectorAll('div');
// console.log(str[Symbol.iterator]());
// console.log(arr[Symbol.iterator]());
// console.log(map[Symbol.iterator]());
//for-of循环
let arr=['foo','bar','baz'];
for (let el of arr){
    console.log(el);
}
//数组解构

let [a,b,c]=arr;
console.log(a,b,c)

//扩展操作符
let arr2=[...arr];
console.log(arr2);
//Array.from()
let arr3=Array.from(arr);
console.log(arr3)
//set构造函数
let set =new Set(arr);
console.log(set);
//Map构造函数
let pairs=arr.map();
console.log(pairs);
//原生语言特性包括：for-of循环，数组解构，扩展操作符，Array.from()，创建集合，创建映射，Promise.all接收由期约组成的可迭代对象
//Promise.race()接收由期约组成的可迭代对象，yield*操作符，在生成器中使用