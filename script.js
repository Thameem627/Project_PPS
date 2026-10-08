/* =====================================================
   DR. NOMAN MD - JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    /* Close menu after clicking a link */

    const links =
        navLinks.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


/* =====================================================
   SCROLL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        observer.observe(element);

    }
);


/* =====================================================
   APPOINTMENT FORM
===================================================== */

const appointmentForm =
    document.getElementById(
        "appointmentForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (appointmentForm) {

    appointmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            formMessage.textContent =
                "Thank you! Your appointment request has been received.";


            formMessage.style.color =
                "#16877f";


            appointmentForm.reset();

        }
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}