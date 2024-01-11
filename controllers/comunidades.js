const Comunidad = require('../models/Comunidad');

const obtenerComunidades = (req, res) => {
    Comunidad.find({})
        
        .populate('presidente')
        .populate('vecinos')
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'Comunidades no encontradas' }));
};

const obtenerComunidad = (req, res) => {
    Comunidad.findOne({ _id: req.params.id })
        .populate('presidente')
        .populate('vecinos')
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'Comunidad no encontrada' }));
};

const crearComunidad = (req, res) => {
    Comunidad.create(req.body)
        .then(result => res.status(201).json({ result }))
        .catch(error => res.status(406).json({ Message: 'Comunidad no creada' }));
};

const aniadirPresidenteAComunidad = (req, res) => {
    Comunidad.findOneAndUpdate({ _id: req.params.id }, { presidente: req.params.id }, { new: true })
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'Comunidad no encontrada' }));
}

const comprobarVecinoComunidad = (req, res) => {
    Comunidad.findOne({ vecinos: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'Comunidad no encontrada' }));
}
module.exports = {
    obtenerComunidades,
    obtenerComunidad,
    crearComunidad,
    aniadirPresidenteAComunidad,
    comprobarVecinoComunidad
};