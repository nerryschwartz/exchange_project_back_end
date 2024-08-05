const express = require('express');
const router = express.Router();
const Proposal = require('../models/Proposal');

// Create a new proposal
router.post('/', async (req, res) => {
  const { offeredItems, desiredItems, user } = req.body;
  
  try {
    const newProposal = new Proposal({
      offeredItems,
      desiredItems,
      user
    });

    const savedProposal = await newProposal.save();
    res.json(savedProposal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all proposals
router.get('/', async (req, res) => {
  try {
    const proposals = await Proposal.find();
    res.json(proposals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single proposal
router.get('/:id', async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    if (!proposal) return res.status(404).json({ message: 'Proposal not found' });
    res.json(proposal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a proposal
router.put('/:id', async (req, res) => {
  const { offeredItems, desiredItems } = req.body;

  try {
    const updatedProposal = await Proposal.findByIdAndUpdate(
      req.params.id,
      { offeredItems, desiredItems },
      { new: true }
    );
    res.json(updatedProposal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a proposal
router.delete('/:id', async (req, res) => {
  try {
    const deletedProposal = await Proposal.findByIdAndDelete(req.params.id);
    res.json(deletedProposal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;