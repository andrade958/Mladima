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
        var vreme = document.vremeForma.setTimeout
    vreme.style.backgroundColor = "rgba(250, 250, 250, 0.990)";
    vreme.style.color = "rgba(250, 250, 250, 0.990)";
    vreme.style.border = "rgba(250, 250, 250, 0.990)";
        var cifra = document.vremeForma.cifre
    cifra.style.backgroundColor = "rgba(139, 0, 139, 0.974)";
    cifra.style.fontSize = "1.5em";
        var celo = document.querySelector(".celo")
    celo.innerHTML = "PRST NA ČELO!";
    celo.style.backgroundColor = "rgba(139, 0, 139, 0.974)";
    celo.style.fontSize = "1.4em";
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
    if (mobmeniMenu.classList.contains("open")) { 
        mobmeniToggler.click();
    }
}

function smoothScroll(event) {
    const targetID = event.currentTarget.getAttribute("href") === "#" ? "nav" : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetID).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
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

const meniLinks = document.querySelectorAll(".meni a")
for (let i = 0; i < meniLinks.length; i++) {
    meniLinks[i].addEventListener("click", meniLinkClick);
}
function meniLinkClick(event) {
    smoothScroll(event) 
}

