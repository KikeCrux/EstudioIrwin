const db = require('../config/db');
const bcrypt = require('bcrypt');

// Crear cliente
exports.createCliente = async (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    try {
        // Validar que el correo no esté duplicado
        const [existingUser] = await db.promise().query('SELECT * FROM Usuarios WHERE correo = ?', [correo]);
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contraseña, salt);

        // Insertar cliente
        const query = 'INSERT INTO Usuarios (nombre, correo, contraseña, tipo_usuario) VALUES (?, ?, ?, ?)';
        const [results] = await db.promise().query(query, [nombre, correo, hashedPassword, 'cliente']);

        res.status(201).json({ message: 'Cliente creado correctamente', id: results.insertId });
    } catch (err) {
        console.error('Error al crear el cliente:', err);
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

// Crear administrador
exports.createAdmin = async (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    try {
        // Validar que el correo no esté duplicado
        const [existingUser] = await db.promise().query('SELECT * FROM Usuarios WHERE correo = ?', [correo]);
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contraseña, salt);

        // Insertar administrador
        const query = 'INSERT INTO Usuarios (nombre, correo, contraseña, tipo_usuario) VALUES (?, ?, ?, ?)';
        const [results] = await db.promise().query(query, [nombre, correo, hashedPassword, 'admin']);

        res.status(201).json({ message: 'Administrador creado correctamente', id: results.insertId });
    } catch (err) {
        console.error('Error al crear el administrador:', err);
        res.status(500).json({ error: 'Error al crear el administrador' });
    }
};

// Obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
    try {
        const [results] = await db.promise().query('SELECT id_usuario, nombre, correo, tipo_usuario FROM Usuarios');
        res.json(results);
    } catch (err) {
        console.error('Error al obtener los usuarios:', err);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

// Verificar usuario (inicio de sesión)
exports.verifyUsuario = async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        // Buscar el usuario por correo
        const [user] = await db.promise().query('SELECT * FROM Usuarios WHERE correo = ?', [correo]);
        if (user.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const usuario = user[0];

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        // Responder con los datos del usuario
        res.json({ id_usuario: usuario.id_usuario, nombre: usuario.nombre, correo: usuario.correo, tipo_usuario: usuario.tipo_usuario });
    } catch (err) {
        console.error('Error al verificar el usuario:', err);
        res.status(500).json({ error: 'Error al verificar el usuario' });
    }
};
