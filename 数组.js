//Array构造函数ES6新增用于创建数组的静态方法from()和of()
//from()用于将类数组结构转换为数组实例，而of()用于将一组参数转换维数组实例
//Array.from(a,b) a:类数组对象，即任何可迭代的结构，或者有一个length属性和可索引元素的结构
// console.log(Array.from('Marrt'))
 const m=new Map().set(1,2).set(3,4);
 const s=new Set().add(1).add(2).add(3).add(4);
 console.log(m,"       ",Array.from(m));
console.log(s,Array.from(s));
