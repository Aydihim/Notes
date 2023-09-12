const router = require('express').Router();
const { Note } = require('../db/models');

router.get('/page/:current_page/limit/:page_size', async (req, res) => {
  try {
    const { current_page, page_size } = req.params;

    let page = 1;
    if (!Number.isNaN(Number(current_page)) && Number(current_page) > 0) {
      page = Number(current_page);
    }
    let size = 3;
    if (
      !Number.isNaN(Number(page_size)) &&
      Number(page_size) > 0 &&
      Number(page_size) < 3
    ) {
      size = Number(current_page);
    }
    const results = await Note.findAndCountAll({
      order: [['updatedAt', 'DESC']],
      limit: size,
      offset: size * (page - 1),
    });
    console.log(results);
    res.status(200).json({
      note_rows: results.rows,
      total_pages: results.count,
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:id_note', async (req, res) => {
  try {
    const { id_note } = req.params;
    const result = await Note.findOne({
      where: { id: Number(id_note) },
      raw: true,
    });
    res.status(200).json(result);
  } catch ({ message }) {
    res.status(500).json({ message });
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

router.delete('/:id_note', async (req, res) => {
  try {
    const { id_note } = req.params;
    const result = await Note.destroy({
      where: { id: Number(id_note) },
    });
    if (result) {
      res.status(200).json(Number(id_note));
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await Note.findOne({
      where: { id: Number(id) },
    });
    note.title = title;
    note.content = content;
    note.save();
    res.status(201).json(note);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
