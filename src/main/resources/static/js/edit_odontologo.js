document.getElementById("edit_odontologo").onsubmit=function(e) {
          e.preventDefault();
          };

window.addEventListener('load', function () {

    var parametros = new URLSearchParams(window.location.search);
    var id = parametros.get("id");

    setDataToForm();

    function setDataToForm(){
        console.log(id);
        //con fetch invocamos a la API de peliculas con el método GET
        const url = '/odontologos?id=' + id;
        const settings = {
          method: 'GET'
        }

        fetch(url,settings)
              .then(response => response.json())
              .then(data => {
                var odontologo = data[0];
                var inputNombre = document.getElementById("editNombre");
                inputNombre.value = odontologo.nombre;
                var inputApellido = document.getElementById("editApellido");
                inputApellido.value = odontologo.apellido;
                var inputMatricula = document.getElementById("editMatricula");
                inputMatricula.value = odontologo.matricula;
              });
    };

    //Al cargar la pagina buscamos y obtenemos el formulario donde estarán
        //los datos que el usuario cargará de la nueva pelicula
        const formulario = document.querySelector('#edit_odontologo');

        //Ante un submit del formulario se ejecutará la siguiente funcion
        formulario.addEventListener('submit', function (event) {
            console.log(id);
           //creamos un JSON que tendrá los datos de la nueva película
            const formData = {
                id: id,
                nombre: document.querySelector('#editNombre').value,
                apellido: document.querySelector('#editApellido').value,
                matricula: document.querySelector('#editMatricula').value,

            };
            //invocamos utilizando la función fetch la API peliculas con el método POST que guardará
            //la película que enviaremos en formato JSON
            const url = '/odontologos/actualizaOdontologo';
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
                        window.location.href = "/odontologoList.html";
                    else
                        console.error(response);
                })
                .catch(error => {
                        console.error(error);
                        //Si hay algun error se muestra un mensaje diciendo que la pelicula
                        //no se pudo guardar y se intente nuevamente
                        let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                                         '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                         '<strong> Error actualizando el odontologo, intente de nuevo</strong> </div>'

                          document.querySelector('#responseEdit').innerHTML = errorAlert;
                          document.querySelector('#responseEdit').style.display = "block";
                         //se dejan todos los campos vacíos por si se quiere ingresar otra pelicula
                         setDataToForm();})
        });
});