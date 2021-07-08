/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova*/
// enter

/* inseriscilo in un array con altri cognomi*/
var listElement = document.getElementById('list');
var list_User = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];


/*creo una var vuota */
var userLastname;

do {
    /* chiedi all’utente il cognome*/
    userLastname = prompt('Inserisci il tuo Cognome');
    /*Aggiungiamo il trim() al while 
    se non c'è userLastname o quando trimmo una stringa vuota non me la fa passare---
    -attenzione che non lo stiamo trimmando ma lo stiamo solo controllando*/
} while (!userLastname || userLastname.trim() === '');


/*assegno userLastname a se stesso trimmato*/
userLastname = userLastname.trim();
console.log(userLastname);


/*inserisco alla mia Array list_User un elemento con il metodo push()*/
list_User.push(userLastname);
console.table(list_User);


/*vado a riodinare la mia lista list_User in ordine alfabetica con il metodo sort()*/
list_User.sort();
console.table(list_User);

/*stampo la posizione del cognome con il metodo indexOf()aggiungiamo +1 perch'è deve essere in posizione umana */
var position = list_User.indexOf(userLastname) + 1;
console.log('Il nuovo Cognome è in posizione ', + position);
var positionElement = document.getElementById('position');
positionElement.innerHTML = position;

/* creo una var di dove vado a costruire la nostra lista*/
var listIteams = '';
/*creo un ciclo for perché mi serve un contatore*/
for (i = 0; i < list_User.length; i++) {
    /*inserisco <li> nel nostro HTML*/
    listIteams += '<li>' + list_User[i] + '</li>';

}
listElement.innerHTML = listIteams;