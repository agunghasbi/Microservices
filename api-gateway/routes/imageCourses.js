const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

const imageCoursesHandler = require('./handler/image-courses');

router.post('/', verifyToken, imageCoursesHandler.create);
router.delete('/:id', verifyToken, imageCoursesHandler.destroy);

module.exports = router;
