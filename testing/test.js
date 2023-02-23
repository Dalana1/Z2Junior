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




let i = 5;
do {
    alert(i)
    i--;
}while (i > 0);

for (let i = 0; i< 3; i++){
    alert(i);
}





let num;
do { 
    num=prompt("enter a numner grater than 100", 0);
} while (num <= 100 && num);





let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}




if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }





switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}




function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
alert( 'Access granted' );
} else {
alert( 'Access denied' );
}


// potęgowanie
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }




