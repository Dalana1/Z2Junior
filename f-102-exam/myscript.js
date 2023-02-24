function createFirstNum () {    
    const First_num = +prompt("Podaj pierwszą liczbę",'');
}

function createMathAction () {
    const Math_action= prompt("Podaj operator arytmetyczny (+, -, *, / lub %");
}

function createSecondNum () {
    const Second_num = +prompt("Podaj drugą liczbę", '');
}

// if (First_num === "" && Second_num === "" && Math_action === ""){
//     alert ("To po co marnujesz swój czas?")
// } else if (First_num !=="" && Second_num !== "" && Math_action ===""){
//     alert ("wybierz z podanych akcji: +, -, *, / lub %");
// } else if (First_num ==="" || Second_num === "" || Math_action === ""){
//     alert("Uzupełnij wszystkie dane")
// } else if (isNaN(First_num) || isNaN(Second_num)) {
//     alert("Podane dane nie są liczbami");
// } 



function calcSum (a, b) {
    createFirstNum
    createMathAction
    createSecondNum
    if (Math_action == '+'){ 
    return a+b
    }
    alert("dodawnie")
}


// function sum (a, b){
//     return a+b
// }

let result = calcSum (1,2)
alert(result)