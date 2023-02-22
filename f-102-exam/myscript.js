
// let i = 5;
// do {
//     alert(i)
//     i--;
// }while (i > 0);

// for (let i = 0; i< 3; i++){
//     alert(i);
// }


// let num;
// do {
//     num=prompt("enter a numner grater than 100", 0);
// } while (num <= 100 && num);


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}