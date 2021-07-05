// function sayHi(){
//     console.log("Hello"+arguments[0]+arguments[1])
// }
// sayHi("11","22");
// function howMany(){
//     console.log(arguments.length)
//     console.log(Array.from(arguments))
// }
// howMany("String,11",1,2)
// function addNum(){
//     if (arguments.length===1){
//         console.log(arguments[0]+10)
//     }else if(arguments.length===2){
//         console.log(arguments[0]+arguments[1])
//     }
// }
// addNum(10);
// addNum(10,1000)
// function doAdd(num1,num2){
//     arguments[1]=10;
//     console.log(arguments[0],num2)
// }
// doAdd(10.1,10.2)
// doAdd(10.1)
// function foo(){
//     console.log(arguments[0])
// }
// foo(5);
// let bar=()=>{
//     console.log(arguments[0])
// }
// bar(5);//箭头函数不能使用arguments访问
// function foo(){
//     let bar=()=>{
//         console.log(arguments[0]);
//     };
//     bar();
// }
// foo(5);
// function addSomeNumber(num){
//     return num+ 100;
// }
// function addSomeNumber(num){
//     return num+200;
// }
// let result=addSomeNumber(100);
// console.log(result)
// function makeKing(name){
//      name=(typeof name!==undefined)?name:"Herry";
//     return `${name}`

// }
// console.log(makeKing())
// console.log(makeKing('Lucy'))
// function makeKing(name='Herry',sex='女'){
//     return `${name} ${sex}`
// }
// console.log(makeKing())
// console.log(makeKing('Lucy'))
// console.log(makeKing('Lucy','Bob'))
// console.log(makeKing('bob',undefined))
// function makeKing(name="name1"){
//     name="name2"
//     return `${arguments[0]}`
// }
// console.log(makeKing())
// let num=['一','二','三','四','五','六','七','八']
// let ordinality=0;
// function getNumAdd(){
//     return num[ordinality++];//每次调用后都递增
// }
// function makeKing(name='Harry',numreals=getNumAdd()){
//     return `字符串里有${name}${numreals}`
// }
// console.log(makeKing())
// console.log(makeKing('Ljn'))
// console.log(makeKing('LAL',1))
// console.log(makeKing('111'))
// function makeKing(name=namereals,namereals="Ljn"){
//     return `${name}${namereals}`
// }
// console.log(makeKing('111'))
let values = [5, 2, 3, 4];
function getNum(){
    console.log(arguments)
    let sum = 0;
    for(let i=0;i<arguments.length;++i){
        sum+=arguments[i];
      
    }
    return sum;
}
console.log(getNum( ...values));
console.log(getNum(values))
console.log(...values)
// let values = [1, 2, 3, 4];
//  function getSum() { 
//      let sum = 0;
//       for (let i = 0; i < arguments. length; ++ i)
//        { sum += arguments[ i]; } 
//        return sum; 
//     }
//     console. log( getSum. apply( null, values));

let num = () => {return Math.random() * 10 + 1;}
console.log(num())
