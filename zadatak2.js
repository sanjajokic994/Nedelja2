let cena=100;
let kes=1290;
if (kes>cena){
    kes-=cena;
    console.log('Uspesno ste kupili proizvod!'+ kes);
}
else{
    console.log('Nemate dovoljno novca!'+ kes);
}