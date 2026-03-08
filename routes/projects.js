const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// GET - Get all projects
router.get('/', projectController.getAllProjects);

// GET - Get project by ID
router.get('/:id', projectController.getProjectById);

// POST - Create new project
router.post('/', projectController.createProject);

// PUT - Update entire project
router.put('/:id', projectController.updateProject);

// PATCH - Partial update project
router.patch('/:id', projectController.patchProject);

// DELETE - Delete project
router.delete('/:id', projectController.deleteProject);

module.exports = router;
