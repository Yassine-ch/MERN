function orderedInsersection(sortedA,sortedB){
    result =[];

    for (let i = 0; i < sortedA.length; i++) {
      const element = sortedA[i];
      for (let j = 0; j < sortedB.length; j++) {
        if (sortedB[j] === element) {
         
          result.push(element);
        }
      }
    }
    return result;
  }
  
  // Exemple d'utilisation
  const sortedA = [1, 2, 3, 4, 5, 3, 3];
  const sortedB = [4, 5, 6, 7, 8, 2, 3];
console.log(   orderedInsersection(sortedA, sortedB));
