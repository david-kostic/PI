let lista = [
    {
        ime: "Mirko",
        prezime: "Mirkovic",
        upisan: true
    },
    {
        ime: "Marko",
        prezime: "Markovic",
        upisan: true
    },
    {
        ime: "Marin",
        prezime: "Marinkovic",
        upisan: false
    },
    {
        ime: "Matija",
        prezime: "Matijasic",
        upisan: true
    },
    {
        ime: "Mislav",
        prezime: "Mislioc",
        upisan: false
    },
    {
        ime: "Ivan",
        prezime: "Ivanovic",
        upisan: false
    },
    {
        ime: "Ivo",
        prezime: "Ivic",
        upisan: true
    },
    {
        ime: "Tin",
        prezime: "Tinski",
        upisan: true
    },
    {
        ime: "Ana",
        prezime: "Anic",
        upisan: false
    },
    {
        ime: "Lea",
        prezime: "Leic",
        upisan: true
    }
] 
function provjeri(lista, pojam){
    for(var i=0;i<10;i++){
        if((lista[i].ime==pojam && lista[i].upisan==true) || (lista[i].prezime==pojam && lista[i].upisan==true)){
           return console.log("true"); 
        }
    }
    return console.log("false");
}
provjeri(lista,"Marko");
provjeri(lista,"Marijan");
