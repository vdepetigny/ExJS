
function script_7() {

const books = [
  { title: 'Gatsby le Magnifique', id: 133712, rented: 9 },
  { title: 'A la Recherche du Temps Perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?

let nav = true
books.forEach(book => {
	if (book.rented === 0){
        nav = false
	} 
})

if (nav === true) {
	console.log("D'après mes recherches intensives, tous livres ont été empruntés au moins une fois...")
} else {
	console.log("Ici la navette! Je signale que cette bibliothèque possède (scandale) un livre n'a jamais été emprunté")
}

// Quel est livre le plus emprunté ?

let mostRented = books.sort((a,b)=>(b.rented - a.rented));
console.log(` ${mostRented[0].title} est le livre le plus emprunté. Ca fait plaisir de voir les classiques traverser ainsi les âges... Cela réchauffe mon petit coeur de console. `)

// Quel est le livre le moins emprunté ?

let leastRented = books.sort((a,b)=>(a.rented - b.rented));
console.log(` ${leastRented[0].title} est le livre le moins emprunté. Et c'est pourtant mon préféré. Je l'ai dévoré en 0,00000001 milli-seconde dans les premières minutes de ma création... Une vraie expérience émotionnelle et transcendante! `)

// Trouve le livre avec l'ID: 873495

books.forEach(book => {
	if (book.id == "873495") {
		console.log(`${book.title} correspond à la cote 873495. Ne me demandez pas pourquoi!`)
	}
})

// Supprime le livre avec l'ID: 133712
let bookss = books.slice()
let index = bookss.findIndex(book => book.id === 133712);
bookss.splice(index,1);
console.log("Mais où est donc passé Gatsby le Magnifique. Tu ne l'aurais pas effacé par hasard ???")
console.log(bookss)

// Trie les livres par ordre alphabétique
console.log("Voilà j'ai tout rangé dans l'ordre alphabétique, on y voit tout de suite plus clair!")
console.log(books.sort((a, b) => a.title.localeCompare(b.title)));
}