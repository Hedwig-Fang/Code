let nums=[3,4,1,2,9];
len=nums.length;
function addNum(nums,num_length){
    if(num_length==0){
       return 0;
    }else{
        return   nums[num_length-1]+addNum(nums,num_length-1);
    }
}
console.log(addNum(nums,len));
// function test(nums,len){
//         return len==0?0: test(nums,len-1)+nums[len-1];
        
// }
// console.log(test(nums,len))
// let num=100;
// function sum(num){
//     if(num==0){
//         return 0;
//     }else{
//     return num+sum(num-1)
//     }
// }
// console.log(sum(num))
let nums=[1,3,4,2,9]
let target=7
// function a(nums,target){
//     let arr=[];
//     for(i=0;i<nums.length;i++){
//         let diff=target-nums[i];
    
//     }
// }
//尝试写一个函数实现一个Hashmap
function b(nums){
   let target=9
   let map=new Map();
    for(let i=0;i<nums.length;i++){
      let diff=target-nums[i]
      console.log(nums[i])
      map.set(nums[i],diff)
      console.log(map)
      console.log(map.has(8))
      console.log('-----------')

        
    }
    // console.log(map)
    
}
// a(num,target);
b(nums)