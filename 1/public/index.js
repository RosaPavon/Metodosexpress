


fetch("./personas").then(function(respuesta){
    return respuesta.json
}).then(function(datos){
    let parrafo=""
    for (let i = 0; i < datos.length; i++) {
        parrafo += `<tr><td>${datos[i].nombre}</td><td>${datos[i].apellido}</td><td>${datos[i].edad}</td></tr>`
    }
    document.getElementById("div").innerHTML =<table>${parrafo}</table>
})