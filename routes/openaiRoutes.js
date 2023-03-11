const express = require('express');
const { summaryController, paragraphController, chatbotController, jsconverterController, scifiController } = require('../controllers/openaiController');

const router = express.Router()

router.post('/summary', summaryController);
router.post('/paragraph', paragraphController);
router.post('/chatbot', chatbotController);
router.post('/js_converter', jsconverterController);
router.post('/sci-fi-image', scifiController);




module.exports = router