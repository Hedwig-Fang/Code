let nums=[3,4,1,2,9];
// function addNum(nums){
//     let sum=0;
//    for(let i=0;i<nums.length;i++){
   
//     //    console.log(sum+=nums[i])
//         sum+=nums[i]
     
//    }
//    return sum
// }
// addNum(nums)
// function addNum(nums){
//     let sum=0;
//     let i=0;
//     while(i<nums.length){
//         sum+=nums[i];
//         i++
//     }
//     return sum;

// }
function addNum(nums){
    let sum=0;
    nums.forEach(element => 
      sum+=element
    );
    return sum;
}
console.log(addNum(nums));