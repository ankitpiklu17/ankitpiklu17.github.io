
// ============================
// MOBILE NAVIGATION
// ============================

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {

    navToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });

    // Close menu after clicking a link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });

}


// ============================
// AUTOMATIC COPYRIGHT YEAR
// ============================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

