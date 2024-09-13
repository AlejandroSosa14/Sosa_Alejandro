document.getElementById("edit_paciente").onsubmit=function(e) {
          e.preventDefault();
          };

window.addEventListener('load', function () {

    var parametros = new URLSearchParams(window.location.search);
    var id = parametros.get("id");

    setDataToForm();

    function setDataToForm(){
        console.log(id);
        //con fetch invocamos a la API de peliculas con el método GET
        const url = '/pacientes?id=' + id;
        const settings = {
          method: 'GET'
        }

        fetch(url,settings)
              .then(response => response.json())
              .then(data => {
                var paciente = data[0];
                var inputNombre = document.getElementById("editNombre");
                inputNombre.value = paciente.nombre;
                var inputApellido = document.getElementById("editApellido");
                inputApellido.value = paciente.apellido;
                var inputCalle = document.getElementById("editCalle");
                inputCalle.value = paciente.domicilio.calle;
                var inputNumero = document.getElementById("editNumero");
                inputNumero.value = paciente.domicilio.numero;
                var inputLocalidad = document.getElementById("editLocalidad");
                inputLocalidad.value = paciente.domicilio.localidad;
                var inputProvincia = document.getElementById("editProvincia");
                inputProvincia.value = paciente.domicilio.provincia;
                var inputMatricula = document.getElementById("editDni");
                inputMatricula.value = paciente.dni;
                var inputfecha = document.getElementById("editFecha");
                inputfecha.value = paciente.fechaAlta;
              });
    };

    //Al cargar la pagina buscamos y obtenemos el formulario donde estarán
        //los datos que el usuario cargará de la nueva pelicula
        const formulario = document.querySelector('#edit_paciente');

        //Ante un submit del formulario se ejecutará la siguiente funcion
        formulario.addEventListener('submit', function (event) {
            console.log(id);
           //creamos un JSON que tendrá los datos de la nueva película
            const formData = {
                id: id,
                nombre: document.querySelector('#editNombre').value,
                apellido: document.querySelector('#editApellido').value,
                dni: document.querySelector('#editDni').value,
                fechaAlta: document.querySelector('#editFecha').value,
                domicilio: {
                     calle: document.querySelector('#editCalle').value,
                     numero: document.querySelector('#editNumero').value,
                     localidad: document.querySelector('#editLocalidad').value,
                     provincia: document.querySelector('#editProvincia').value,
                }
            };
            //invocamos utilizando la función fetch la API peliculas con el método POST que guardará
            //la película que enviaremos en formato JSON
            const url = '/pacientes/actualizaPaciente';
            const settings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }

            fetch(url, settings)
                .then(response => {
                    console.log(response);
                    if(response.status == 200)
                        window.location.href = "/pacienteList.html";
                    else
                        console.error(response);
                })
                .catch(error => {
                        console.error(error);
                        //Si hay algun error se muestra un mensaje diciendo que la pelicula
                        //no se pudo guardar y se intente nuevamente
                        let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                                         '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                         '<strong> Error actualizando el paciente, intente de nuevo</strong> </div>'

                          document.querySelector('#responseEdit').innerHTML = errorAlert;
                          document.querySelector('#responseEdit').style.display = "block";
                         //se dejan todos los campos vacíos por si se quiere ingresar otra pelicula
                         setDataToForm();})
        });
});