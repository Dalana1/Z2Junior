
const First_num = +prompt("Podaj pierwszą liczbę",'');
    
const Math_action= prompt("Podaj operator arytmetyczny (+, -, *, / lub %");

const Second_num = +prompt("Podaj drugą liczbę", '');


// if (First_num === "" && Second_num === "" && Math_action === ""){
//     alert ("To po co marnujesz swój czas?")
// } else if (First_num !=="" && Second_num !== "" && Math_action ===""){
//     alert ("wybierz z podanych akcji: +, -, *, / lub %");
// } else if (First_num ==="" || Second_num === "" || Math_action === ""){
//     alert("Uzupełnij wszystkie dane")
// } else if (isNaN(First_num) || isNaN(Second_num)) {
//     alert("Podane dane nie są liczbami");
// } 



function calcSum (First_num, Second_num) {
   return First_num+Second_num
}



let result = sum(First_num, Second_num);
alert (result);

if (Math_action)