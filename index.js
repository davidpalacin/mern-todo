// index.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const app = express();

const taskRouter = require('./routes/taskRouter'); // Importamos las rutas de tareas

// Middlewares
app.use(cors());
app.use(express.json());

// Usar las rutas de tareas
app.use('/api/tasks', taskRouter);

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Tareas!');
});

// Conexión a la base de datos
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión a la base de datos establecida');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Salir de la aplicación si falla la conexión
  }
};

startServer();
