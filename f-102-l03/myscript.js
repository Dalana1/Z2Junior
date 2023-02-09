// let name = prompt("Czy mnie lubisz?");
// if (name == "tak") {
//     alert ("Masz szczęście:D");
//     alert ("Ja ciebie też");
// }

let question1 = confirm("Czy chcesz zostać junior frontend developerem?");
    if (question1 == true) {
        alert("Ucz się regularnie 🎓");
        let question2 = prompt ("Ile godzin tygodniowo poświęcasz na naukę?", "");
            if (question2 == 0) {
                alert("Oby to był tylko stan przejściowy😊");
            } else if (question2 <= 5) {
                alert("Powoli do przodu 🧑‍🚀");
            }else {
                alert ("Wow! Lecisz jak burza! 🔥");
            }
    } else if (question1 == false) {
        alert("To co tutaj robisz?")
    }
