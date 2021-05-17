

function enviarInfo() {//a esta funcion llamamos cuando le damos al boton
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let persona = {
        nombre: nombre,
        apellido: apellido,
        edad:edad
            };
//sino lo poonemos en la funcion no se genera bajo demanada
 fetch('/persona', {//los post tienen que usar los fetch//tiene que estar dentro de la funcion porque lo queremos bajo demanda
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body:JSON.stringify(persona)//solo lee json

    })
             }



    