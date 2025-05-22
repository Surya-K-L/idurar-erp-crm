const express = require('express');
const router = express.Router();
const QueryManagement = require('../models/QueryManagement'); // Adjust path if needed

// Sample route: Create a new query
router.post('/query', async (req, res) => {
  try {
    const query = new QueryManagement(req.body);
    await query.save();
    res.status(201).json(query);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Sample route: Get all queries
router.get('/query', async (req, res) => {
  try {
    const queries = await QueryManagement.find();
    res.json(queries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
