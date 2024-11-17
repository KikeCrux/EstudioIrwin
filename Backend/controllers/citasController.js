const db = require('../config/db');

// Registrar una cita
exports.createCita = async (req, res) => {
    const { id_usuario, id_servicio, fecha_hora, estado } = req.body;

    try {
        const query = 'INSERT INTO Citas (id_usuario, id_servicio, fecha_hora, estado) VALUES (?, ?, ?, ?)';
        const [results] = await db.promise().query(query, [id_usuario, id_servicio, fecha_hora, estado]);

        res.status(201).json({ message: 'Cita creada correctamente', id: results.insertId });
    } catch (err) {
        console.error('Error al crear la cita:', err);
        res.status(500).json({ error: 'Error al crear la cita' });
    }
};

// Listar todas las citas
exports.getAllCitas = async (req, res) => {
    try {
        const query = `
            SELECT Citas.id_cita, Usuarios.nombre AS usuario, Servicios.nombre_servicio AS servicio, 
                   Citas.fecha_hora, Citas.estado
            FROM Citas
            INNER JOIN Usuarios ON Citas.id_usuario = Usuarios.id_usuario
            INNER JOIN Servicios ON Citas.id_servicio = Servicios.id_servicio
        `;
        const [results] = await db.promise().query(query);
        res.json(results);
    } catch (err) {
        console.error('Error al obtener las citas:', err);
        res.status(500).json({ error: 'Error al obtener las citas' });
    }
};

// Actualizar una cita
exports.updateCita = async (req, res) => {
    const { id_cita } = req.params;
    const { fecha_hora, estado } = req.body;

    try {
        const query = 'UPDATE Citas SET fecha_hora = ?, estado = ? WHERE id_cita = ?';
        const [results] = await db.promise().query(query, [fecha_hora, estado, id_cita]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Cita no encontrada' });
        }

        res.json({ message: 'Cita actualizada correctamente' });
    } catch (err) {
        console.error('Error al actualizar la cita:', err);
        res.status(500).json({ error: 'Error al actualizar la cita' });
    }
};

// Eliminar una cita
exports.deleteCita = async (req, res) => {
    const { id_cita } = req.params;

    try {
        const query = 'DELETE FROM Citas WHERE id_cita = ?';
        const [results] = await db.promise().query(query, [id_cita]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Cita no encontrada' });
        }

        res.json({ message: 'Cita eliminada correctamente' });
    } catch (err) {
        console.error('Error al eliminar la cita:', err);
        res.status(500).json({ error: 'Error al eliminar la cita' });
    }
};

// Buscar citas por usuario
exports.searchCitasByUsuario = async (req, res) => {
    const { id_usuario } = req.query;

    try {
        const query = `
            SELECT Citas.id_cita, Usuarios.nombre AS usuario, Servicios.nombre_servicio AS servicio, 
                   Citas.fecha_hora, Citas.estado
            FROM Citas
            INNER JOIN Usuarios ON Citas.id_usuario = Usuarios.id_usuario
            INNER JOIN Servicios ON Citas.id_servicio = Servicios.id_servicio
            WHERE Citas.id_usuario = ?
        `;
        const [results] = await db.promise().query(query, [id_usuario]);

        res.json(results);
    } catch (err) {
        console.error('Error al buscar citas:', err);
        res.status(500).json({ error: 'Error al buscar citas' });
    }
};
