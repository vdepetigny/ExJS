// Création d'une demi-pyramide

function script_3() {

let floornumber // Création de la variable avec le nombre de #
let stone = "#" // "Hashtag unitaire"
let floor = "" // Variable devant accuillir l'ensemble des # de chaque ligne

floornumber = prompt("Salut, bienvenue dans ma super pyramide ! combien d'étage souhaitez-vous ?"); // Récupération du nombre

let airnumber = floornumber-1 // Création de la variable avec le nombre de " "
let space = " " // "Espace unitaire"
let air = "" // Variable devant accuillir l'ensemble des " " de chaque ligne

console.log(`Voici votre pyramide :`)
// Première boucle permettant de construire la ligne
while (floornumber > 0) {
  air = "";
  
  for(let count = 0; count <=airnumber-1; count++){
    air = air + space
   } // Deuxième boucle permettant d'ajouter le bon nombre d'espace à chaque ligne

  floor = floor + stone
  floornumber -= 1;
  airnumber -= 1;
  console.log(air + floor);
}
console.log(`J'aurais pu faire architecte, vous ne trouvez pas ?`)
}