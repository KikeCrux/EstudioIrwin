const express = require('express');
const router = express.Router();
const transaccionesController = require('../controllers/transaccionesController');

// Ruta para registrar una transacción
router.post('/create', transaccionesController.createTransaccion);

// Ruta para listar todas las transacciones (opcionalmente por usuario)
router.get('/all', transaccionesController.getAllTransacciones);

// Ruta para actualizar una transacción
router.put('/update/:id_transaccion', transaccionesController.updateTransaccion);

// Ruta para eliminar una transacción
router.delete('/delete/:id_transaccion', transaccionesController.deleteTransaccion);

// Ruta para buscar transacciones por fecha
router.get('/search', transaccionesController.searchTransaccionesByFecha);

module.exports = router;
