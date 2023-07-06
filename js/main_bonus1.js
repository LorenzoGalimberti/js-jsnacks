/*
BONUS 1:
Potete pensare anche alla grafica del vostro sito e fare le palline con dentro i numeri estratti a caso 
e informare l'utente con l'HTML quante palline ha beccato, magari evidenziando di un colore diverso le palline beccate!
*/


//--------- MAIN ------------

// chiedere all' utente di inserire le 6 cifre (da 1 a 90) e comporre un' array ( utilizzo funzione)
const L=6;
let arrayUtente=creaArray(L);
// generare l' array casuale (da 1 a 90 )
let arrayCasuale=generatereRandomArray(L,1,2);
// vedere quante palline ha beccato
for(let i=0 ; i<L;i++){
    console.log(arrayUtente[i]);
}
for(let i=0 ; i<L;i++){
    console.log(arrayCasuale[i]);
}
console.log(contaElementiUgualiArrays(arrayUtente,arrayCasuale));


//inserisco le palline nei div

for(let i=0;i<L;i++){
    let id="palla-"+(i+1);
    let value=document.getElementById(id);
    value.innerHTML=arrayCasuale[i];

}
// pensare alla parte grafica


// ----------- FUNCTIONS--------------
// funzione conteggio palline (aggiungere posizione )
function contaElementiUgualiArrays(array1,array2){
    let cont=0;

    for(let i=0 ; i<array1.length ;i++){
        if(searchInArray(array2,array1[i])){
            // trovato!!
            //1) aumento il contatore
            cont++;
            //cambio colore
            let boxId="box-"+(i+1);
            let boxIdElement=document.getElementById(boxId);
            boxIdElement.classList.remove("bg-danger");
            boxIdElement.classList.add("bg-success");
        }

    }
    return cont;
}


// Funzione crea array
function creaArray(L) {
    let i = 0;
    let array = [];
    while (i < L) {
      let numero = 0;
      while (numero < 1) {
        numero = parseInt(prompt("Inserisci il " + (i + 1) + "° numero (compreso tra 1 e 90):"));
      }
      array.push(numero);
      i++;
    }
    return array;
  }
function searchInArray(array, elementToSearch) {

    // PASSO 2: Scansiono tutta la lista degli invitati
    for (let i = 0; i < array.length; i++) {
        // Ad ogni giro se il nome inserito è identico a quello scansionato allora dico 
        // che puoi entrare
        if (elementToSearch == array[i]) {
            return true;
        }
    }

    return false;
}


/*
    Funzione che genera un array di [numberOfElments] numeri casuali nell'intervallo [min] e [max] compresi

    Parametri:
        - numbersOfElements: il numero di elementi nell'array
        - minInterval: il numero minimo random concesso
        - maxInterval: il numero massimo random concesso

    Valore restituito:
        - arrayOfNumber: array di numeri casuali

*/

function generatereRandomArray(numbersOfElements, minInterval, maxInterval) {
    // Mi preparo un array vuoto
    let arrayOfNumbers = [];

    // Creo un ciclo di numberOfElements iterazioni
    for (let i = 0; i < numbersOfElements; i++) {
        // Genero un numero casuale nell'intervallo [minInterval, maxInterval] compresi
        let randomNumber = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;

        // Inserisco il numero nell'array
        arrayOfNumbers.push(randomNumber);
    }

    // restituisco l'array costruito
    return arrayOfNumbers;
}