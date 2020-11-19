let bodovi = prompt("Unesi broj bodova:");
let ocijena;
let poruka;

if(bodovi >= 0 && bodovi < 50){
    ocijena = 1;
    poruka = "Ocijena: "+ ocijena +" - Nedovoljan!"
}

if(bodovi >= 50 && bodovi < 63){
    ocijena = 2;
    poruka = "Ocijena: "+ ocijena +" - Dovoljan!"
}

if(bodovi >= 63 && bodovi < 76){
    ocijena = 3;
    poruka = "Ocijena: "+ ocijena +" - Dobar!"
}

if(bodovi >= 76 && bodovi < 89){
    ocijena = 4;
    poruka = "Ocijena: "+ ocijena +" - Vrlo Dobar!"
}

if(bodovi >= 89 && bodovi <=100){
    ocijena = 5;
    poruka = "Ocijena: "+ ocijena +" - Odličan!"
}

if (bodovi > 100){
    poruka = "Unjeli ste krivi broj bodova, pokušajte ponovno!"
}
console.log(poruka);