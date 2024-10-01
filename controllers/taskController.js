const Task = require("../models/Task")

const taskController = {}

taskController.getTasks = async(req, res, next) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

taskController.createTask = async(req, res, next) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

taskController.getTaskById = async(req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(task);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

taskController.updateTask = async(req, res, next) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
          new: true,    // Devuelve el documento actualizado
          runValidators: true, // Aplica las validaciones del esquema
        });
        if (!updatedTask) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(updatedTask);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

taskController.deleteTask = async(req, res, next) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json({ message: 'Tarea eliminada correctamente' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = taskController