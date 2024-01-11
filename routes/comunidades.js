const express = require('express');
const router = express.Router();

const {obtenerComunidades, obtenerComunidad, crearComunidad, aniadirPresidenteAComunidad, comprobarVecinoComunidad} = require('../controllers/comunidades');



router.get('/get-communities', obtenerComunidades);

router.get('/:id', obtenerComunidad);

router.post('/create-community', crearComunidad);

router.post('/add-president/:id', aniadirPresidenteAComunidad);


module.exports = router