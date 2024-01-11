const express = require('express');
const router = express.Router();

const { comprobarPresidente, obtenerPresidente, crearPresidente,obtenerPresidentes,/*enviarEmail*/ } = require('../controllers/presidentes');


router.get('/get-presidents', obtenerPresidentes);

router.post('/check-president', comprobarPresidente);

router.get('/:id', obtenerPresidente);

router.post('/create-president', crearPresidente);

module.exports = router
