// Fonction factorielle du nombre choisit par l'utilisateur

let number; // Création de la variable
let result = 1; // Création de la variable de résultat
number = prompt('De quel nombre veux-tu calculer la factorielle ?'); // Récupération du nombre

  while (number > 0) { 
  	result *= number;
  	number -= 1;
  } // Factorisation

console.log(result) // Rendu du résultat



