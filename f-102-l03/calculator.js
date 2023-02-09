

const First_num = prompt("Podaj pierwszą liczbę",'');
    // firstNum = Number(str);
    
const Math_action= prompt("Podaj operator arytmetyczny (+, -, *, / lub %4");
 
const Second_num = prompt("Podaj drugą liczbę", '');

if (First_num == "" || Second_num == "" || Math_action == "")
{
    alert ("Uzupełnij wszystkie dane");
}

// if (First_num !=) wykluczyć wpisywanie liter!!

switch (Math_action)
{
    case "+" :
        alert (Number(First_num) + Number(Second_num));
    break;

    case "-":
        alert (Number(First_num) - Number(Second_num));
    break;

    case "*":
        alert (Number(First_num) * Number(Second_num));
    break

    case "/":
        alert (Number(First_num) / Number(Second_num));
    break

    case "%":
        alert (Number(First_num) % Number(Second_num));
    break

    default:
        alert("wybierz z podanych akcji: +, -, *, / lub %");
}

