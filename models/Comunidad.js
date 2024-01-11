const mongoose = require('mongoose');
const Vecino = require('./Vecino');
const Presidente = require('./Presidente');

const ComunidadSchema = new mongoose.Schema({
    codigoComunidad: String,
    nombreComunidad: String,
    calleComunidad: String,
    numeroComunidad: String,
    presidente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vecino'
    },
    vecinos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vecino'
    }]
});

const Comunidad = mongoose.model('Comunidad', ComunidadSchema);

module.exports = Comunidad