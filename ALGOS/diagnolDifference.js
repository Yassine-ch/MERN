function diagonalDiference(matrice) {
    let diag1 = 0;
    let diag2 = 0;
  
    for (let i = 0; i < matrice.length; i++) {
      diag1 += matrice[i][i];
      diag2 += matrice[i][matrice.length - 1 - i];
    }
  
    const difDiag = diag1 - diag2;

    return  Math.abs(difDiag);

    }
  
  
  const matrice = [
    [1, 2, 1],
    [4, 7, 6],
    [9, 8, 2]
  ];
  
  const difDiag = diagonalDiference(matrice);
  console.log("La diference entre le deux diagonales est :", difDiag);
  