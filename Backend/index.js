const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Cargar configuración .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para usuario
app.use('/api/user', require('./routes/usuariosRoutes'));

// Ruta para servicio
app.use('/api/service', require('./routes/serviciosRoutes'));

// Ruta para cita
app.use('/api/appointment', require('./routes/citasRoutes'));

// Ruta para portafolio
app.use('/api/portfolio', require('./routes/portafolioRoutes'));

// Ruta para la galería
app.use('/api/gallery', require('./routes/galeriaRoutes'));

// Ruta para notificación
app.use('/api/notification', require('./routes/notificacionesRoutes'));

// Ruta para transacción
app.use('/api/transaction', require('./routes/transaccionesRoutes'));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
