// Escuchar eventos click en los botones de editar
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('editarPaciente')) {
        // Obtener el ID del odontólogo desde el atributo data-id
        const odontologoId = event.target.getAttribute('data-id');

        // Redireccionar a la vista de edición con el ID del odontólogo
        // Puedes pasar el ID como parámetro en la URL
        window.location.href = '/pacienteEdit.html?id=' + odontologoId;
    }
});
