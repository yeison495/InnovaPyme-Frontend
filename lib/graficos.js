// Configuración común para gráficos de barras

const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
    },
    scales: {
        y: { display: false },
        x: {
            ticks: { color: '#1E2A3B', font: { size: 10 } },
            grid: { display: false }
        }
    }
};

// Almacenar referencias a todos los gráficos
const charts = {};

// Gráfico de Ventas
charts.ventas = new Chart(document.getElementById('chartVentas'), {
    type: 'bar',
    data: {
        labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
        datasets: [{
            data: [1500000, 1800000, 1600000, 1600000],
            backgroundColor: '#F5B301'
        }]
    },
    options: barChartOptions
});

// Gráfico de Gastos
charts.gastos = new Chart(document.getElementById('chartGastos'), {
    type: 'bar',
    data: {
        labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
        datasets: [{
            data: [400000, 350000, 400000, 350000],
            backgroundColor: '#F5B301'
        }]
    },
    options: barChartOptions
});

// Gráfico de Saldo
charts.saldo = new Chart(document.getElementById('chartSaldo'), {
    type: 'bar',
    data: {
        labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
        datasets: [{
            data: [1100000, 1450000, 1200000, 1250000],
            backgroundColor: '#F5B301'
        }]
    },
    options: barChartOptions
});

// Gráfico de Productos (Pie)
charts.productos = new Chart(document.getElementById('chartProductos'), {
    type: 'pie',
    data: {
        labels: ['Producto 1', 'Producto 2', 'Producto 3'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: ['#1E2A3B', '#F5B301', '#ffffff'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
});

// Gráfico de Usuarios (Pie)
charts.usuarios = new Chart(document.getElementById('chartUsuarios'), {
    type: 'pie',
    data: {
        labels: ['Usuario 1', 'Usuario 2', 'Usuario 3'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: ['#1E2A3B', '#F5B301', '#ffffff'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
});

// Gráfico de Stock
charts.stock = new Chart(document.getElementById('chartStock'), {
    type: 'bar',
    data: {
        labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
        datasets: [{
            data: [145, 150, 140, 145],
            backgroundColor: '#F5B301'
        }]
    },
    options: barChartOptions
});

// Función para redimensionar todos los gráficos
function resizeCharts() {
    // Forzar un reflow del layout
    void document.body.offsetHeight;
    
    Object.values(charts).forEach(chart => {
        if (chart) {
            // Destruir y recrear el gráfico si es necesario
            if (chart.canvas && chart.canvas.parentElement) {
                const canvas = chart.canvas;
                const ctx = canvas.getContext('2d');
                
                // Actualizar el tamaño del canvas
                canvas.style.width = '100%';
                canvas.style.height = 'auto';
                
                // Llamar a resize de Chart.js
                if (typeof chart.resize === 'function') {
                    chart.resize();
                }
                
                // Forzar actualización
                chart.update('none');
            }
        }
    });
}