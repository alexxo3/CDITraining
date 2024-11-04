const express = require('express');
const { createEnrollment, getEnrollments, getEnrollment, updateEnrollment, deleteEnrollment } = require('../controllers/enrollment');

const router = express.Router();

router.post('/', createEnrollment);
router.get('/', getEnrollments);
router.get('/:id', getEnrollment);
router.put('/:id', updateEnrollment);
router.delete('/:id', deleteEnrollment);

module.exports = router;
