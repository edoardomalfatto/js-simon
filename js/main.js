//Un alert espone 5 numeri casuali diversi.
//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto
//precedentemente.
//Una volta inseriti i 5 numeri, il 
//software dice quanti e quali numeri sono stati ricordati.


var arrayNumeriCasuali = [];
var arrayNumeriInseriti = [];

$(function() {
    //popolo un array con 5 numeri casuali che non si ripetono

    while (arrayNumeriCasuali.length < 5) {
        var generatedNumber = randomNumbers(1, 100);
        if (arrayContain(generatedNumber, arrayNumeriCasuali) == false) {
            arrayNumeriCasuali.push(generatedNumber);
        }
    };

    //scrivo nel p  i cinque numeri casuali generati

    document.getElementById("ancora").innerHTML = arrayNumeriCasuali;

    setTimeout(inserisciNumero, 3000);
});

//funzioni utilizzate

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function arrayContain(number, array) {
    var trovato = false;
    for (var i = 0; i < array.length; i++ && trovato == false) {
        if (array[i] == number) {
            trovato = true;
        }
    }
    return trovato;
};

//chiedo all'utente i cinque numeri

function inserisciNumero() {
    document.getElementById("ancora").innerHTML = ('Non puoi più guardare: Inserisci il numero giusto');
    setTimeout(function() {
        //chiedo il numero all'utente
        while (arrayNumeriInseriti.length < 5) {

            var numeroInserito = parseInt(prompt("Inserisci il numero che ricordi"));

            if (arrayContain(numeroInserito, arrayNumeriInseriti) == false) {
                arrayNumeriInseriti.push(numeroInserito);


            } else {
                alert("Hai già inserito questo numero,inseriscine un altro");
            }
        }
        //se i numeri inseriti sono nell'array dei numeri casuali allora pusho tutto nei numeri indovinati

        var arrayNumeriIndovinati = [];
        console.log(arrayNumeriInseriti);
        for (i = 0; i < arrayNumeriInseriti.length; i++) {
            if ((arrayContain(arrayNumeriInseriti[i], arrayNumeriCasuali)) == true) {
                arrayNumeriIndovinati.push(arrayNumeriInseriti[i]);
            }
        };
        console.log(arrayNumeriIndovinati);
        alert("hai indovinato " + arrayNumeriIndovinati.length + " numeri." + " I numeri sono " + arrayNumeriIndovinati);
    }, 50)

};