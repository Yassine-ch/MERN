function twoSum(arr, k) {
   
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === k) {
            return [i, j];
        }
      }
    }
  }
  console.log(twoSum([2,11,7,15,6,0,3],9))