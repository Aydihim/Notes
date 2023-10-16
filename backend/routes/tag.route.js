const router = require('express').Router();
const { Tag } = require('../db/models');

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
    const results = await Tag.findAndCountAll({
      order: [['updatedAt', 'DESC']],
      limit: size,
      offset: size * (page - 1),
    });
    res.status(200).json({
      tag_rows: results.rows,
      total_pages: results.count,
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    if (title) {
      const tag = await Tag.create({
        title
      });
      res.status(201).json(tag);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:id_tag', async (req, res) => {
  try {
    const { id_tag } = req.params;
    const result = await Tag.destroy({
      where: { id: Number(id_tag) },
    });
    if (result) {
      res.status(200).json(Number(id_tag));
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
