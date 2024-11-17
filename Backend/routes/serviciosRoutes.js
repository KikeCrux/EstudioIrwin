const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');

// Ruta para crear un servicio
router.post('/create', serviciosController.createServicio);

// Ruta para listar todos los servicios
router.get('/all', serviciosController.getAllServicios);

// Ruta para actualizar un servicio
router.put('/update/:id_servicio', serviciosController.updateServicio);

// Ruta para eliminar un servicio
router.delete('/delete/:id_servicio', serviciosController.deleteServicio);

// Ruta para buscar servicios por nombre
router.get('/search', serviciosController.searchServicios);

module.exports = router;
