const Vecino = require('../models/Vecino');
/*
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: "tucomunidadonlineapp@gmail.com",
        pass: "trjyyqorjaci"
    },
    tls: {
        rejectUnauthorized: false
    }
}));

const data = {
    from: "tucomunidadonlineapp@gmail.com",
    to: "manu2506.1994@gmail.com",
    subject: "Bienvenido a tu Comunidad Online",
    text: "Querido vecino, usted ha sido registrado en tu Comunidad Online."
};

const send = (data) => {
    transporter.sendMail(data, (error, info) => {
        if (error) {
            return console.log(error);
        } else {
            return info.response;
        }
    });
};
const enviarEmail = (req, res) => {
    const { from, to, subject, text } = req.body;
    const data = { from, to, subject, text };

    // Utiliza el transporter para enviar el correo, no nodemailer directamente
    send(data);

    // Puedes enviar una respuesta al cliente si es necesario
    res.send("Correo enviado correctamente");
};
*/
const obtenerVecinos = (req, res) => {
    Vecino.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'Vecinos no encontrados' }));
};

const comprobarVecino = (req, res) => {
    Vecino.findOne({ emailVecino: req.body.emailVecino, password: req.body.passwordVecino })
        .then(result => {
            console.log(result);
            if (!result) {
                res.status(404).json({ Message: 'Vecino no encontrado' });
            } else {
                res.status(200).json({ result });
            }
        });
};

const obtenerVecino = (req, res) => {
    Vecino.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'Vecino no encontrado' }));
};
const obtenerVecinoEmail = (email) => {
    Vecino.findOne({ emailVecino: email })
        .then(result => result)
        .catch(error => res.status(404).json({ Message: 'Vecino no encontrado' }));
        
}
const crearVecino = (req, res) => {
    Vecino.create(req.body)
        .then(result => res.status(201).json({ code: 201}))
        .catch(error => res.status(406).json({ Message: 'Vecino no creado' }));
};



module.exports = {
    comprobarVecino,
    obtenerVecino,
    crearVecino,
    obtenerVecinos,
    obtenerVecinoEmail
    /*enviarEmail*/
};
