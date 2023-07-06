/*

BONUS 2:
Chiedi un numero di 4 cifre all’utente.
 Usa la funzione sommaNumeri per calcolare la somma di tutte le cifre che compongono il numero e ritorni il risultato. 
 Usa questa funzione per stampare poi a video il risultato ottenuto. Ad es: 1286 la somma di tutti le sue cifre sarà 17!


*/

// MAIN
let numero=11;
const numeroCifre=4;

while(numero.toString().length != numeroCifre){
    numero=parseInt(prompt("inserisci un numero di 4 cifre :"));
}
let num2string=numero.toString();
let array=[];
for(let i=0;i<num2string.length; i++){
    array.push(parseInt(num2string[i]));
}

let somma=sommaNumeri(array);
console.log(somma);

// FUNCTIONS

function sommaNumeri(array){
    let somma=0;
    
    for(let i=0;i<array.length;i++){
        somma= somma+array[i];
    }

    return somma;
}