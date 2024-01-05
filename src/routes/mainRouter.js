const express = require('express');
const router = express.Router();

const {index} = require('../controllers/mainController');

const logMiddleware = require("../middlewares/userLogs")

router.get('/', index)

module.exports = router;

