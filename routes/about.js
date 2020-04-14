const express = require('express');
const router = express.Router();
const aboutController = require('../controller/aboutController');

router.get('/getMyData', aboutController.getAboutMe);


module.exports = router;