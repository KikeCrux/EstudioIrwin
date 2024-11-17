const db = require('../config/db');

// Crear un portafolio
exports.createPortafolio = async (req, res) => {
    const { id_usuario, titulo, descripcion } = req.body;

    try {
        const query = 'INSERT INTO Portafolio (id_usuario, titulo, descripcion, fecha_creacion) VALUES (?, ?, ?, NOW())';
        const [results] = await db.promise().query(query, [id_usuario, titulo, descripcion]);

        res.status(201).json({ message: 'Portafolio creado correctamente', id: results.insertId });
    } catch (err) {
        console.error('Error al crear el portafolio:', err);
        res.status(500).json({ error: 'Error al crear el portafolio' });
    }
};

// Listar todos los portafolios (opcionalmente por usuario)
exports.getAllPortafolios = async (req, res) => {
    const { id_usuario } = req.query;

    try {
        let query = 'SELECT * FROM Portafolio';
        let values = [];

        if (id_usuario) {
            query += ' WHERE id_usuario = ?';
            values.push(id_usuario);
        }

        const [results] = await db.promise().query(query, values);
        res.json(results);
    } catch (err) {
        console.error('Error al obtener los portafolios:', err);
        res.status(500).json({ error: 'Error al obtener los portafolios' });
    }
};

// Actualizar un portafolio
exports.updatePortafolio = async (req, res) => {
    const { id_portafolio } = req.params;
    const { titulo, descripcion } = req.body;

    try {
        const query = 'UPDATE Portafolio SET titulo = ?, descripcion = ? WHERE id_portafolio = ?';
        const [results] = await db.promise().query(query, [titulo, descripcion, id_portafolio]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Portafolio no encontrado' });
        }

        res.json({ message: 'Portafolio actualizado correctamente' });
    } catch (err) {
        console.error('Error al actualizar el portafolio:', err);
        res.status(500).json({ error: 'Error al actualizar el portafolio' });
    }
};

// Eliminar un portafolio
exports.deletePortafolio = async (req, res) => {
    const { id_portafolio } = req.params;

    try {
        const query = 'DELETE FROM Portafolio WHERE id_portafolio = ?';
        const [results] = await db.promise().query(query, [id_portafolio]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Portafolio no encontrado' });
        }

        res.json({ message: 'Portafolio eliminado correctamente' });
    } catch (err) {
        console.error('Error al eliminar el portafolio:', err);
        res.status(500).json({ error: 'Error al eliminar el portafolio' });
    }
};

// Buscar portafolios por título
exports.searchPortafolios = async (req, res) => {
    const { titulo } = req.query;

    try {
        const query = 'SELECT * FROM Portafolio WHERE titulo LIKE ?';
        const [results] = await db.promise().query(query, [`%${titulo}%`]);

        res.json(results);
    } catch (err) {
        console.error('Error al buscar portafolios:', err);
        res.status(500).json({ error: 'Error al buscar portafolios' });
    }
};
