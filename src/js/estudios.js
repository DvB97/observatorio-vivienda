const data = {
    labels: ['PNVR', 'PNSR', 'PMIB', 'DGPPVU', 'PASLC', 'PIASAR', 'PNSU'],
    datasets: [{
        label: 'Total',
        data: [12, 9, 5, 3, 1, 1, 1],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)', // Rojo
            'rgba(54, 162, 235, 0.7)', // Azul
            'rgba(255, 206, 86, 0.7)', // Amarillo
            'rgba(75, 192, 192, 0.7)', // Verde
            'rgba(153, 102, 255, 0.7)', // Morado
            'rgba(255, 159, 64, 0.7)', // Naranja
            'rgba(70, 191, 189, 0.7)' // Turquesa
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(70, 191, 189, 1)'
        ],
        borderWidth: 1
    }]
};

// Opciones para el gráfico de barras
const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'top',
    },
    title: {
        display: true,
        text: 'Ejemplo de Gráfico de Barras'
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    plugins: {
        datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'start',
            offset: 10,
            formatter: (value, ctx) => {
                return value;
            }
        }
    }
};

// Obtener el elemento canvas
const ctx = document.getElementById('barChart').getContext('2d');

$("#barChart").click(function () {
    window.open("https://app.powerbi.com/view?r=eyJrIjoiZTljOGE3Y2MtZmIwOC00N2Q3LThjYWQtMzYyNDRmOTkyZGEyIiwidCI6IjhhZmMxYzZhLThjOWYtNDA5My1iMDU1LWU0MTdiMjA5M2IwYyIsImMiOjR9")
})

// Crear el gráfico de barras
const barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
    plugins: [ChartDataLabels]
});