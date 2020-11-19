let velicina = 8;
let sah_polje = "";

for (let y = 0; y < velicina; y++) {   
  for (let x = 0; x < velicina; x++) {
    if ((x + y) % 2 == 0)
      sah_polje += " ";
    else
      sah_polje += "#";
  }
  sah_polje += "\n";
}

console.log(sah_polje);
