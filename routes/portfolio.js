const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// GET - Retrieve portfolio
router.get('/', portfolioController.getPortfolio);

// POST - Create portfolio
router.post('/', portfolioController.createPortfolio);

// PUT - Update entire portfolio
router.put('/', portfolioController.updatePortfolio);

// PATCH - Partial update portfolio
router.patch('/', portfolioController.patchPortfolio);

// DELETE - Delete portfolio
router.delete('/', portfolioController.deletePortfolio);

module.exports = router;
