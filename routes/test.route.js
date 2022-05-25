const express = require('express');
const testController = require('../controllers/api/test.controller');

const router = express.Router();

router.get('/test', testController.index);
router.get('/test/:id', testController.showById);
router.post('/test', testController.create);
router.put('/test', testController.update);
router.delete('/test', testController.destroy);

module.exports = router;
