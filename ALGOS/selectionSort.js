function selectionSort(arr) {
    let temp =0;
    for (let i = 0; i < arr.length; i++) {
      let low = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[low]) {
          low = j
        }
      }
      if (low !== i) {
        temp = arr[i];
        arr[i]=
        arr[low]=
         
        [arr[i], arr[low]] = [arr[low], arr[i]];
      }
    }
    return arr
  }
  console.log(selectionSort([10,2,1,6,4,3,9])) 
  