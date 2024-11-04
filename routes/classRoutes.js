const express = require('express');
const { createClass, getClasses, getClass, updateClass, deleteClass } = require('../controllers/class');

const router = express.Router();


router.post('/', createClass);
router.get('/', getClasses);
router.get('/:id', getClass);
router.put('/:id', updateClass);
router.delete('/:id', deleteClass);

module.exports = router;
