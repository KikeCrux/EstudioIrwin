const db = require('../config/db');

// Crear un servicio
exports.createServicio = async (req, res) => {
    const { nombre_servicio, descripcion, precio } = req.body;

    try {
        const query = 'INSERT INTO Servicios (nombre_servicio, descripcion, precio) VALUES (?, ?, ?)';
        const [results] = await db.promise().query(query, [nombre_servicio, descripcion, precio]);

        res.status(201).json({ message: 'Servicio creado correctamente', id: results.insertId });
    } catch (err) {
        console.error('Error al crear el servicio:', err);
        res.status(500).json({ error: 'Error al crear el servicio' });
    }
};

// Listar todos los servicios
exports.getAllServicios = async (req, res) => {
    try {
        const [results] = await db.promise().query('SELECT * FROM Servicios');
        res.json(results);
    } catch (err) {
        console.error('Error al obtener los servicios:', err);
        res.status(500).json({ error: 'Error al obtener los servicios' });
    }
};

// Actualizar un servicio
exports.updateServicio = async (req, res) => {
    const { id_servicio } = req.params;
    const { nombre_servicio, descripcion, precio } = req.body;

    try {
        const query = 'UPDATE Servicios SET nombre_servicio = ?, descripcion = ?, precio = ? WHERE id_servicio = ?';
        const [results] = await db.promise().query(query, [nombre_servicio, descripcion, precio, id_servicio]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Servicio no encontrado' });
        }

        res.json({ message: 'Servicio actualizado correctamente' });
    } catch (err) {
        console.error('Error al actualizar el servicio:', err);
        res.status(500).json({ error: 'Error al actualizar el servicio' });
    }
};

// Eliminar un servicio
exports.deleteServicio = async (req, res) => {
    const { id_servicio } = req.params;

    try {
        const query = 'DELETE FROM Servicios WHERE id_servicio = ?';
        const [results] = await db.promise().query(query, [id_servicio]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Servicio no encontrado' });
        }

        res.json({ message: 'Servicio eliminado correctamente' });
    } catch (err) {
        console.error('Error al eliminar el servicio:', err);
        res.status(500).json({ error: 'Error al eliminar el servicio' });
    }
};

// Buscar servicios por nombre
exports.searchServicios = async (req, res) => {
    const { nombre } = req.query;

    try {
        const query = 'SELECT * FROM Servicios WHERE nombre_servicio LIKE ?';
        const [results] = await db.promise().query(query, [`%${nombre}%`]);

        res.json(results);
    } catch (err) {
        console.error('Error al buscar servicios:', err);
        res.status(500).json({ error: 'Error al buscar servicios' });
    }
};
