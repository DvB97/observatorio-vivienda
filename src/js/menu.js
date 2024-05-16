$(document).ready(function () {
    $("#paginaPrincial").click(function () {
        $("#body").load("./src/views/body.html");
    })
})

$(document).ready(function () {
    $("#clickReseniaUno").click(function () {
        $("#body").load("./src/views/comp/1_acerca_oei/reseniaUno.html");
    })
})

$(document).ready(function () {
    $("#clickReseniaDos").click(function () {
        $("#body").load("./src/views/comp/1_acerca_oei/reseniaDos.html");
    })
})

$(document).ready(function () {
    $("#organigrama").click(function () {
        $("#body").load("./src/views/landing.html");
        setTimeout(function () {
            $("#body").load("./src/views/comp/1_acerca_oei/organigrama.html");
        }, 1000);
    })
})

$(document).ready(function () {
    $("#2_documentos").click(function () {
        $("#body").load("./src/views/landing.html");
        setTimeout(function () {
            $("#body").load("./src/views/comp/2_documentos/documentos.html");
        }, 600);
    })
})

$(document).ready(function () {
    $("#4_publicaciones_vivienda_pae2021_estudio1_pnvr2019").click(function () {
        $("#body").load("./src/views/comp/4_publicaciones/vivienda/pae2021/estudio1_pnvr2019.html");
    })
})

$(document).ready(function () {
    $("#4_publicaciones_vivienda_pae2021_estudio2_percepciones2019").click(function () {
        $("#body").load("./src/views/comp/4_publicaciones/vivienda/pae2021/estudio2_percepciones2019.html");
    })
})

$(document).ready(function () {
    $("#4_indicadores").click(function () {
        $("#body").load("./src/views/landing.html");
        setTimeout(function () {
            $("#body").load("./src/views/comp/3_indicadores/indicadores.html");
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

