const botonLogout = document.getElementById('logout');

// Añade un event listener al botón
botonLogout.addEventListener('click', function() {
    // Usa Swal.fire() para mostrar la alerta
    Swal.fire({
        title: 'Estas seguro de cerrar sesión?',
        theme: 'dark', // Título de la alerta
        icon: 'warning', // Icono (success, error, warning, info, question)
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        showCancelButton: true,
        showCloseButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            // 🔥 aquí rediriges al login
            window.location.href = 'index.html'; 
        }
    });
});