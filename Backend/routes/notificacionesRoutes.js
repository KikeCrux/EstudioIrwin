const express = require('express');
const router = express.Router();
const notificacionesController = require('../controllers/notificacionesController');

// Ruta para registrar una notificación
router.post('/create', notificacionesController.createNotificacion);

// Ruta para listar todas las notificaciones (opcionalmente por usuario)
router.get('/all', notificacionesController.getAllNotificaciones);

// Ruta para actualizar el estado de una notificación
router.put('/update/:id_notificacion', notificacionesController.updateNotificacionEstado);

// Ruta para eliminar una notificación
router.delete('/delete/:id_notificacion', notificacionesController.deleteNotificacion);

// Ruta para buscar notificaciones por mensaje
router.get('/search', notificacionesController.searchNotificaciones);

module.exports = router;
