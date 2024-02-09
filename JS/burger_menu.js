document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger_menu");
    const menu = document.getElementById("menu");

    burgerMenu.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});
