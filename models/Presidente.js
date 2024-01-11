const mongoose = require('mongoose');
const Vecino = require('./Vecino');
const PresidenteSchema = new mongoose.Schema({
    codigoPresidente: String,
    datos_personales: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vecino'
    }
})

const Presidente = mongoose.model('Presidente', PresidenteSchema);

module.exports = Presidente