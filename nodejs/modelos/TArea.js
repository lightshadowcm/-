const mongoose = require("mongoose");

let Tareaschema = new mongoose.Schema({
    idTarea :Number,
    nombreTarea : String,
    datalleTarea: String 
    
});
module.exports = mongoose.model("tarea", Tareaschema,"tareas");