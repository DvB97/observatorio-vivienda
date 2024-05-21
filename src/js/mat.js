var map = L.map('map').setView([-9.19, -75.015], 6);

L.tileLayer('', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Estilo para los departamentos
function style(feature) {
    return {
        fillColor: '#C00000',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function onEachFeature(feature, layer) {
    var centroid = layer.getBounds().getCenter();

    // Crear una etiqueta con el nombre del departamento
    /* var label = L.marker(centroid, {
        icon: L.divIcon({
            className: 'label',
            html: feature.properties.NOMBDEP,
            //iconSize: [70, 30]
        })
    }).addTo(map); */

    layer.on('click', function () {
        var departamento = feature.properties.NOMBDEP.trim().toUpperCase();
        var indice = departamentosPeru.indexOf(departamento)
        if (indice === -1) {
            Swal.fire({
                title: "MESA DE TRABAJO EN PROGRAMACIÓN",
                text: `Se viene coordinando la instalación de la MAT en el departamento de ${departamento}. Pronto tendremos novedades.`,
            }); return
        }
        $("#body").load("./src/views/landing.html");
        setTimeout(function () {
            $("#body").load(linkPath[indice]);
        }, 300);
    });
}

var geojsonURL = 'https://raw.githubusercontent.com/juaneladio/peru-geojson/master/peru_departamental_simple.geojson';

$.getJSON(geojsonURL, function (data) {
    L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);
});


var departamentosPeru = [
    'APURIMAC',
    'SAN MARTIN',
    'UCAYALI'
];

var departamentosPeruTilde = [
    'APURÍMAC',
    'SAN MARTÍN',
    'UCAYALI'
];

var linkPath = [
    './src/views/comp/mat/mat.html',
    './src/views/comp/mat/matSanMartin.html',
    './src/views/comp/mat/mat.html',
];

$(document).ready(function () {
    $(".clickDepartamento").each(function () {
        var departamento = $(this).text().trim().toUpperCase();
        if (departamentosPeruTilde.includes(departamento)) {
            $(this).addClass("btn btn-success");
        } else {
            $(this).addClass("btn-danger");
        }
    });
});

$(document).on("click", ".clickDepartamento", function () {
    var departamento = $(this).text().trim().toUpperCase();
    var indice = departamentosPeruTilde.indexOf(departamento)
    if (indice === -1) {
        Swal.fire({
            title: "MESA DE TRABAJO EN PROGRAMACIÓN",
            text: `Se viene coordinando la instalación de la MAT en el departamento de ${departamento}. Pronto tendremos novedades.`,
        }); return
    }
    $("#body").load("./src/views/landing.html");
    setTimeout(function () {
        $("#body").load(linkPath[indice]);
    }, 300);
});