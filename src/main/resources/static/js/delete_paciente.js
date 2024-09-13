
// Escuchar eventos click en los botones de editar
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('eliminarPaciente')) {
        // Obtener el ID del paciente desde el atributo data-id
        var pacienteID = event.target.getAttribute('data-id');
        const data = {
            id: pacienteID,
        }

        const url = '/pacientes/eliminarPaciente?id=' + pacienteID;
        const settings = {
            method: 'GET',
        }

        fetch(url,settings)
        .then(response => {
            console.log(response);
            if(response.status == 200){
                window.location.href = "/pacienteList.html";
            } else {
                console.error(response);
                //Si hay algun error se muestra un mensaje diciendo que la pelicula
                //no se pudo guardar y se intente nuevamente
                let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                                 '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                 '<strong> Error eliminando el paciente, intente de nuevo</strong> </div>'
                document.querySelector('#responseLista').innerHTML = errorAlert;
                document.querySelector('#responseLista').style.display = "block";
            }
        })
        .catch(error => {
            console.error(error);
            //Si hay algun error se muestra un mensaje diciendo que la pelicula
            //no se pudo guardar y se intente nuevamente
            let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                             '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                             '<strong> Error eliminando el paciente, intente de nuevo</strong> </div>'
            document.querySelector('#responseLista').innerHTML = errorAlert;
            document.querySelector('#responseLista').style.display = "block";
        })
    };
});