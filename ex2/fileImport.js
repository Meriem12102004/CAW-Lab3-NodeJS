// Importer la fonction mean
const { mean } = require('./notation');

// Créer des tableaux de test
const notes1 = [15, 18, 12, 16, 14];
const notes2 = [10, 20, 15, 18, 17];
// Utiliser la fonction importée
console.log('Moyenne des notes1:',notes1,"= ", mean(notes1));
console.log('Moyenne des notes2:', notes2, "= ", mean(notes2));

/*  Exécution: node fileImport.js
   Resultat :Moyenne des notes1: [ 15, 18, 12, 16, 14 ] =  15
             Moyenne des notes2: [ 10, 20, 15, 18, 17 ] =  16
             
*/