

function script_6() {
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70

entrepreursOf70s = [];
entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur.year >= 1970 && entrepreneur.year <= 1980) {
    entrepreursOf70s.push(entrepreneur);
  };
});

console.log("Les entrepreneurs nés dans les 70 sont :");
entrepreursOf70s.forEach(entrepreneur => {
  console.log(entrepreneur.first + " " + entrepreneur.last);
})

// Sors une array qui combien le prénom et le nom des entrepreneurs

entrepreneurNames = [];
entrepreneurs.forEach(entrepreneur => {
  name = entrepreneur.first + " " + entrepreneur.last;
  entrepreneurNames.push(name);
})

console.log(entrepreneurNames);

// Quel âge aurait chaque inventeur aujourd'hui ?

entrepreneurs.forEach(entrepreneur => {
  entrepreneur.age = 2019 - entrepreneur.year;
});

// Trie les inventeurs par ordre alphabétique du nom de famille

console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));
}