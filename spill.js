const burgerKnapp = document.querySelector(".burger-knapp")
const navbar = document.querySelector(".navbar")

burgerKnapp.addEventListener("click", function () {
    navbar.classList.toggle("active")
})


const spillflate = document.getElementById("spillflate")
const poengTekst = document.getElementById("poeng")
const livTekst = document.getElementById("liv")
const startboks = document.getElementById("startboks")

let poeng = 0
let liv = 3
let aktiv = false
let intervall

function startSpill() {
    poeng = 0
    liv = 3
    aktiv = true

    poengTekst.innerHTML = poeng
    livTekst.innerHTML = liv
    startboks.style.display = "none"

    intervall = setInterval(lagFigur, 1000);
}

function lagFigur() {
    if (aktiv === false) {
        return;
    }

    const figur = document.createElement("img");
    figur.classList.add("spill-figur");

    const erBrod = Math.random() < 0.3;

    if (erBrod) {
        figur.src = "media/brødhue.webp";
    } else {
        figur.src = "media/bolletegning.png";
    }

    figur.style.left = Math.random() * 85 + "%";

    spillflate.appendChild(figur);

    let topp = -90;

    const fall = setInterval(function () {
        topp += 4;
        figur.style.top = topp + "px";

        if (topp > spillflate.offsetHeight) {
            figur.remove();
            clearInterval(fall);
        }
    }, 25);

    figur.onclick = function () {
        if (erBrod) {
            liv--;
            poeng -= 10;


            livTekst.innerHTML = liv;
            poengTekst.innerHTML = poeng;
        } else {
            poeng += 10;
            poengTekst.innerHTML = poeng;
        }

        figur.remove();
        clearInterval(fall);

        if (liv <= 0 || poeng >= 100) {
            sluttSpill();
        }
    };
}

function sluttSpill() {
    aktiv = false;
    clearInterval(intervall);

    const figurer = document.querySelectorAll(".spill-figur");
    figurer.forEach(function (figur) {
        figur.remove();
    });

    startboks.style.display = "flex";

    if (poeng >= 100) {
        startboks.querySelector("h2").innerHTML = "Du vant!";
        startboks.querySelector("p").innerHTML = "Du fanget nok kanelknuter.";
    } else {
        startboks.querySelector("h2").innerHTML = "Spillet er over";
        startboks.querySelector("p").innerHTML = "Du traff for mange brødhoder.";
    }

    startboks.querySelector("button").innerHTML = "Prøv igjen";
}