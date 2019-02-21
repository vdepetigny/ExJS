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

entrepreneurNames = [];
entrepreneurs.forEach(entrepreneur => {
  name = entrepreneur.first + " " + entrepreneur.last;
  entrepreneurNames.push(name);
})

console.log(entrepreneurNames);

entrepreneurs.forEach(entrepreneur => {
  entrepreneur.age = 2019 - entrepreneur.year;
});

console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));



