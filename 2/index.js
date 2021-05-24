
const express=require("express");
const app = express();
const persona=requiere("./personas")
app.use(express.urlencoded({extended: false}))
app.get("./personas", function(req, res){
  res.send(personas)
})

/*app.post('/persona', function(req, res) {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let edad = req.body.edad;
    let personajillo= nombre + apellido + edad

    res.send(personajillo.push(persona))
    });*/
 

  app.post("/persona", function (req, res) {

  let nombre = req.body.nombre;

  let apellido = req.body.apellido;

  let edad = req.body.edad;

  let personajillo = { nombre: nombre, apellido: apellido, edad: edad };// asi es como llamamamos 


  personas.push(personajillo);


  res.send("<h1>Persona añadida correctamente<h1/>");//dar feedback al usuario

});

app.put("/personas", function(res,req){
  let nombre = req.body.nombre;

  let apellido = req.body.apellido;

  let edad = req.body.edad;

  let personajillo = { nombre: nombre, apellido: apellido, edad: edad }
  let found=false

  for (let i = 0; i < personas.length &&!found; i++) {
    if(personas[i].nombre === req.body.nombre){
      found=true
      personas[i].apellido = req.body.apellido
      personas[i].edad = req.body.edad

    }
    
  }
  found //si found is true
  ?  res.send("Modificado correctamente")
  :  res.send("No se ha encontrado")

})

app.delete("/persona", function(res,req){
  res.body.nombre
  for (let i = 0; i < personas.length && !found; i++) {
    if(personas[i].nombre === req.body.nombre){
      found=true
      personas.splice(i,1)
    }
    
  }
  found //si found is true
  ?  res.send("Modificado correctamente")
  :  res.send("No se ha encontrado")
})

app.listen(3000)