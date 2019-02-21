let floornumber
let space = " "
let stone = "#"
let floor = ""
let air = ""

floornumber = prompt('Salut, bienvenue dans ma super pyramide ! nombres Etages?');

let airnumber = floornumber-1

while (floornumber > 0) {
  air = "";
  
  for(let count = 0; count <=airnumber-1; count++){
    air = air + space
   }

  floor = floor + stone
  floornumber -= 1;
  airnumber -= 1;
  console.log(air + floor);
}