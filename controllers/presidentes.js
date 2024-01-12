const Presidente = require('../models/Presidente');
const Vecino = require('../models/Vecino');
const { ObjectId } = require('bson');

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
const crearPresidente = async (req, res) => {
    try {
        // Crear el Vecino
        const vecinoResult = await Vecino.create(req.body);
        const vecino = await Vecino.findOne({ emailVecino: vecinoResult.emailVecino });

        // Crear el Presidente con referencia al Vecino
        const presidenteResult = await Presidente.create({
            datos_personales: {
                _id: new ObjectId(vecino._id),
            },
        });

        res.status(201).json({ code: 201 });
    } catch (error) {
        console.error(error);
        res.status(406).json({ Message: 'Presidente no creado' });
    }
};




module.exports = {
    comprobarPresidente,
    obtenerPresidente,
    crearPresidente,
    obtenerPresidentes,
    /*enviarEmail*/
};
