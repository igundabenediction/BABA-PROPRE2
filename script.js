/* =========================================================
   EL'BA PROPRETÉ
   JAVASCRIPT GLOBAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU MOBILE
    ====================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("open");

            const isOpen = mainNav.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            /* Changer l'icône */

            const icon = menuToggle.querySelector("i");

            if (icon) {

                if (isOpen) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });


        /* Fermer le menu lorsqu'on clique
           sur un lien */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            });

        });


        /* Fermer avec la touche ESC */

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {

                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            }

        });

    }


    /* =====================================================
       ANNÉE AUTOMATIQUE
    ====================================================== */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       FERMER LE MENU SI ON CLIQUE À L'EXTÉRIEUR
    ====================================================== */

    document.addEventListener("click", event => {

        if (!menuToggle || !mainNav) {
            return;
        }

        const clickedInsideMenu =
            mainNav.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });


    /* =====================================================
       ANIMATION APPARITION DES CARTES
    ====================================================== */

    const animatedElements = document.querySelectorAll(
        ".service-card, .step-card, .testimonial-card"
    );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       BOUTON WHATSAPP
    ====================================================== */

    const whatsappButtons =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );


    whatsappButtons.forEach(button => {

        button.addEventListener("click", () => {

            console.log(
                "Ouverture de WhatsApp..."
            );

        });

    });


    /* =====================================================
       ANIMATION DOUCE DES BOUTONS
    ====================================================== */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transform =
                    "translateY(-3px)";

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       SCROLL : HEADER LÉGÈREMENT PLUS COMPACT
    ====================================================== */

    const header =
        document.querySelector(".site-header");


    if (header) {

        let lastScroll = 0;

        window.addEventListener(
            "scroll",
            () => {

                const currentScroll =
                    window.scrollY;


                if (currentScroll > 80) {

                    header.classList.add(
                        "header-scrolled"
                    );

                } else {

                    header.classList.remove(
                        "header-scrolled"
                    );

                }


                lastScroll = currentScroll;

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       PROTECTION CONTRE LES LIENS # VIDES
    ====================================================== */

    const emptyLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    emptyLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

        });

    });


    /* =====================================================
       MESSAGE DE DÉMARRAGE
    ====================================================== */

    console.log(
        "EL'BA PROPRETÉ — site chargé avec succès."
    );

});