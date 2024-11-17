const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Cargar configuración .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/users', require('./routes/usuariosRoutes'));
app.use('/api/services', require('./routes/serviciosRoutes'));
app.use('/api/appointments', require('./routes/citasRoutes'));
app.use('/api/portfolios', require('./routes/portafolioRoutes'));
app.use('/api/gallery', require('./routes/galeriaRoutes'));
app.use('/api/notifications', require('./routes/notificacionesRoutes'));
app.use('/api/transactions', require('./routes/transaccionesRoutes'));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
