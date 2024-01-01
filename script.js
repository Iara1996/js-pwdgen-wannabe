/*
esercizio di oggi: password generator (farlocco ed insicurissimo)
nome repo: js-pwdgen-wannabe
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
Ad esempio se scrivessi:
fabio
pacifici
blue
la password che esce fuori sará:
fabiopacificiblue23
*/

/*
Tools: 
- prompt
- const/let
- backtiks `${}`
- document.getElementById ('my_id').innerHTML
*/

// chiedi all’utente il suo nome
const user_name = prompt('Come ti chiami?');

// chiedi all'utente il suo cognome
const user_lastname = prompt('Quale è il tuo cognome?');

// chiedi all'utente il suo colore preferito
const user_favourite_color = prompt('Quale è il tuo cololre preferito?');

// salva i dati in una variabile
/* console.log(user_name, user_lastname, user_favourite_color); 
(da utilizzare solo per verifica) */
const password = user_name + user_lastname + user_favourite_color + '23';
console.log(password);

// scrivi sulla pagina nomecognomecolorepreferito23
document.getElementById('password').innerHTML = password;