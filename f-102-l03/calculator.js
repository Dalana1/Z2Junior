

const First_num = prompt("Podaj pierwszą liczbę",'');
    
const Math_action= prompt("Podaj operator arytmetyczny (+, -, *, / lub %");

const Second_num = prompt("Podaj drugą liczbę", '');



if (First_num === "" && Second_num === "" && Math_action === ""){
        alert ("To po co marnujesz swój czas?")
    } else if (First_num !=="" && Second_num !== "" && Math_action ===""){
        alert ("wybierz z podanych akcji: +, -, *, / lub %");
    } else if (First_num ==="" || Second_num === "" || Math_action === ""){
        alert("Uzupełnij wszystkie dane")
    } else if (isNaN(First_num) || isNaN(Second_num)) {
        alert("Podane dane nie są liczbami");
    } 


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
    break;

    case "/":
        if (Number(Second_num == 0)) {
            alert ("Nie dzielimy przez 0:)");
        } else {
            alert (Number(First_num) / Number(Second_num));
        }
    break;

    case "%":
        if (Number(Second_num == 0)) {
            alert ("Nie dzielimy przez 0:)")
        } else {
            alert (Number(First_num) % Number(Second_num));
        }
    break;

    default:
        alert("wybierz z podanych akcji: +, -, *, / lub %");
}

