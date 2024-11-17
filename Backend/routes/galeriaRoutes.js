const express = require('express');
const router = express.Router();
const galeriaController = require('../controllers/galeriaController');

// Ruta para registrar un archivo
router.post('/create', galeriaController.createArchivo);

// Ruta para listar todos los archivos (opcionalmente por portafolio)
router.get('/all', galeriaController.getAllArchivos);

// Ruta para actualizar un archivo
router.put('/update/:id_galeria', galeriaController.updateArchivo);

// Ruta para eliminar un archivo
router.delete('/delete/:id_galeria', galeriaController.deleteArchivo);

// Ruta para buscar archivos por nombre
router.get('/search', galeriaController.searchArchivos);

module.exports = router;
