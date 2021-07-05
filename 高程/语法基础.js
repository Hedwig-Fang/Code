// let x=3;
// x=x+4;
// console.log(setTimeout(()=>x=x+4,1000))
let x;
do{
    x=Math.round(Math.random()*10);

}while(x!==10)

let values=[1,2,3,4,5];
let sum=values.reduce(function(prev,cur,index,array){
    return prev+cur;
});
console.log(sum);
// const buf =new ArrayBuffer(16);
// console.log(buf.byteLength);
// const buf1=new ArrayBuffer(16);
// const buf2=buf1.slice(4,12);
// console.log(buf2.byteLength);
const buf =new ArrayBuffer(16);
const fullDataView =new DataView(buf);
console.log(fullDataView.byteOffset);
console.log(fullDataView.byteLength);
console.log(fullDataView.buffer)
