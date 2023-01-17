let wannaBeDev = confirm("Czy chcesz zostać junior frontend developerem?")
if (wannaBeDev === false) {
    alert("To co tutaj robisz? 🤔")
}
else {
    alert("Ucz się regularnie 🚀")
    let hoursForStudy = prompt("Ile godzin tygodniowo poświęcasz na naukę? ")
    if (hoursForStudy >= 8) {
        alert("Wow, idziesz jak burza! 🌋")
    }
    else if (hoursForStudy < 8 && hoursForStudy > 3) {
        alert("Powoli, ale do przodu 🦾 ")
    }
    else {
        alert("Oby to był tylko stan przejściowy 😕")
    }
}
