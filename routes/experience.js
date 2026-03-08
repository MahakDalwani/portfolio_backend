const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

// GET - Get all experiences
router.get('/', experienceController.getAllExperiences);

// GET - Get experience by ID
router.get('/:id', experienceController.getExperienceById);

// POST - Create new experience
router.post('/', experienceController.createExperience);

// PUT - Update entire experience
router.put('/:id', experienceController.updateExperience);

// PATCH - Partial update experience
router.patch('/:id', experienceController.patchExperience);

// DELETE - Delete experience
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;
