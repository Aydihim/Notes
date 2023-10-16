const router = require('express').Router();
const { Reminder } = require('../db/models');

router.get('/page/:current_page/limit/:page_size', async (req, res) => {
  try {
    const { current_page, page_size } = req.params;

    let page = 1;
    if (!Number.isNaN(Number(current_page)) && Number(current_page) > 0) {
      page = Number(current_page);
    }
    let size = 6;
    if (
      !Number.isNaN(Number(page_size)) &&
      Number(page_size) > 0 &&
      Number(page_size) < 6
    ) {
      size = Number(current_page);
    }
    const results = await Reminder.findAndCountAll({
      order: [['updatedAt', 'DESC']],
      limit: size,
      offset: size * (page - 1),
    });
    res.status(200).json({
      reminder_rows: results.rows,
      total_pages: results.count,
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:id_reminder', async (req, res) => {
  try {
    const { id_reminder } = req.params;
    const result = await Reminder.findOne({
      where: { id: Number(id_reminder) },
      raw: true,
    });
    res.status(200).json(result);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { content, deadline } = req.body;
    if (content && deadline) {
      const reminder = await Reminder.create({
        content,
        deadline,
      });
      res.status(201).json(reminder);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:id_reminder', async (req, res) => {
  try {
    const { id_reminder } = req.params;
    const result = await Reminder.destroy({
      where: { id: Number(id_reminder) },
    });
    if (result) {
      res.status(200).json(Number(id_reminder));
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:id_reminder', async (req, res) => {
  try {
    const { id_reminder } = req.params;
    const {content, deadline } = req.body;
    console.log('back', deadline);
    const reminder = await Reminder.findOne({
      where: { id: Number(id_reminder) },
    });
    reminder.content = content;
    reminder.deadline = deadline;
    reminder.save();
    res.status(201).json(reminder);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
