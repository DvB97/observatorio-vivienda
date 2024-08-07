var map = L.map('map').setView([-10.450622241808368, -74.63887799107934], 5.5);

L.tileLayer('', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Estilo para los departamentos
function style(feature) {
    var departamento = feature.properties.NOMBDEP.trim().toUpperCase();
    var fillColor = departamentosPeru.includes(departamento) ? '#FF8181' : '#D8D8D8';

    return {
        fillColor: fillColor,
        weight: 2,
        opacity: 4,
        color: 'white',
        fillOpacity: 1
    };
}

function onEachFeature(feature, layer) {
    var centroid = layer.getBounds().getCenter();

    // Crear una etiqueta con el nombre del departamento
    var label = L.marker(centroid, {
        icon: L.divIcon({
            className: 'label',
            html: feature.properties.NOMBDEP,
            iconSize: [70, 30],
        })
    }).addTo(map);

    layer.on('click', function () {
        var departamento = feature.properties.NOMBDEP.trim().toUpperCase();
        var indice = departamentosPeru.indexOf(departamento)
        if (indice === -1) {
            Swal.fire({
                title: "MESA DE TRABAJO EN PROGRAMACIÓN",
                text: `Se viene coordinando la instalación de la MAT en el departamento de ${departamento}. Pronto tendremos novedades.`,
            }); return
        }
        window.open(linkPath[indice]);
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
    'UCAYALI',
    'LORETO',
    'AREQUIPA',
];

var departamentosPeruTilde = [
    'APURÍMAC',
    'SAN MARTÍN',
    'UCAYALI',
    'LORETO',
    'AREQUIPA',
];

var linksNoticias = [
    './src/views/comp/otros/notMatApurimac.html',
    './src/views/comp/otros/notMatSanMartin.html',
    './src/views/comp/otros/notMatUcayali.html',
    './src/views/comp/otros/notMatLoreto.html',
    './src/views/comp/otros/notMatArequipa.html',
];

var linkPath = [
    'https://app.powerbi.com/view?r=eyJrIjoiMjNlZDYxZjMtOGE3Zi00NzUwLTg2YzktNGQ0ZTgwMGI0ODQ3IiwidCI6IjhhZmMxYzZhLThjOWYtNDA5My1iMDU1LWU0MTdiMjA5M2IwYyIsImMiOjR9',
    'https://app.powerbi.com/view?r=eyJrIjoiYzg0YjA4MTktYTlkMC00NDlmLTkyOTYtYWEwNWIzZmZjZDBkIiwidCI6IjhhZmMxYzZhLThjOWYtNDA5My1iMDU1LWU0MTdiMjA5M2IwYyIsImMiOjR9',
    'https://app.powerbi.com/view?r=eyJrIjoiYjk4OGQ1MWUtMjk3ZC00NWM3LWJmMTAtNzczODcxZTNkMGEwIiwidCI6IjhhZmMxYzZhLThjOWYtNDA5My1iMDU1LWU0MTdiMjA5M2IwYyIsImMiOjR9',
    'https://app.powerbi.com/view?r=eyJrIjoiYWVkMDE5OWMtNGUxOC00ZDE3LWE3YjUtYTUwZDliY2Y0ZDg5IiwidCI6IjhhZmMxYzZhLThjOWYtNDA5My1iMDU1LWU0MTdiMjA5M2IwYyIsImMiOjR9',
    'https://app.powerbi.com/view?r=eyJrIjoiMGRlMTg4OGEtN2RiOC00ZDE1LWI5ODMtM2VjYjFlODJjZmJhIiwidCI6IjhhZmMxYzZhLThjOWYtNDA5My1iMDU1LWU0MTdiMjA5M2IwYyIsImMiOjR9',
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
    window.open(linkPath[indice])
});

document.getElementById('selectDepartamento').addEventListener('change', function () {
    const selectedValue = this.value;
    if (selectedValue === 'RESET') {
        map.setView([-10.450622241808368, -74.63887799107934], 5.5);
        return
    } $.getJSON(geojsonURL, function (data) {
        data.features.forEach(function (feature) {
            if (feature.properties.NOMBDEP.trim().toUpperCase() === selectedValue) {
                var bounds = L.geoJson(feature).getBounds();
                map.fitBounds(bounds);
                var indice = departamentosPeru.indexOf(selectedValue)
                if (indice !== -1)
                    setTimeout(() => {
                        window.open(linksNoticias[indice]);
                    }, 800);
            }
        });
    });
});

