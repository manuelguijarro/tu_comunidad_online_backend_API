const Presidente = require('../models/Presidente');


const obtenerPresidentes = (req, res) => {
    Presidente.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'Presidentes no encontrados' }));
};

const comprobarPresidente = (req, res) => {
    Presidente.findOne({ emailPresidente: req.body.emailPresidente, password: req.body.passwordPresidente })
        .then(result => {
            console.log(result);
            if (!result) {
                res.status(404).json({ Message: 'Presidente no encontrado' });
            } else {
                res.status(200).json({ result });
            }
        });
};

const obtenerPresidente = (req, res) => {
    Presidente.findOne({ _id: req.params.id })
        .populate('datos_personales')  // Utiliza populate para cargar los datos del vecino
        .then(result => {
            if (!result) {
                return res.status(404).json({ Message: 'Presidente no encontrado' });
            }
            res.status(200).json({ result });
        })
        .catch(error => res.status(500).json({ Message: 'Error al buscar el presidente', error }));
};
const crearPresidente = (req, res) => {
    Presidente.create(req.body)
        .then(result => res.status(201).json({ code: 201}))
        .catch(error => res.status(406).json({ Message: 'Presidente no creado' }));
};



module.exports = {
    comprobarPresidente,
    obtenerPresidente,
    crearPresidente,
    obtenerPresidentes,
    /*enviarEmail*/
};
