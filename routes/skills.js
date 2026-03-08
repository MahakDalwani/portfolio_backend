const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// GET - Get all skills
router.get('/', skillController.getAllSkills);

// GET - Get skill by ID
router.get('/:id', skillController.getSkillById);

// POST - Create new skill
router.post('/', skillController.createSkill);

// PUT - Update entire skill
router.put('/:id', skillController.updateSkill);

// PATCH - Partial update skill
router.patch('/:id', skillController.patchSkill);

// DELETE - Delete skill
router.delete('/:id', skillController.deleteSkill);

module.exports = router;
