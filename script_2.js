let number;
let result = 1;
number = prompt('De quel nombre veux-tu calculer la factorielle ?');

  while (number > 0) {
  	result *= number;
  	number -= 1;
  }

console.log(result)



