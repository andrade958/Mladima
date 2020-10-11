var ime = document.registracija.ime;
var email = document.registracija.email;
var misljenje = document.registracija.misljenje;
var tekstIme = document.getElementById("tekstIme");
var tekstEmail = document.getElementById("tekstEmail");

function potvrda() {
    var greska = false;
    if (ime.value == "" || ime.value.length < 8 || ime.value.indexOf(" ") == -1) {
        tekstIme.innerHTML = "Ovo polje je obavezno - PROVERI!";
        tekstIme.style.color = "rgba(255, 218, 205, 0.979)";
        ime.style.backgroundColor = "rgba(240, 218, 205, 0.999)";
        greska = true;
    }
    else if (ime.value.length > 30) {
        tekstIme.innerHTML = "Potpis ne sme sadržati više od 30 karaktera";
        tekstIme.style.color = "rgba(255, 218, 205, 0.979)";
        ime.style.backgroundColor = "rgba(240, 218, 205, 0.999)";
        ime.value = "";
        greska = true;
    }
    if (email.value.length < 10 || email.value.lastIndexOf(".") < 9) {
        tekstEmail.innerHTML = "Ovo polje je obavezno - PROVERI!";
        tekstEmail.style.color = "rgba(255, 218, 205, 0.979)";
        email.style.backgroundColor = "rgba(240, 218, 205, 0.999)";
        greska = true;
    } 
    if (!greska) {
        ime.value = "";
        email.value = "";
        misljenje.value = " ";
        alert("Izvini, ova opcija nije aktivna jer ovo je ispitni rad!");
        restartForme();
    }
}
function restartForme() {
    ime.style.backgroundColor = "rgba(250, 250, 250, 0.990)";
    tekstIme.innerHTML = "Unesi ime i prezime:";
    tekstIme.style.color = "rgba(250, 250, 250, 0.990)";
    email.style.backgroundColor = "rgba(250, 250, 250, 0.990)";
    tekstEmail.innerHTML = "Unesi e-mail adresu:";
    tekstEmail.style.color = "rgba(250, 250, 250, 0.990)";
    misljenje.style.backgroundColor = "rgba(250, 250, 250, 0.990)";
}
