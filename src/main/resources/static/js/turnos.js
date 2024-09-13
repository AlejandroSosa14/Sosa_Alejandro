document.getElementById("add_new_turno").onsubmit=function(e) {
          e.preventDefault();
          };

window.addEventListener('load', function () {

    createSelectPaciente();
    createSelectOdontologo();

    function createSelectPaciente(){
        //con fetch invocamos a la API de peliculas con el método GET
        //nos devolverá un JSON con una colección de peliculas
        const url = '/pacientes';
        const settings = {
            method: 'GET'
        }

        fetch(url,settings)
        .then(response => response.json())
        .then(pacientes => {
            //recorremos la colección de peliculas del JSON
            console.log(pacientes);
            var selectOption = document.getElementById("pacienteTurno");
            selectOption.innerHTML = "";

            pacientes.forEach(paciente => {
                var option = document.createElement("option");
                option.value = paciente.id;
                option.textContent = `${paciente.nombre} ${paciente.apellido}`;
                selectOption.appendChild(option)
            });

        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function createSelectOdontologo(){
            //con fetch invocamos a la API de peliculas con el método GET
            //nos devolverá un JSON con una colección de peliculas
            const url = '/odontologos';
            const settings = {
                method: 'GET'
            }

            fetch(url,settings)
            .then(response => response.json())
            .then(odontologos => {
                //recorremos la colección de peliculas del JSON
                console.log(odontologos);
                var selectOption = document.getElementById("odontologoTurno");
                selectOption.innerHTML = "";

                odontologos.forEach(odontologo => {
                    var option = document.createElement("option");
                    option.value = odontologo.id;
                    option.textContent = `${odontologo.nombre} ${odontologo.apellido}`;
                    selectOption.appendChild(option)
                });

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const formulario = document.querySelector('#add_new_turno');

        //Ante un submit del formulario se ejecutará la siguiente funcion
    formulario.addEventListener('submit', async function (event) {

        var idPaciente = document.querySelector('#pacienteTurno').value;
        var idOdontologo = document.querySelector('#odontologoTurno').value;
        var pacienteRes = await getPaciente(idPaciente);
        var odontologoRes = await getOdontologo(idOdontologo);
        var paciente = pacienteRes[0];
        var odontologo = odontologoRes[0];
        //creamos un JSON que tendrá los datos de la nueva película
        const formData = {
            fecha: document.querySelector('#fechaTurno').value,
            paciente: paciente,
            odontologo: odontologo,
        };
        //invocamos utilizando la función fetch la API peliculas con el método POST que guardará
        //la película que enviaremos en formato JSON
        const url = '/turnos';
        const settings = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(formData)
        }

        fetch(url, settings)
        .then(response => response.json())
        .then(data => {
             let successAlert = '<div class="alert alert-success alert-dismissible">' +
                                     '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                     '<strong></strong> Turno agregado </div>'
            document.querySelector('#response').innerHTML = successAlert;
            document.querySelector('#response').style.display = "block";
        })
        .catch(error => {
            let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                             '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                             '<strong> Error intente nuevamente</strong> </div>'
            document.querySelector('#response').innerHTML = errorAlert;
            document.querySelector('#response').style.display = "block";
        });
    });

        async function getPaciente(id) {
            const url = '/pacientes?id=' + id;
            const settings = {
                method: 'GET'
            }
            console.log(url);
            const res = await fetch(url,settings)
            .then(response => response.json())
            .then(data => {
                 return data;
            })
            .catch(err => console.error(err));

            return res;
        };

        async function getOdontologo(id) {
            const url = '/odontologos?id=' + id;
            const settings = {
                method: 'GET'
            }
            console.log(url);
            const res = await fetch(url,settings)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(err => console.error(err));
            return res;
        };
    });