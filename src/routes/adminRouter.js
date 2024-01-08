const express = require('express');
const router = express.Router();

const {indexAdmin} = require('../controllers/adminController');

const {userAdmin} = require('../middlewares/userAdmin');

router.get('/', userAdmin, indexAdmin);

module.exports = router;
