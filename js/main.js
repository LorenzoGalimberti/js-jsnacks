







// -------------- CORPO ESERCIZIO--------------------
//L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N), e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().
let numeroElementi=0
while(numeroElementi==0){
    numeroElementi=parseInt(prompt("inserisci il numero di elementi"));
}
console.log(numeroElementi);
let array=creaArray(numeroElementi);

let somma=sommaNumeri(array);
let media=mediaAritmetica(array);


console.log(somma);
console.log(media);
// -------------- FUNZIONI --------------------

// crea array

function creaArray(N){
    let array=[];
    for(let i=0;i<N;i++){
        let numeroProvvisorio=parseInt(prompt("Inserisci il numero " + (i + 1) + ":"));
        array.push(numeroProvvisorio);
    }

    return array;
}


/*

Milestone 1:
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array, restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato. L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N), e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().
*/


function sommaNumeri(array){
    let somma=0;
    
    for(let i=0;i<array.length;i++){
        somma= somma+array[i];
    }

    return somma;
}


/*

Milestone 2:
Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri e restituisca la media aritmetica dei numeri contenuti nell'array.

*/

function mediaAritmetica(array){
    let mediaAritmetica=sommaNumeri(array)/array.length;
    if(array.length !=0){
        return mediaAritmetica;
    }else{
        return "divisione per 0 ( forma di indecisione)";
    }

    
}