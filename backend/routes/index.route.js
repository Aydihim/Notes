const router = require('express').Router();
const note_route = require('./note.route');

router.use('/api/note', note_route);

module.exports = router;
