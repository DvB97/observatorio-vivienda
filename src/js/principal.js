window.addEventListener('DOMContentLoaded', event => {
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

$(document).ready(function () {
    $("#dataMonitoreo").load("./src/views/comp/cards/cards.html");
    $("#dataResumenEstudios").load("./src/views/comp/principal/estudios.html"); 
    $("#clickNoticia1").click(function () {
        window.open("./src/views/comp/otros/notMatArequipa.html")
    })
    $("#clickNoticia2").click(function () {
        window.open("./src/views/comp/otros/notMatLoreto.html")
    })
    $("#clickNoticia3").click(function () {
        window.open("./src/views/comp/otros/notMatSanMartin.html")
    })
    $("#clickNoticia4").click(function () {
        window.open("./src/views/comp/otros/notConferencia.html")
    })
    $("#clickNoticia5").click(function () {
        window.open("./src/views/comp/otros/notMatApurimac.html")
    })
    $("#clickNoticia6").click(function () {
        window.open("./src/views/comp/otros/notMatUcayali.html")
    })
});

