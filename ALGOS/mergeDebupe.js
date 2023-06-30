
const mergeArrays = (arr1, arr2) => {
   const { length: l1 } = arr1;
   const { length: l2 } = arr2;
   const res = [];
   let temp = 0;
   for(let i = 0; i < l1+l2; i++){
      if(i >= l1){
         temp = i - l1;
         if(!res.includes(arr1[temp])){
            res.push(arr1[temp]);
         };
      }else{
         temp = i;
         if(!res.includes(arr2[temp])){
            res.push(arr2[temp]);
         };
      };
   };
   return res;
};
const arr1 = [1, 3, 3, 5, 8, 10];
const arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
console.log(mergeArrays(arr1, arr2));