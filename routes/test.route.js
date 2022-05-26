const express = require('express');
const testController = require('../controllers/api/test.controller');

const router = express.Router();

router.get('/', testController.index);
router.get('/:test_id/firstnote', testController.getFirstNoteByTestId);
router.get('/:test_id/note/:note_id', testController.getNoteOfTest);
router.get('/:id', testController.showById);
router.post('/', testController.create);
router.put('/', testController.update);
router.delete('/', testController.destroy);

module.exports = router;
