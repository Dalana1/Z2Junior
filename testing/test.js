let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
    alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
    } else {
    alert( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}


 if (confirm("Podejmij decyzję!")) {
   alert("Wybrano opcję: OK");
   } else {
   alert("Wybrano opcję: Anuluj");
 } 

 var imie = prompt("Podaj imię", "Adam");
 document.write("Twoje imię: "+imie); 


let firstName = "";
let lastName = "";
let nickName = "";

alert( firstName || lastName || nickName || "Anonymous");