const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const can = require('../middlewares/permission');
const router = express.Router();

const coursesHandler = require('./handler/courses');

router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.get);

router.post('/', verifyToken, can('admin'), coursesHandler.create);
router.put('/:id', verifyToken, can('admin'), coursesHandler.update);
router.delete('/:id', verifyToken, can('admin'), coursesHandler.destroy);

module.exports = router;
