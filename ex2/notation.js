// notation.js

// Fonction qui calcule la moyenne d'un tableau de notes
function mean(scores) {
  // Vérifier si le tableau est vide pour éviter division par zéro
  if (scores.length === 0) {
    return 0;
  }
  
  // Calculer la somme des notes 
  // reduce parcourt le tableau 
  const sum = scores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);  
  
  //  la moyenne (somme / nombre d'éléments)
  return sum / scores.length;
}
module.exports = { mean };