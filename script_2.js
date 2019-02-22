// Fonction factorielle du nombre choisit par l'utilisateur

function script_2() {
let number; // Création de la variable
let result = 1; // Création de la variable de résultat
number = prompt('De quel nombre veux-tu calculer la factorielle ?'); // Récupération du nombre
let keepnumber = number.slice() // Préserver nombre donné

  while (number > 0) { 
  	result *= number;
  	number -= 1;
  } // Factorisation

console.log(`La factorielle de ${keepnumber} est... ${result}! Pas mal hein ?`) // Rendu du résultat
}


