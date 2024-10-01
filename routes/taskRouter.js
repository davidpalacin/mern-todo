// routes/taskRoutes.js
const express = require('express');
const traskController = require('../controllers/taskController');
const taskController = require('../controllers/taskController');

const taskRouter = express.Router();

// Crear una nueva tarea
taskRouter.post('/', taskController.createTask);

// Obtener todas las tareas
taskRouter.get('/', traskController.getTasks);

// Obtener una tarea por su ID
taskRouter.get('/:id', taskController.getTaskById);

// Actualizar una tarea por su ID
taskRouter.put('/:id', taskController.updateTask);

// Eliminar una tarea por su ID
taskRouter.delete('/:id', taskController.deleteTask);

module.exports = taskRouter;
