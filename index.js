document.addEventListener("DOMContentLoaded", function () {
    const navToggler = document.getElementById("nav-toggler");
    const navList = document.querySelector(".nav__list");
    const navItems = document.querySelectorAll(".nav__list a");

    navToggler.addEventListener("change", function () {
        if (navToggler.checked) {
            navList.style.maxHeight = navList.scrollHeight + "px";
        } else {
            navList.style.maxHeight = "0";
        }
    });

    // Close navigation when clicking on a navigation item
    navItems.forEach(function (navItem) {
        navItem.addEventListener("click", function () {
            navList.style.maxHeight = "0";
            navToggler.checked = false;
        });
    });

    // Close navigation when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!navList.contains(event.target) && event.target !== navToggler) {
            navList.style.maxHeight = "0";
            navToggler.checked = false;
        }
    });
});