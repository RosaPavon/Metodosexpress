
const express=require("express");
const app = express();
const persona=requiere("./personas")

app.use(express.urlencoded({extended: false}));//nos permite leer formularios
app.use(express.json());//nos permite leer informacion en jason
app.use(express.static("public"))//nos permite tener una carpeta estática, que es la que le enviamos el usuario


app.put('/persona', function(req, res) {
        res.send('Dato modificado');
    });
    



app.listen(3000)