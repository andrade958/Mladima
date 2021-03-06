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

const galerijaSlike = document.querySelectorAll('.galerija-slika');
        galerijaSlike.forEach(galerijaSlika => {
        galerijaSlika.addEventListener('mouseover', () => {
            galerijaSlika.childNodes[1].classList.add('slike-zatamljene');
        });
        galerijaSlika.addEventListener('mouseout', () => {
            galerijaSlika.childNodes[1].classList.remove('slike-zatamljene');
            });
});

const mobmeniToggler = document.querySelector(".mobmeni-toggler");
const mobmeniMenu = document.querySelector(".mobmeni ul");
const mobmeniLinks = document.querySelectorAll(".mobmeni a");
mobmeniToggler.addEventListener("click", mobmeniTogglerClick);

function mobmeniTogglerClick() {
    mobmeniToggler.classList.toggle("open-mobmeni-toggler");
    mobmeniMenu.classList.toggle("open");
}
for (let i = 0; i < mobmeniLinks.length; i++) {
    mobmeniLinks[i].addEventListener("click", mobmeniLinkClick);
}
function mobmeniLinkClick(event) {
    smoothScroll(event)
    // if (mobmeniMenu.classList.contains("open")) { 
        mobmeniToggler.click();
    // }
}

function smoothScroll(event) {
    const targetID = event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetID).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 5000;
    let start = null;
    window.requestAnimationFrame(step);

function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, saUsporavanjem(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
    function saUsporavanjem(t, b, c, d) {
        t /= d;
        return -c * t*(t-2) + b;
    }
}

const meniLinks = document.querySelectorAll(".meni a")
for (let i = 0; i < meniLinks.length; i++) {
    meniLinks[i].addEventListener("click", smoothScroll);
}
