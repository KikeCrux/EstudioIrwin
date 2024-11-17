const db = require('../config/db');

// Registrar una transacción
exports.createTransaccion = async (req, res) => {
    const { id_usuario, id_servicio, monto, metodo_pago } = req.body;

    try {
        const query = 'INSERT INTO Transacciones (id_usuario, id_servicio, monto, fecha_pago, metodo_pago) VALUES (?, ?, ?, NOW(), ?)';
        const [results] = await db.promise().query(query, [id_usuario, id_servicio, monto, metodo_pago]);

        res.status(201).json({ message: 'Transacción registrada correctamente', id: results.insertId });
    } catch (err) {
        console.error('Error al registrar la transacción:', err);
        res.status(500).json({ error: 'Error al registrar la transacción' });
    }
};

// Listar todas las transacciones (opcionalmente por usuario)
exports.getAllTransacciones = async (req, res) => {
    const { id_usuario } = req.query;

    try {
        let query = `
            SELECT Transacciones.id_transaccion, Usuarios.nombre AS usuario, Servicios.nombre_servicio AS servicio, 
                   Transacciones.monto, Transacciones.fecha_pago, Transacciones.metodo_pago
            FROM Transacciones
            INNER JOIN Usuarios ON Transacciones.id_usuario = Usuarios.id_usuario
            INNER JOIN Servicios ON Transacciones.id_servicio = Servicios.id_servicio
        `;
        let values = [];

        if (id_usuario) {
            query += ' WHERE Transacciones.id_usuario = ?';
            values.push(id_usuario);
        }

        const [results] = await db.promise().query(query, values);
        res.json(results);
    } catch (err) {
        console.error('Error al obtener las transacciones:', err);
        res.status(500).json({ error: 'Error al obtener las transacciones' });
    }
};

// Actualizar una transacción
exports.updateTransaccion = async (req, res) => {
    const { id_transaccion } = req.params;
    const { monto, metodo_pago } = req.body;

    try {
        const query = 'UPDATE Transacciones SET monto = ?, metodo_pago = ? WHERE id_transaccion = ?';
        const [results] = await db.promise().query(query, [monto, metodo_pago, id_transaccion]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Transacción no encontrada' });
        }

        res.json({ message: 'Transacción actualizada correctamente' });
    } catch (err) {
        console.error('Error al actualizar la transacción:', err);
        res.status(500).json({ error: 'Error al actualizar la transacción' });
    }
};

// Eliminar una transacción
exports.deleteTransaccion = async (req, res) => {
    const { id_transaccion } = req.params;

    try {
        const query = 'DELETE FROM Transacciones WHERE id_transaccion = ?';
        const [results] = await db.promise().query(query, [id_transaccion]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Transacción no encontrada' });
        }

        res.json({ message: 'Transacción eliminada correctamente' });
    } catch (err) {
        console.error('Error al eliminar la transacción:', err);
        res.status(500).json({ error: 'Error al eliminar la transacción' });
    }
};

// Buscar transacciones por fecha
exports.searchTransaccionesByFecha = async (req, res) => {
    const { fecha } = req.query;

    try {
        const query = `
            SELECT Transacciones.id_transaccion, Usuarios.nombre AS usuario, Servicios.nombre_servicio AS servicio, 
                   Transacciones.monto, Transacciones.fecha_pago, Transacciones.metodo_pago
            FROM Transacciones
            INNER JOIN Usuarios ON Transacciones.id_usuario = Usuarios.id_usuario
            INNER JOIN Servicios ON Transacciones.id_servicio = Servicios.id_servicio
            WHERE DATE(Transacciones.fecha_pago) = ?
        `;
        const [results] = await db.promise().query(query, [fecha]);

        res.json(results);
    } catch (err) {
        console.error('Error al buscar transacciones:', err);
        res.status(500).json({ error: 'Error al buscar transacciones' });
    }
};
