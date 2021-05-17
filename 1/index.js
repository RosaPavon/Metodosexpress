const express=require("express")//esto siempre
const app=express()//esto siempre
const personas=requiere("./personas")

app.use(express.static("public"))

app.get("./personas", function(req, res){
    res.send(personas)
})

app.listen(process.env.PORT || 3000)