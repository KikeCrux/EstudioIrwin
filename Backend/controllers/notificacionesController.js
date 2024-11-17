const db = require('../config/db');

// Registrar una notificación
exports.createNotificacion = async (req, res) => {
    const { id_usuario, mensaje, estado } = req.body;

    try {
        const query = 'INSERT INTO Notificaciones (id_usuario, mensaje, fecha_envio, estado) VALUES (?, ?, NOW(), ?)';
        const [results] = await db.promise().query(query, [id_usuario, mensaje, estado]);

        res.status(201).json({ message: 'Notificación registrada correctamente', id: results.insertId });
    } catch (err) {
        console.error('Error al registrar la notificación:', err);
        res.status(500).json({ error: 'Error al registrar la notificación' });
    }
};

// Listar todas las notificaciones (opcionalmente por usuario)
exports.getAllNotificaciones = async (req, res) => {
    const { id_usuario } = req.query;

    try {
        let query = 'SELECT * FROM Notificaciones';
        let values = [];

        if (id_usuario) {
            query += ' WHERE id_usuario = ?';
            values.push(id_usuario);
        }

        const [results] = await db.promise().query(query, values);
        res.json(results);
    } catch (err) {
        console.error('Error al obtener las notificaciones:', err);
        res.status(500).json({ error: 'Error al obtener las notificaciones' });
    }
};

// Actualizar el estado de una notificación
exports.updateNotificacionEstado = async (req, res) => {
    const { id_notificacion } = req.params;
    const { estado } = req.body;

    try {
        const query = 'UPDATE Notificaciones SET estado = ? WHERE id_notificacion = ?';
        const [results] = await db.promise().query(query, [estado, id_notificacion]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Notificación no encontrada' });
        }

        res.json({ message: 'Estado de la notificación actualizado correctamente' });
    } catch (err) {
        console.error('Error al actualizar el estado de la notificación:', err);
        res.status(500).json({ error: 'Error al actualizar el estado de la notificación' });
    }
};

// Eliminar una notificación
exports.deleteNotificacion = async (req, res) => {
    const { id_notificacion } = req.params;

    try {
        const query = 'DELETE FROM Notificaciones WHERE id_notificacion = ?';
        const [results] = await db.promise().query(query, [id_notificacion]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Notificación no encontrada' });
        }

        res.json({ message: 'Notificación eliminada correctamente' });
    } catch (err) {
        console.error('Error al eliminar la notificación:', err);
        res.status(500).json({ error: 'Error al eliminar la notificación' });
    }
};

// Buscar notificaciones por mensaje
exports.searchNotificaciones = async (req, res) => {
    const { mensaje } = req.query;

    try {
        const query = 'SELECT * FROM Notificaciones WHERE mensaje LIKE ?';
        const [results] = await db.promise().query(query, [`%${mensaje}%`]);

        res.json(results);
    } catch (err) {
        console.error('Error al buscar notificaciones:', err);
        res.status(500).json({ error: 'Error al buscar notificaciones' });
    }
};
