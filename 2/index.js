
const express=require("express");
const app = express();
const persona=requiere("./personas")
app.use(express.urlencoded({extended: false}))

app.post('/persona', function(req, res) {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let edad = req.body.edad;
    let personajillo= nombre + apellido + edad

    res.send(personajillo.push(persona))
    });
    
app.listen(3000)