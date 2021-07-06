/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova*/
// enter

//1. chiedi all’utente il cognome

var user = "";


do {
    user = prompt('Inserisci il tuo Cognome').trim().toLowerCase();
} while (console.log(user.toLowerCase()));


// var n;
// var i = 0;
// var a = Math.pow(2, 1000);

// do {
//     n = parseInt(prompt('inserisci un numero'));
// } while (isNaN(n) && n <= 0);

// var i = 1;
// while (i <= 1000) {
//     console.log(Math.pow(2 * i));
//     i++;
// }