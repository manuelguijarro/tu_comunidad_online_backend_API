const express = require('express');
const router = express.Router();

const { comprobarVecino, obtenerVecino, crearVecino,obtenerVecinos,/*enviarEmail*/ } = require('../controllers/vecinos');

router.get('/get-neighbors', obtenerVecinos);

router.post('/check-neighbor', comprobarVecino);

router.get('/:id', obtenerVecino);


router.post('/create-neighbor', crearVecino);

//router.post('/send-email-neighbor', enviarEmail);

module.exports = router