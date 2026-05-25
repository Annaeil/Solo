    const burgerKnapp = document.querySelector(".burger-knapp");
    const navbar = document.querySelector(".navbar");

    burgerKnapp.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });