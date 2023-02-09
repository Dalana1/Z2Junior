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


// let name = prompt("Czy mnie lubisz?");
// if (name == "tak") {
//     alert ("Masz szczęście:D");
//     alert ("Ja ciebie też");
// }


let firstName = "";
let lastName = "";
let nickName = "";

alert( firstName || lastName || nickName || "Anonymous");