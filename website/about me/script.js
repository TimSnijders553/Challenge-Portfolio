var bezoeker = {
    naam : prompt("Wat is je naam?"),
    leeftijd : prompt("Wat is je leeftijd?"),
};
if (bezoeker.leeftijd <= 18) {
    document.body.style.backgroundColor = "red";
} else {
    document.body.style.backgroundColor = "green";
}


      document.querySelector("#headtext").innerHTML = "Welkom " + (bezoeker.naam);