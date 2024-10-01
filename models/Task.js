// models/Task.js
const mongoose = require('mongoose');

// Definimos el esquema de la tarea
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // El título es obligatorio
    trim: true,     // Elimina los espacios en blanco al inicio y al final
  },
  description: {
    type: String,
    trim: true,
    default: '', // Si no se proporciona, el valor será una cadena vacía
  },
  completed: {
    type: Boolean,
    default: false, // Por defecto, la tarea no está completada
  },
  createdAt: {
    type: Date,
    default: Date.now, // Se establece la fecha de creación automáticamente
  },
});

// Creamos el modelo con el nombre "Task" basado en el esquema taskSchema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
