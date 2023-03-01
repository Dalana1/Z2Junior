let First_num = +prompt("Podaj pierwszą liczbę",'');
let Math_action= prompt("Podaj operator arytmetyczny (+, -, *, / lub %");
let Second_num = +prompt("Podaj drugą liczbę", '');




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
  



let result;

while (Math_action !== null && Math_action !== "" && First_num !== "" && Second_num !== "") {
    switch (Math_action) {

        case "+":
            result = calcSum(First_num, Second_num);
        break;

        case "-":
            result = calcDiff(First_num, Second_num);
        break;

        case "/":
            if (Second_num == 0) {
                alert ("Nie dzielimy przez 0:)");
            } else {
                result = calcQuotient(First_num, Second_num);
            }
            
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
    
    if (Math_action !== "") {
        First_num = result;
        Second_num = +prompt("Podaj kolejną liczbę", "");
    }else{
        break;
    }

}

alert("Koniec programu");