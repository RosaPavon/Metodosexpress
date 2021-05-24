const { json } = require("express")

fetch("/personas")
.then( res =>  res.json()
).then(function(datos/*asi es como lo he llamado*/){//forma de hacer funciones sencillas
    let parrafo =""
for (let i = 0; i < datos.length; i++) {
    parrafo += `<tr><td>${datos.nombre}</td><td>${datos.apellido}</td><td>${datos.edad}</td></tr>`
}
    document.getElementById("div").innerHTML = <table>${parrafo}</table>
})

function enviarInfo() {//a esta funcion llamamos cuando le damos al boton
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let paquete = [//tiene qe ser un objeto para poder enviarlo a la funcion
        nombre,
        apellido,
        edad
    ];

    
fetch('/persona', {//los post tienen que usar los fetch//tiene que estar dentro de la funcion porque lo queremos bajo demanda
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body:JSON.stringify(paquete)//solo lee json
})

.then((res) => res.json())
.then(function(datos){
    document.getElementById("divnuevo").innerHTML =`<table><tr><td>${datos.nombre}</td><td>${datos.apellido}</td><td>${datos.edad}</td></tr></table>`
})
}

function modificarInfo() {//a esta funcion llamamos cuando le damos al boton
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let paquete = [//tiene qe ser un objeto para poder enviarlo a la funcion
        nombre,
        apellido,
        edad
    ];

    
fetch('/persona', {//los post tienen que usar los fetch//tiene que estar dentro de la funcion porque lo queremos bajo demanda
    method: "PUT",
    headers: {
    "Content-Type": "application/json"
    },
    body:JSON.stringify(paquete)//solo lee json
})

.then((res) => res.json())
.then(function(datos){
    document.getElementById("divnuevo").innerHTML =`<h3>${datos.mensaje}`
})
}

function elimiarInfo() {//a esta funcion llamamos cuando le damos al boton
    let nombre = document.getElementById('nombre').value;
    let paquete = [//tiene qe ser un objeto para poder enviarlo a la funcion
        nombre,
        apellido,
        edad
    ];

    
fetch('/persona', {//los post tienen que usar los fetch//tiene que estar dentro de la funcion porque lo queremos bajo demanda
    method: "PUT",
    headers: {
    "Content-Type": "application/json"
    },
    body:JSON.stringify(paquete)//solo lee json
})

.then((res) => res.json())
.then(function(datos){
    document.getElementById("divnuevo").innerHTML =`<h3>${datos.mensaje}`
})
}


