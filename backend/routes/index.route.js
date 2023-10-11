const router = require('express').Router();
const note_route = require('./note.route');
const reminder_route = require('./reminder.route');

router.use('/api/note', note_route);
router.use('/api/reminder', reminder_route);

module.exports = router;
