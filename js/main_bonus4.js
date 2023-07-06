/*
BONUS 4:
Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma. 
Per palindroma di intende una parola che letta da sinistra a destra e da destra a sinistra si legge uguale. 
Trovate in internet un sacco di parole palindrome, un esempio è ANNA.


Fate un programma in cui chiedete la parola all'utente e gli comunicate dunque se la parola è palindroma o meno usando la funzione appena creata!

*/


//------------ MAIN --------------

//Chiedere all’utente di inserire una parola.(la pearola deve essere >0 se no va reinserita)
let parola=prompt("inserisci una parola ... vediamo se è palindroma !! :");

// chiamare la funzione
if (isPalindroma(parola)){
    console.log(parola + " è una parola palindroma ");
}else{
    console.log(parola + " non è una parola palindroma ");
}

//-------------FUNCTIONS --------------

// caso base --> lunghezza 0 , da non considerara
// caso 1 ) lunghezza 1 ... la parola è palindroma!!
// caso 2) maggiore di uno e pari --> ciclo fino a length/2 -1
// caso 3 ) maggiore di uno e dispari --> cilclo fino a (L-1)/2 -1


function isPalindroma(stringa){
    let L=stringa.length;

    if(L==1){
        return true;
    }else if(L%2==0 ){
        for(let i=0; i< (L/2)-1;i++){
            if(stringa[i] !=stringa[L-i-1] ){  
                return false; 
            }
        }
    }else{
        for(let i=0; i<((L-1)/2)-1;i++){
            if(stringa[i]!=stringa[L-i-1]){  
                return false; 
            }
        }
    }
    return true;
}