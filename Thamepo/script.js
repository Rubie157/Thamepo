/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1000);

});


/* =========================
   NAVBAR
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking link */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================
   TRAILER MODAL
========================= */

const trailerButton = document.getElementById("trailerButton");
const playButton = document.getElementById("playButton");

const trailerModal = document.getElementById("trailerModal");
const modalClose = document.getElementById("modalClose");

const trailerVideo = document.getElementById("trailerVideo");


function openTrailer() {

    trailerModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeTrailer() {

    trailerModal.classList.remove("active");

    document.body.style.overflow = "auto";

    trailerVideo.pause();

}


trailerButton.addEventListener("click", openTrailer);

playButton.addEventListener("click", openTrailer);

modalClose.addEventListener("click", closeTrailer);


/* Close when clicking outside video */

trailerModal.addEventListener("click", (event) => {

    if (event.target === trailerModal) {

        closeTrailer();

    }

});


/* Close with Escape key */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeTrailer();

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================
   HEARTBEAT TITLE EFFECT
========================= */

let lastTitleChange = 0;

setInterval(() => {

    const now = Date.now();

    if (now - lastTitleChange < 1000) return;

    lastTitleChange = now;

    document.title = "♥ THAMEPO — The Heart That Skips a Beat";

    setTimeout(() => {

        document.title = "THAMEPO — The Heart That Skips a Beat";

    }, 500);

}, 4000);
