const express = require('express');
const router = express.Router();
const portafolioController = require('../controllers/portafolioController');

// Ruta para registrar un portafolio
router.post('/create', portafolioController.createPortafolio);

// Ruta para listar todos los portafolios (opcionalmente por usuario)
router.get('/all', portafolioController.getAllPortafolios);

// Ruta para actualizar un portafolio
router.put('/update/:id_portafolio', portafolioController.updatePortafolio);

// Ruta para eliminar un portafolio
router.delete('/delete/:id_portafolio', portafolioController.deletePortafolio);

// Ruta para buscar portafolios por título
router.get('/search', portafolioController.searchPortafolios);

module.exports = router;
