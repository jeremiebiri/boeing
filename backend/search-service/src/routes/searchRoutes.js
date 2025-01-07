const express = require('express');
const {
  searchTasks,
  indexTask,
  deleteTask,
} = require('../controllers/searchController');

const router = express.Router();

router.post('/search', searchTasks);


router.post('/index', indexTask);

router.delete('/delete/:id', deleteTask);

module.exports = router;
