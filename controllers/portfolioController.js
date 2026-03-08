const Portfolio = require('../models/Portfolio');

// GET - Get portfolio info
exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    res.status(200).json(portfolio || {});
  } catch (error) {
    console.error('Portfolio fetch error:', error);
    res.status(200).json({}); // Return empty object on error
  }
};

// POST - Create portfolio info
exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    const savedPortfolio = await portfolio.save();
    res.status(201).json(savedPortfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT - Update entire portfolio info
exports.updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH - Partial update portfolio info
exports.patchPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE - Delete portfolio info
exports.deletePortfolio = async (req, res) => {
  try {
    await Portfolio.deleteOne();
    res.status(200).json({ message: 'Portfolio deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
