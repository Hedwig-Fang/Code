/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let nums=[-1,-2,-3,-4,-5]
 target=-8;
 var twoSum = function(nums, target) {
     let items=[]
     let returnitems=[]
     nums.forEach((item1,key1) => {
    
             const a=item1;
             const b=key1;
             console.log(item1)
             nums.forEach((item2,key2)=>{
                 if(item2+a==target&&b!=key2){
                    items=[key2,b]
                 }
             })
   
     });
     return items
 };
   console.log(twoSum(nums,target))
 