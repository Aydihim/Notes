const router = require('express').Router();
const note_route = require('./note.route');
const reminder_route = require('./reminder.route');
const tag_route = require('./tag.route');

router.use('/api/note', note_route);
router.use('/api/reminder', reminder_route);
router.use('/api/tag', tag_route);


module.exports = router;
