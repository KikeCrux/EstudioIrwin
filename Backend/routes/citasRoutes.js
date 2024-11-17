const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');

// Ruta para registrar una cita
router.post('/create', citasController.createCita);

// Ruta para listar todas las citas
router.get('/all', citasController.getAllCitas);

// Ruta para actualizar una cita
router.put('/update/:id_cita', citasController.updateCita);

// Ruta para eliminar una cita
router.delete('/delete/:id_cita', citasController.deleteCita);

// Ruta para buscar citas por usuario
router.get('/search', citasController.searchCitasByUsuario);

module.exports = router;
