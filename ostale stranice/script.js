function Vreme() {{
        time = new Date();
            cas = time.getHours();
            minuti = time.getMinutes();
            sekunde = time.getSeconds();
            temp = "" + ((cas > 0) ? cas - 0 : cas);
            temp += ((minuti < 10) ? ":0" : ":") + minuti;
            temp += ((sekunde < 10) ? ":0" : ":") + sekunde;
            document.vremeForma.cifre.value = temp;
            setTimeout("Vreme()", 1000);
        }
    document.getElementById("savet").style.backgroundColor = "rgba(250, 250, 250, 0.990)";
    document.getElementById("savet").style.color = "rgba(139, 0, 139, 0.974)";
    document.getElementById("klikmi").style.backgroundColor = "rgba(250, 250, 250, 0.990)";
    document.getElementById("klikmi").style.color = "rgba(250, 250, 250, 0.990)";
    document.getElementById("klikmi").style.border = "rgba(250, 250, 250, 0.990)";
    document.getElementById("vreme").style.backgroundColor = "rgba(139, 0, 139, 0.974)";
    document.getElementsByClassName("celo")[0].innerHTML = "PRST NA ČELO!";
    document.getElementsByClassName("celo")[0].style.backgroundColor = "rgba(139, 0, 139, 0.974)";

    }


const galerijaSlike = document.querySelectorAll('.galerija-slika')
        galerijaSlike.forEach(galerijaSlika => {
    galerijaSlika.addEventListener('mouseover', () => {
        galerijaSlika.childNodes[1].classList.add('slike-zatamljene');
    })
             galerijaSlika.addEventListener('mouseout', () => {
    galerijaSlika.childNodes[1].classList.remove('slike-zatamljene');
            })
});

var ime = document.getElementById("ime");
var email = document.getElementById("email");
var misljenje = document.getElementById("misljenje");

var tekstIme = document.getElementById("tekstIme");
var tekstEmail = document.getElementById("tekstEmail");

function potvrda() {

    var greska = false;

    if (ime.value == "") {
        tekstIme.innerHTML = "Ime je obavezno za unos";
        tekstIme.style.color = "rgba(255, 218, 205, 0.979)";
        ime.style.backgroundColor = "rgba(240, 218, 205, 0.999)";
        greska = true;
    } else if (ime.value.length > 15) {
        tekstIme.innerHTML = "Potpis ne sme sadrzati vise od 15 karaktera";
        tekstIme.style.color = "rgba(255, 218, 205, 0.979)";
        ime.style.backgroundColor = "rgba(240, 218, 205, 0.999)";
        ime.value = "";
        greska = true;
    }

    if (email.value == "") {
        tekstEmail.innerHTML = "Email je obavezan za unos";
        tekstEmail.style.color = "rgba(255, 218, 205, 0.979)";
        email.style.backgroundColor = "rgba(240, 218, 205, 0.999)";
        greska = true;
    } else if (!proveraEmaila(email.value)) {
        tekstEmail.innerHTML = "Email adresa nije pravilno uneta";
        tekstEmail.style.color = "rgba(255, 218, 205, 0.979)";
        email.style.backgroundColor = "rgba(240, 218, 205, 0.999)";
        greska = true;
    }

    if (!greska) {
        ime.value = "";
        email.value = "";
        misljenje.value = " ";
        alert("Izvini, ova opcija nije aktivna jer je ovo ispitni rad");
        restartForme();
    }
}

function proveraEmaila(tekst) {

    var postoji = false;

    for (let i = 0; i < tekst.length; i++) {
        if (tekst[i] == '@') {
            postoji = true;
        }
    }
    return postoji;
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

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const mobmeniToggler = document.querySelector(".mobmeni-toggler");
const mobmeniMenu = document.querySelector(".mobmeni ul");
const mobmeniLinks = document.querySelectorAll(".mobmeni a")

mobmeniToggler.addEventListener("click", mobmeniTogglerClick);

function mobmeniTogglerClick() {
    mobmeniToggler.classList.toggle("open-mobmeni-toggler");
    mobmeniMenu.classList.toggle("open");
}

for (let i = 0; i < mobmeniLinks.length; i++) {
    mobmeniLinks[i].addEventListener("click", mobmeniLinkClick);
}

function mobmeniLinkClick(event) {
    smoothScroll(event) //call the smoothScroll
    if (mobmeniMenu.classList.contains("open")) { //close navbarMenu in smaller screens
        mobmeniToggler.click();
    }
}
function smoothScroll(event) {
    const targetID = event.currentTarget.getAttribute("href") === "#" ? "nav" : event.currentTarget.getAttribute("href");;
    const targetPosition = document.querySelector(targetID).offsetTop
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 4000;
    let start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, linear(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
    function linear(t, b, c, d) {
        return c * t / d + b;
    };
}





