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
	console.log("Tous les livres ont été empruntés au moins une fois")
} else {
	console.log("Un livre n'a jamais été emprunté")
}

// Quel est livre le plus emprunté ?
let mostRented = books.sort((a,b)=>(b.rented - a.rented));
console.log(mostRented[0])

// Quel est le livre le moins emprunté ?
let leastRented = books.sort((a,b)=>(a.rented - b.rented));
console.log(leastRented[0])

// Trouve le livre avec l'ID: 873495
books.forEach(book => {
	if (book.id == "873495") {
		console.log(book.title)
	}
})

// Supprime le livre avec l'ID: 133712
let index = books.findIndex(book => book.id === 133712);
books.splice(index,1);


// books.forEach(book => {
// 	i = 0
// 	if (book.id == "133712") {
// 		console.log(book.title)
// 		books.splice(i,i)
// 	}
// 	i += 1
// })

console.log(books)


// Trie les livres par ordre alphabétique
console.log(books.sort((a, b) => a.title.localeCompare(b.title)));


