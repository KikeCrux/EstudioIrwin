const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Ruta para registrar un cliente
router.post('/clients/register', usuariosController.createCliente);

// Ruta para registrar un administrador
router.post('/admins/register', usuariosController.createAdmin);

// Ruta para obtener todos los usuarios
router.get('/users', usuariosController.getAllUsuarios);

// Ruta para verificar un usuario (inicio de sesión)
router.post('/login', usuariosController.verifyUsuario);


module.exports = router;
