const db = require('../config/db');

// Registrar un archivo en la galería
exports.createArchivo = async (req, res) => {
    const { id_portafolio, nombre_archivo, ruta_archivo, tipo_archivo } = req.body;

    try {
        const query = 'INSERT INTO Galeria (id_portafolio, nombre_archivo, ruta_archivo, tipo_archivo, fecha_subida) VALUES (?, ?, ?, ?, NOW())';
        const [results] = await db.promise().query(query, [id_portafolio, nombre_archivo, ruta_archivo, tipo_archivo]);

        res.status(201).json({ message: 'Archivo registrado correctamente', id: results.insertId });
    } catch (err) {
        console.error('Error al registrar el archivo:', err);
        res.status(500).json({ error: 'Error al registrar el archivo' });
    }
};

// Listar todos los archivos (opcionalmente por portafolio)
exports.getAllArchivos = async (req, res) => {
    const { id_portafolio } = req.query;

    try {
        let query = 'SELECT * FROM Galeria';
        let values = [];

        if (id_portafolio) {
            query += ' WHERE id_portafolio = ?';
            values.push(id_portafolio);
        }

        const [results] = await db.promise().query(query, values);
        res.json(results);
    } catch (err) {
        console.error('Error al obtener los archivos:', err);
        res.status(500).json({ error: 'Error al obtener los archivos' });
    }
};

// Actualizar un archivo en la galería
exports.updateArchivo = async (req, res) => {
    const { id_galeria } = req.params;
    const { nombre_archivo, ruta_archivo, tipo_archivo } = req.body;

    try {
        const query = 'UPDATE Galeria SET nombre_archivo = ?, ruta_archivo = ?, tipo_archivo = ? WHERE id_galeria = ?';
        const [results] = await db.promise().query(query, [nombre_archivo, ruta_archivo, tipo_archivo, id_galeria]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Archivo no encontrado' });
        }

        res.json({ message: 'Archivo actualizado correctamente' });
    } catch (err) {
        console.error('Error al actualizar el archivo:', err);
        res.status(500).json({ error: 'Error al actualizar el archivo' });
    }
};

// Eliminar un archivo de la galería
exports.deleteArchivo = async (req, res) => {
    const { id_galeria } = req.params;

    try {
        const query = 'DELETE FROM Galeria WHERE id_galeria = ?';
        const [results] = await db.promise().query(query, [id_galeria]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Archivo no encontrado' });
        }

        res.json({ message: 'Archivo eliminado correctamente' });
    } catch (err) {
        console.error('Error al eliminar el archivo:', err);
        res.status(500).json({ error: 'Error al eliminar el archivo' });
    }
};

// Buscar archivos por nombre
exports.searchArchivos = async (req, res) => {
    const { nombre } = req.query;

    try {
        const query = 'SELECT * FROM Galeria WHERE nombre_archivo LIKE ?';
        const [results] = await db.promise().query(query, [`%${nombre}%`]);

        res.json(results);
    } catch (err) {
        console.error('Error al buscar archivos:', err);
        res.status(500).json({ error: 'Error al buscar archivos' });
    }
};
