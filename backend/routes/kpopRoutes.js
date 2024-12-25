const express = require('express');
const KpopGroup = require('../models/KpopGroup');

const router = express.Router();

// GET all groups
router.get('/', async (req, res) => {
  try {
    const groups = await KpopGroup.find();
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new group
router.post('/', async (req, res) => {
  const { name, debutYear, members, fandom } = req.body;
  try {
    const newGroup = new KpopGroup({ name, debutYear, members, fandom });
    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT (update) a group by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, debutYear, members, fandom } = req.body;
  try {
    const updatedGroup = await KpopGroup.findByIdAndUpdate(
      id,
      { name, debutYear, members, fandom },
      { new: true }
    );
    res.status(200).json(updatedGroup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a group by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await KpopGroup.findByIdAndDelete(id);
    res.status(200).json({ message: 'Group deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
