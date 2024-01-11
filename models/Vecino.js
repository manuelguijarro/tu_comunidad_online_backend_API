const mongoose = require('mongoose');

const VecinoSchema = new mongoose.Schema({
    nombreVecino: String,
    apellidosVecino:String,
    emailVecino:String,
    passwordVecino:String,
    pisoVecino:String,
    bloqueVecino:String,
    diaAltaVecino:String,
    mesAltaVecino:String,
    anioAltaVecino:String
});

const Vecino = mongoose.model('Vecino', VecinoSchema);

module.exports = Vecino;