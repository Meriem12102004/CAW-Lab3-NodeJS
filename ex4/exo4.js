const fs = require('fs');

const nomFichier = process.argv[2];
const texte = process.argv[3];

if (!nomFichier || !texte) {
  console.log('Usage: node exo4.js <nom_fichier> "texte"');
  process.exit(1);
}

fs.writeFileSync(nomFichier, texte, 'utf8');
console.log('The file has been saved!');

const contenu = fs.readFileSync(nomFichier, 'utf8');
console.log(contenu);

//Execution:
/*

1:
  Commande: node exo4.js destination.txt "text to be saved to destination file..."
  Résultat: The file has been saved!
            text to be saved to destination file...
 2:
  Commande: node exo4.js output.txt "Hello World"
  Résultat: The file has been saved!
            Hello World

  3:
  Commande: node exo4.js test.txt "Ceci est un test"
   Résultat: The file has been saved!
             Ceci est un test

 4:
  Commande: node exo4.js notes.txt "Coding for fun, that's my motto!"
    Résultat: The file has been saved!
              Coding for fun, that's my motto!

*/