const burgerKnapp = document.querySelector(".burger-knapp");
const navbar = document.querySelector(".navbar");

burgerKnapp.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

const oppskriftPunkter = document.querySelectorAll(".sjekkliste li, .stegliste li");

oppskriftPunkter.forEach(function (punkt) {
    punkt.addEventListener("click", function () {
        punkt.classList.toggle("ferdig");
    });
});