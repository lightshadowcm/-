console.log("hola mundo ");
const express = require("express");
const mongoose = require("mongoose");
const Tareaschema = require("./modelos/TArea.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true }));
app.use(express.json());

mongoose.connect("mongodb+srv://adhamcubillos:damian2002@cluster0.ylth3yn.mongodb.net/ActividadesBD?retryWrites=true&w=majority");

 router.get("/", (req,res) =>{
    res.send("el inicio fue exitoso")

 });
 router.get("/tarea", (req,res) =>{
    Tareaschema.find(function(err,datos){
        if(err) {
        console.log("error leyendo tareas");
    }
        else {
            res.send(datos)
        }

    });
 });
 router.post('/tarea', (req,res) =>{
    let nuevaTarea = new Tareaschema({
        idtarea :req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });
    nuevaTarea.save(function( err,datos) {
        if (err){
            console.log(err)
        }
        res.send("tarea almacenada correctamente.")
    });
 });
 app.use(router); 
 app.listen(3001, () =>{
    console.log("servidor corriendo en el puerto 3000");
 });