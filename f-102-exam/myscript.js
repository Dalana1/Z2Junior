let First_num = +prompt("Podaj pierwszą liczbę",'');


let Math_action= prompt("Podaj operator arytmetyczny (+, -, *, / lub %");



let Second_num = +prompt("Podaj drugą liczbę", '');


// if (First_num === "" && Second_num === "" && Math_action === ""){
//     alert ("To po co marnujesz swój czas?")
// } else if (First_num !=="" && Second_num !== "" && Math_action ===""){
//     alert ("wybierz z podanych akcji: +, -, *, / lub %");
// } else if (First_num ==="" || Second_num === "" || Math_action === ""){
//     alert("Uzupełnij wszystkie dane")
// } else if (isNaN(First_num) || isNaN(Second_num)) {
//     alert("Podane dane nie są liczbami");
// } 


function calcSum(First_num, Second_num) {
    return First_num + Second_num;
  }
  
  function calcDiff(First_num, Second_num) {
    return First_num - Second_num;
  }
  
  function calcQuotient(First_num, Second_num) {
    return First_num / Second_num;
  }
  
  function calcProduct(First_num, Second_num) {
    return First_num * Second_num;
  }
  


// let sum = calcSum(First_num, Second_num);
// alert (sum);

// let diff = calcDiff (First_num, Second_num);
// alert (diff);

// let quotient = calcQuotient(First_num, Second_num);
// alert (quotient);

// let product = calcProduct(First_num, Second_num);
// alert (product);


let result;

do {
    switch (Math_action) {

        case "+":
            result = calcSum(First_num, Second_num);
        break;

        case "-":
            result = calcDiff(First_num, Second_num);
        break;

        case "/":
            result = calcQuotient(First_num, Second_num);
        break;

        case "*":
            result = calcProduct(First_num, Second_num);
        break;

        default:
            alert("wybierz z podanych akcji: +, -, *, / lub %");
        break;
    }

    alert(result);

    Math_action = prompt("Podaj operator arytmetyczny (+, -, *, / lub %) lub zostaw puste żeby zakończyć");
    First_num = result;
    Second_num = +prompt("Podaj kolejną liczbę", "");

} while (Math_action !== null);

alert("Koniec programu");