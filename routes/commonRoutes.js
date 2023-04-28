const express = require('express')
const { home_get, smoothies_get } = require('./../controllers/commonControllers');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', requireAuth ,home_get)

router.get('/smoothies', requireAuth , smoothies_get)

module.exports = router;