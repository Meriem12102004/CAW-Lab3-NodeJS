// Importer le module fs
const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
  console.log('Erreur: Aucun nom de fichier fourni');
  console.log('Usage: node ReadFile.js <nom_fichier>');
  process.exit(1);
}
// Vérifier si le fichier existe
if (!fs.existsSync(filename)) {
  console.log(`Erreur: Le fichier "${filename}" n'existe pas.`);
  process.exit(1);
}

// Lire et afficher le contenu du fichier
try {
  const content = fs.readFileSync(filename, 'utf8');
  console.log(content);
} catch (error) {
  console.log('Erreur lors de la lecture:', error.message);
}

/* Execution: echo "Hello, this is a text example" > test.txt
              node ReadFile.js test.txt
    Resultat: Hello, this is a text example */