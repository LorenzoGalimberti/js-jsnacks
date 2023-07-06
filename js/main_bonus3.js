/*
BONUS 3:
Creare una funzione che dato un array di stringhe o di numeri mi restituisca il numero di volte che un elemento è presente dentro quell'array. 
Ad esempio se ho un array con dei numeri mi dica quante volte il numero 2 compare dentro l'array.
*/

// MAIN 

// chiedere all' utente di scegliere fra array o numeri
let scelta = -1;
while((scelta!=0) && (scelta!=1)){
    scelta=parseInt(prompt("scegli o un array di numeri (inserisci 1) o un array di stringhe (inserisci 0): "));
}

// chioedere all' utente la lunghezza dell' array
let N=parseInt(prompt("inserisci la lunghezza dell' array"));
// chiedere l' utente di comporre uno dei due array in base alla scelta
let array=[];
if(scelta==1){
    array=creaArrayInteri(N);
    elemento=parseInt(prompt("inserisci il numero da cercare"));
}else{
    array=creaArrayStringhe(N);
    elemento=prompt("inserisci la stringa da cercare");
}
//chiamare la funzione
let numeroElementi=numeroElementoInArray(array,elemento);
// stampare il risultato

console.log(numeroElementi);

//----------FUNCTIONS--------
function creaArrayInteri(N){
    let array=[];
    for(let i=0;i<N;i++){
        let numeroProvvisorio=parseInt(prompt("Inserisci il numero " + (i + 1) + ":"));
        array.push(numeroProvvisorio);
    }

    return array;
}

function creaArrayStringhe(N){
    let array=[];
    for(let i=0;i<N;i++){
        let numeroProvvisorio=prompt("Inserisci la" + (i + 1) + "° stringa:");
        array.push(numeroProvvisorio);
    }

    return array;
}

function numeroElementoInArray(array,elemento){
    let cont=0;
    
    for(let i=0;i<array.length;i++){
        if(array[i]==elemento){
            cont++;
        }
    }
    return cont;
}