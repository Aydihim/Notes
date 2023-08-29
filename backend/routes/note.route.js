const router = require('express').Router();
const { Note } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const results = await Note.findAll({
      raw: true,
    });
    res.status(200).json(results);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    if (title && content) {
      const note = await Note.create({
        title,
        content,
      });
      res.status(201).json(note);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
