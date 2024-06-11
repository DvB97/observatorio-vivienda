$("#paginaPrincial").click(function () {
    $("#body").load("./src/views/landing.html");
    setTimeout(function () {
        $("#body").load("./src/views/body.html");
    }, 200);
})

$(document).ready(function () {
    $("#accesoAAcercaDe").click(function () {
        $("#body").load("./src/views/landing.html");
        setTimeout(function () {
            $("#body").load("./src/views/comp/acerca_de/acercaDe.html");
        }, 600);
    })
})

$(document).ready(function () {
    $("#clickMesasDeAsistenciaTecnica").click(function () {
        $("#body").load("./src/views/landing.html");
        setTimeout(function () {
            $("#body").load("./src/views/comp/mat/mat.html");
        }, 600);
    })
})

$(document).ready(function () {
    $("#oei_uno").click(function () {
        $("#body").load("./src/views/landing.html");
        setTimeout(function () {
            $("#body").load("./src/views/comp/oei/uno/uno.html");
        }, 600);
    })
})

$(document).ready(function () {
    $("#oei_dos").click(function () {
        $("#body").load("./src/views/landing.html");
        setTimeout(function () {
            $("#body").load("./src/views/comp/oei/dos/dos.html");
        }, 600);
    })
})
$(document).ready(function () {
    $("#accesoAindocadores").click(function () {
        window.open('https://app.powerbi.com/view?r=eyJrIjoiM2ExNmI0YjgtN2Y4OC00ZWZhLTk1ZjgtYjJlZGFkZDZhYWMxIiwidCI6IjhhZmMxYzZhLThjOWYtNDA5My1iMDU1LWU0MTdiMjA5M2IwYyIsImMiOjR9')
    })
})


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-menu").forEach(function (element) {
        element.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    });
    if (window.innerWidth < 992) {
        document
            .querySelectorAll(".navbar .dropdown")
            .forEach(function (everydropdown) {
                everydropdown.addEventListener("hidden.bs.dropdown", function () {
                    this.querySelectorAll(".submenu").forEach(function (
                        everysubmenu
                    ) {
                        everysubmenu.style.display = "none";
                    });
                });
            });

        document
            .querySelectorAll(".dropdown-menu a")
            .forEach(function (element) {
                element.addEventListener("click", function (e) {
                    let nextEl = this.nextElementSibling;
                    if (nextEl && nextEl.classList.contains("submenu")) {
                        e.preventDefault();
                        if (nextEl.style.display == "block") {
                            nextEl.style.display = "none";
                        } else {
                            nextEl.style.display = "block";
                        }
                    }
                });
            });
    }
});

