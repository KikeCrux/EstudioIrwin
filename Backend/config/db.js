const mysql = require('mysql2');

let connection;

const connectDB = () => {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });

    // Manejar errores de conexión
    connection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            setTimeout(connectDB, 2000);
        } else {
            console.log('Conexión a la base de datos MySQL exitosa');
        }
    });

    // Manejar desconexión
    connection.on('error', (err) => {
        console.error('Error en la conexión a la base de datos:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Conexión perdida. Reconectando...');
            connectDB();
        } else {
            throw err;
        }
    });
};

// Inicializar conexión
connectDB();

module.exports = connection;
