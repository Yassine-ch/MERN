function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let temp = arr[i]
      for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = temp
    }
    return arr
  }
  console.log(insertionSort([3, 5, 2, 1, 0]))
  console.log(insertionSort([3, 0]))
  console.log(insertionSort([0]))
  console.log(insertionSort([1, 2, 3, 4, 5]))
  console.log(insertionSort([5, 4, 3, 2, 1]))
  console.log(insertionSort([]))
