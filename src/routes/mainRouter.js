const express = require('express');
const router = express.Router();

const {index, services, diseños} = require('../controllers/mainController');


router.get('/', index)
router.get("/services", services)
router.get("/services/design", diseños)

module.exports = router;

